<?php

namespace Modules\Cms\Models;

use CodeIgniter\Model;

class BlogCms extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'Blog';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];

    function getblog($params)
    {
       
        $result = $this->findAll($params['length'], $params['start']);
        
        if (!empty($result)){
            $no = 1;
            foreach($result as $row){
                $image_array = json_decode($row['image']);
                $buttons = '';
                $buttons .= '<a href="'.site_url('cms/blog/edit/'.$row['id']).'" data-id="'.$row['id'].'" class="btn btn-warning btn-sm btn-edit"><i class="fa fa-edit"></i> Ubah</a>&nbsp;';
                $buttons .= '<a href="'.site_url('cms/blog/delete/'.$row['id']).'" data-id="'.$row['id'].'" class="btn btn-danger btn-sm btn-delete"><i class="fa fa-trash"></i> Hapus</a>';

                $data[] = [
                    'blog_no'         => $no,
                    'blog_id'         => $row['id'],
                    'blog_title'      => $row['title'],
                    'blog_link'       => $row['link_url'],
                    'blog_image'      => '', //$image_array->medium->source_url,
                    'blog_status'     => $row['is_active'],
                    'blog_actions'    => $buttons
                ];
                $no++;
            }

        } else {
            $data = [];
        }
        return $data;
    }

    function setInsert($params)
    {
        if (array_key_exists('blog_is_active', $params)){
            $is_active = 1;
        } else {
            $is_active = 0;
        }
        $fields = [
            'title'     => $params['blog_title'],
            'link'      => $params['blog_link'],
            'image'     => '',    
            'is_active' => $is_active
        ];
        $result = $this->insert($fields);
        if ($result){
            $data = [
                'status' => 1,
                'msg'       => 'Success::Insert a New record!'
            ];
        } else {
            $data = [
                'status' => 0,
                'msg'       => 'Error::Failed to insert a New record!'
            ];
        }
        return $data;
    }

    function setUpdate($id, $params)
    {
        if (array_key_exists('blog_is_active', $params)){
            $is_active = 1;
        } else {
            $is_active = 0;
        }
        $fields = [
            'title'     => $params['blog_title'],
            'link'      => $params['blog_link'],
            'image'     => '',    
            'is_active' => $is_active
        ];
        $result = $this->update($id, $fields);
        if ($result){
            $data = [
                'status' => 1,
                'msg'       => 'Success::Update record!'
            ];
        } else {
            $data = [
                'status' => 0,
                'msg'       => 'Error::Failed to update a New record!'
            ];
        }
        return $data;
    }

    function setDelete($id)
    {
        $result = $this->delete($id);
        if ($result){
            $data = [
                'status' => 1,
                'msg'       => 'Success::Delete record!'
            ];
        } else {
            $data = [
                'status' => 0,
                'msg'       => 'Error::Failed to delete a New record!'
            ];
        }
        return $data;
    }

    function getDetailId($id)
    {
        $this->where('id', $id);
        $row = $this->first();
        return $row;
    }
}
