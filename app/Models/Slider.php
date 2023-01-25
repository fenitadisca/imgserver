<?php

namespace App\Models;

use CodeIgniter\Model;

class Slider extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'slider';
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


    function getSlider($params)
    {
        $this->where('published_at<=now()');
        $this->where('expired_at>now()');        
        $this->where('is_active', 1);
        $result = $this->findAll($params['length'], $params['start']);
        if (!empty($result)){
            foreach($result as $row){
                $image_array = json_decode($row['image']);
                $data[] = [
                    'slider_id'    => $row['id'],
                    'slider_title' => $row['title'],
                    'slider_link'  => $row['link'],
                    'slider_image' => '', //$image_array->medium->source_url
                ];
            }

        } else {
            $data = [];
        }
        return $data;
    }

    
}
