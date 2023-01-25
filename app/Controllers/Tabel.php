<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Tabel extends BaseController
{
    public function index()
    {
        $tabelModel = new \App\Models\Tabel();
        $tabel = $tabelModel->getNewest();

        $data['LIST_FILE'] = $tabel;
       
        $data['has_header'][] = 'themes/imageserver/layout/header/header';
        $data['has_body'][]     = 'themes/imageserver/layout/contents/tabel';
        $data['has_footer'][] = 'themes/imageserver/layout/footer/footer';
        echo $this->pageBuilder($data);
    }
}