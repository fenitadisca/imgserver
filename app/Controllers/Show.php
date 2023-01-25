<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Show extends BaseController
{
    public function index($alias = '')
    {
        $showModel = new \App\Models\Show();
        $detail = $showModel->getDetailAlias($alias);
        // print_r($detail);
        // die;
        header("Content-Type: image/jpg");
      
        //  echo '<pre>';
        //     print_r($file);
        // die;
        if(!empty($detail)){
            $file = $detail['userfile'];
            readfile($file);
            exit(0);
        } else {
            echo "NGGA ADA";
            
        }


    }


}