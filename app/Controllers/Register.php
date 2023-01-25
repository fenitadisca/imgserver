<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Register extends BaseController
{
    public function index()
    {
        //
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
