<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Tabeldash extends BaseController
{
    public function index()
    {
        $data = [
            'THEMES_PAGE'   => base_url('themes/imageserver/'),
            'SITE_URL'      => site_url(),
            'PAGE_TITLE'    => 'IMAGESERVER',
           
        ];

        $data['breadcrumbs'][] = [
            'breadcrumbs_title'     => 'Image'
        ];

        $tabelModel = new \App\Models\Tabel();
        $tabel = $tabelModel->getNewest();

        $data['LIST_FILE'] = $tabel;

        
        $data['has_header'][] = 'themes/imageserver/layout/header/header';
        $data['has_body'][] = 'themes/imageserver/layout/contents/tabel';
        $data['has_footer'][] = 'themes/imageserver/layout/footer/footer';
        $data['has_header'][] = 'themes/imageserver/layout/menu/sidebar';
        
        
        echo $this->pageBuilder($data);
    }
        
       
    
}