<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Games extends BaseController
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

    public function store()
    {
      $params = $this->request->getVar();
     // $domain = $params['domain']; 


      //$folder = $params['folder'];
        $params['size'] = [];
        //  echo '<pre>';
        //     print_r($params);
        // die;

      $size = (array) ($params['size']);
        $img = $this->request->getFile('userfile');
        $image_name = $img->getName();
        $path = 'public/uploads';

      //Renaming file before upload
        $temp = explode(".", $image_name);
        $newfilename = strtolower(round(microtime(true)) . '.' . end($temp));

        if($img->move($path, $newfilename)){

            $data['userfile'] = [];
            $data['userfile']['original'] = [
                'file' =>  $image_name,
                'mime_type' => strtolower('uploads/' . end($temp)),
                'source_url' => site_url('uploads'   . '/original/' . url_title)
            ];
            $size_key = array_keys($size);

            foreach ($params['width'] as $row) {
                echo '<pre>';
            print_r($row);
        die;
                $width = $row;
                $height = $row->height;
                $sizes = $width . 'x' . $height;
                $data['userfile'][$row] = [
                    'file' => $image_name,
                    'width' => $width,
                    'height' => $height,
                    'mime_type' => 'uploads/' . end($temp),
                    'source_url' => site_url('uploads/' . $sizes. '/'. url_title)
                ];

                $source = $path . $newfilename;
                $dest = 'public/resize'  . $sizes . '/' . $newfilename;
                $new_path = 'public/resize'  . $sizes;

                if(!is_dir($new_path)){ //create folder if it's not already exixst
                    mkdir($new_path, 0776, TRUE);
                }
                $this->resize($source, $dest, $width, $height);


            }
        }

    }
}