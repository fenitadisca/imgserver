<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Resize extends BaseController
{
    public function index()
    {
      $params = $this->request->getVar();
      $domain = $params['domain'];

      $folder = $params['folder'];
      $size = (array) json_decode ($params['size']);
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
                'source_url' => site_url('uploads' . $domain . '/' . $folder . '/original/' . url_title)
            ];
            $size_key = array_keys($size);

            foreach ($size_key as $row) {
                $width = $size[$row]->width;
                $height = $size[$row]->height;
                $sizes = $width . 'x' . $height;
                $data['userfile'][$row] = [
                    'file' => $image_name,
                    'width' => $width,
                    'height' => $height,
                    'mime_type' => 'uploads/' . end($temp),
                    'source_url' => site_url('uploads/' . $domain. '/' . $folder. '/' . $sizes. '/'. url_title)
                ];

                $source = $path . $newfilename;
                $dest = 'public/resize' . $domain . '/' . $folder . '/' . $sizes . '/' . $newfilename;
                $new_path = 'public/resize' . $domain . '/' . $folder . '/' . $sizes;

                if(!is_dir($new_path)){ //create folder if it's not already exixst
                    mkdir($new_path, 0776, TRUE);
                }
                $this->resize($source, $dest, $width, $height);


            }
        }

    }

    function resize($source, $dest, $width, $height){
        $image = \Config\Services\image()
            ->withFile($source)
            ->fit($width, $height, 'center')
            ->save($dest);

        return $image;
    }

    public function detail(){
        $data = [
            'THEMES_PAGE'   => base_url('themes/imageserver/'),
            'SITE_URL'      => site_url(),
            'PAGE_TITLE'    => 'IMAGESERVER',
           
        ];

        echo $this->parser->setData($data)->render('themes/' .'imageserver'.'/layout/contents/detail');
    }
}