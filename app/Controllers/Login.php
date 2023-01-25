<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Login extends BaseController
{
    public function index()
    {
        //
        $data = [
            'THEMES_PAGE'   => base_url('themes/imageserver/'),
            'SITE_URL'      => site_url(),
            'PAGE_TITLE'    => 'LOGIN IMAGESERVER'
        ];

       
        echo $this->parser->setData($data)->render('themes/' .'imageserver'.'/layout/login/login');
    }
}