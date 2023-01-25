<?php

namespace Modules\Cms\Controllers;

use App\Controllers\BaseController;

class Home extends BaseController
{
    public function index()
    {
        //
        $data = [
            'THEMES_PAGE'   => base_url('themes/cms/'),
            'SITE_URL'      => site_url('cms'),
            'PAGE_TITLE'    => 'WSL EVENTS',
            'THEMES'        => $this->adminThemes
        ];

        $data['has_header'][] = 'themes/cms/layout/header/header';
        $data['has_header'][] = 'themes/cms/layout/menu/sidebar';
        
        
        echo $this->pageBuilder($data);
    }
}
