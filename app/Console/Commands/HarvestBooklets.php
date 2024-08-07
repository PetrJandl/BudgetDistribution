<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Item;

class HarvestBooklets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'harvest:books';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'HARVEST';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $ObalkyKnih = 'http://cache.obalkyknih.cz/api/books?multi=[';
        $count = 0;
        foreach ( Item::whereNotNull("isbn")->WhereNull('item_name')->WhereNull('item_autor')->get() as $book ) {
		if( preg_match("/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/m", trim($book->isbn) ) ){
			$ObalkyKnih = $ObalkyKnih . '{"isbn":"' . urlencode(trim($book->isbn)) . '"},';
        		$count++;
		}else{
			echo "Tohle ISBN je asi spatne?: \" " . $book->isbn . "\"\n";
		}
        }
        $ObalkyKnih = substr($ObalkyKnih, 0, -1) . ']';
        //print_r($ObalkyKnih);
        if ($count > 0) {
            //print_r("count > 0\n");
            $file = file_get_contents($ObalkyKnih);
            //print_r($file);
            $data = json_decode($file);
            //die();
            foreach ($data as $key => $value) {
                if (isset($value->bib_title)) {
                    $books[$value->bibinfo->isbn]['item_name'] = $value->bib_title;
                }
                if (isset($value->bib_autor)) {
                    $books[$value->bibinfo->isbn]['item_autor'] = $value->bib_autor;
                } elseif (isset($value->csn_iso_690)) {
                    $autor = explode("<i>", $value->csn_iso_690);
                    $books[$value->bibinfo->isbn]['item_autor'] = rtrim(ucwords(mb_strtolower(trim($autor[0]), "UTF-8")), ".");
                }
                if (isset($value->annotation->html)) {
                    $books[$value->bibinfo->isbn]['description'] = $value->annotation->html;
                }
                if (isset($value->annotation->source)) {
                    $books[$value->bibinfo->isbn]['source'] = $value->annotation->source;
                }
                if (isset($value->cover_medium_url)) {
                    $books[$value->bibinfo->isbn]['cover_medium_url'] = $value->cover_medium_url;
                }
                if (isset($value->cover_icon_url)) {
                    $books[$value->bibinfo->isbn]['cover_icon_url'] = $value->cover_icon_url;
                }
                if (isset($value->rating_url)) {
                    $books[$value->bibinfo->isbn]['rating_url'] = $value->rating_url;
                }
                if (isset($books[$value->bibinfo->isbn])) {
                    Item::where('isbn', '=', $value->bibinfo->isbn)->update($books[$value->bibinfo->isbn]);
                    echo $value->bibinfo->isbn." OK \n\n";
                } else {
                    Item::where('isbn', '=', $value->bibinfo->isbn)->update(array("item_name" => "-", "item_autor" => "-"));
                    echo "Kniha " . $value->bibinfo->isbn . " neni na serveru obalkyknih.cz\n";
                }
            }
            //            foreach ($books as $key => $value) {
            //                print_r($books);
            //            }
        }
        //print_r($books);
        //Item::update($books)->save();
        return 0;
    }
}
