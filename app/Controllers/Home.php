<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data = [
            'THEMES_PAGE'   => base_url('themes/games/'),
            'SITE_URL'      => site_url(),
            'PAGE_TITLE'    => 'WSL EVENTS'
        ];

        $sliderModel            = model('App\Models\Slider');
        $blogModel              = model('App\Models\Blog');
        $params = [
            'start' => 0,
            'length'=> 3,
        ];
        $slider_list = $sliderModel->getSlider($params);
        $data['SLIDER_LIST']    = $slider_list;
        
        $params = [
            'start' => 0,
            'length'=> 3,
        ];
        $blog_list = $blogModel->getNewest($params);
        $data['BLOG_LIST']    = $blog_list;
        

        $data['has_body'][]     = 'themes/games/layout/contents/Slider';
        $data['has_body'][]     = 'themes/games/layout/contents/game_list';
        $data['has_body'][]     = 'themes/games/layout/contents/forum_list';
        $data['has_body'][]     = 'themes/games/layout/contents/blog_list';
        
        $data['has_footer'][]   = 'themes/games/layout/footer/footer';
        $data['has_footer'][]   = 'themes/games/layout/menu/sidebar';
        $data['has_footer'][]   = 'themes/games/layout/commons/home_js';

        echo $this->pageBuilder($data);
    }


    public function web($alias='')
    {
        $data = [
            'THEMES_PAGE'   => base_url('themes/games/'),
            'SITE_URL'      => site_url(),
            'PAGE_TITLE'    => 'WSL EVENTS'
        ];
        
        
        $data['has_footer'][]   = 'themes/games/layout/footer/footer';
        $data['has_footer'][]   = 'themes/games/layout/menu/sidebar';
        $data['has_footer'][]   = 'themes/games/layout/commons/home_js';

        echo $this->pageBuilder($data);
    }
}
