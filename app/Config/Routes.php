<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.
$routes->get('/', 'Home::index');
$routes->get('hubungi-kami', 'Home::web/contact-us');
$routes->get('tentang-kami', 'Home::web/about-us');

$routes->get('events', 'Events::index');
$routes->get('pertandingan', 'Pertandingan::index');
$routes->get('forum', 'Forum::index');
$routes->get('blog', 'Blog::index');
$routes->get('games', 'Games::index');
$routes->get('galeri', 'Gallery::index');


$routes->get('login', 'Login::index');
$routes->get('register', 'Register::index');

$routes->get('dashboard', 'Tabeldash::index');
$routes->get('detail', 'Resize::detail');

$routes->group('cms', ['namespace' => 'Modules\Cms\Controllers'], function($routes)
{
    $routes->get('/', 'Home::index');

});

$routes->group('cms/blog', ['namespace' => 'Modules\Cms\Controllers'], function($routes)
{
    $routes->get('/', 'Blog::index');
    $routes->get('edit/(:num)', 'Blog::form/$1');
    $routes->get('delete/(:num)', 'Blog::delete/$1');
    $routes->get('new', 'Blog::form');
    $routes->post('save', 'Blog::saveBlog');
    
});

$routes->group('cms/slider', ['namespace' => 'Modules\Cms\Controllers'], function($routes)
{
    $routes->get('/', 'Slider::index');
    $routes->get('edit/(:num)', 'Slider::form/$1');
    $routes->get('delete/(:num)', 'Slider::delete/$1');
    $routes->get('new', 'Slider::form');
    $routes->post('save', 'Slider::saveSlider');
    
    
});
$routes->get('upload', 'Upload::index');  
$routes->post('upload', 'Upload::upload');
//$routes->post('upload', 'Upload::store');
$routes->get('tabel', 'Tabel::index');  
$routes->get('show/(:any)', 'Show::index/$1'); 
//$routes->get('show/(:any)', 'Show::getDetailAlias/$1'); // Add this line.







/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}