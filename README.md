## About BudgetDistribution

BudgetDistribution is a simple web application for dividing the subsidy into books and aids from the region to the catchment libraries. It uses these technologies

- Laravel 8.4
- Bootstrap 5
- Vue.js 2
- MariaDB 10

It does not contain administration for entering data, only overviews of inserted orders.

## Description of functions

Data must be entered into the database by external applications (<a href="https://www.phpmyadmin.net/">phpMyadmin</a>, <a href="https://www.adminer.org/">adminer</a>, etc.)
1) For books, it is mainly the ISBN and price. If the ISBN code is found on the obalkyknih.cz server, all other information will be downloaded from the server. However, if the ISBN server does not contain, a title and the author is set to - so that the script does not try again and again.
2) The tools must then enter all the information. That is, the name, description, price and ideally the file name of the image. Images can then be saved in the public / img / tools folder (for books, it can also be used with the public / img / books path)

The system intentionally does not allow registration, but only the selection or modification of information about the customer. The list of customers is in the librars table.

## Database schema
<div>
<p><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/DBbshop.png"></p>
</div>

## ScreenShots
<div>
<p><div>Home Page</div><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/bshop-Home.png"></p>
<p><div>Books Page</div><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/bshop-Books.png"></p>
<p><div>Tools Page</div><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/bshop-Tools.png"></p>
<p><div>Basket Page</div><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/bshop-Basket.png"></p>
<p><div>Admin Page</div><img src="https://raw.githubusercontent.com/PetrJandl/BudgetDistribution/main/web_screenshots/bshop-admin.png"</p>
</div>

## License

BudgetDistribution is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
