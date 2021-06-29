<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->charset = 'utf8';
            $table->collation = 'utf8_czech_ci';

            $table->increments('iditem')->autoIncrement()->primary()->comment("IDentifikátor položky");
            $table->foreign('item_type_idtype')->comment("Typ - Kniha / Pomůcka")->references('idtype')->on('item_types');
            $table->string('item_name', 255)->comment("Název položky")->nullable();
            $table->string('url', 255)->comment("Odkaz na prodejce")->nullable();
            $table->string('isbn', 50)->nullable();
            $table->string('cover_medium_url', 255)->comment("Obrázek položky")->nullable();

            $table->string('price', 255)->comment("Cena 1 ks bez DPH")->nullable();
            $table->text('description')->comment("Popis položky")->nullable();

            $table->string('item_autor', 255)->nullable();
            $table->string('source', 255)->nullable();
            $table->string('cover_icon_url', 255)->nullable();
            $table->string('rating_url', 255)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
