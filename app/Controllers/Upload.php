<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\Files\UploadedFile;
use PHPUnit\TextUI\XmlConfiguration\File;

class Upload extends BaseController
{
    protected $helpers = ['form'];
    public function index()
    {
        
        
        $data['has_header'][] = 'themes/imageserver/layout/header/header';
        $data['has_body'][]     = 'themes/imageserver/layout/form/upload_form';
        $data['has_footer'][] = 'themes/imageserver/layout/footer/footer';
        echo $this->pageBuilder($data);
        //return view('upload_form', ['errors' => []]);
    }

    public function upload()
    {
        $params = $this->request->getPost();
       
        $img = $this->request->getFile('userfile');
        $image_name = $img->getName();

        $path = 'public/uploads';

        $temp = explode(".", $image_name);
        $newfilename = strtolower(round(microtime(true)) . '.' . end($temp));
      

        $ukuran = $params['size'];
      
        $validationRule = [
            'userfile' => [
                'label' => 'Image File',
                'rules' => [
                    'uploaded[userfile]',
                    'is_image[userfile]',
                    'mime_in[userfile,image/jpg,image/jpeg,image/gif,image/png,image/webp]',
                    // 'max_size[userfile,8000]',
                    // 'max_dims[userfile,1024,768]',
                ],
            ],
        ];
        if (! $this->validate($validationRule)) {
            $data = ['errors' => $this->validator->getErrors()];
            $data = ['errors' => 'The file has already been moved.'];
        }
            
        $img = $this->request->getFile('userfile');
       


        if (!$img->hasMoved()) {

            $ext = $img->getClientExtension();
            // $newName = $img->getRandomName();
            $img->move(ROOTPATH . 'public/uploads', $newfilename);
           
                $data = [
                    'name' => $image_name,
                    'userfile' => base_url() . "/uploads/" . $img->getName()

                ]; 
                
             $uploadModel = new \App\Models\Upload();
             $uploadModel->simpan_gambar($data); 

                $size_key = array_keys($ukuran);
            foreach ($size_key as $row) {
                // echo $row;
                $a = $ukuran[$row];
                $width = $a['width'];
                $height = $a['height'];
                $sizes = $width . 'x' . $height;
                //    echo $height;
                $data['userfile'][$row] = [
                    'file' => $image_name,
                    'width' => $width,
                    'height' => $height,
                    'mime_type' => 'uploads/' . end($temp),
                    //'source_url' => site_url('uploads/' . $sizes . '/' . url_title)
                ];

                $source = $path . $newfilename;
                $dest = 'public/resize' . '/' . $sizes . '/' . $newfilename;
                $new_path = 'public/resize' . '/' . $sizes;

                if (!is_dir($new_path)) { //create folder if it's not already exixst
                    mkdir($new_path, 0776, true);
                }

                $this->resize($source, $dest, $width, $height);




            }
            
           
            
        }  
          



      
           // $data = ['uploaded_fileinfo' => new File( $img)];
            //  echo '<pre>';
            // print_r($img);
          // return redirect()->to(site_url() . 'show/'. $img->getName());
             //return view('upload_success', $data);
               
            // else {
           //     return $this->index();
           // }
        
      

        return redirect()->route('detail');
    }

    

    

    function resize($source, $dest, $width, $height){
        $image = \Config\Services::images()
            ->withFile($source)
            ->fit($width, $height, 'center')
            ->save($dest);

        return $image;
    }
}