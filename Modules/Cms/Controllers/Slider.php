<?php

namespace Modules\Cms\Controllers;

use App\Controllers\BaseController;

class Slider extends BaseController
{
    public function index()
    {
        //
        $data = [
            'THEMES_PAGE'   => base_url('themes/cms/'),
            'SITE_URL'      => site_url('cms'),
            'PAGE_TITLE'    => 'WSL EVENTS',
            'THEMES'        => $this->adminThemes,
            'table_title'   => 'Slider'
        ];

        $alert_msg = $this->session->getFlashdata('alert_msg');
        if (!empty($alert_msg)){
            $data['alert_msg'] = $alert_msg;
            $data['WIDGET_ALERT_SECTION'] = $this->parser->setData($data)->render($data['THEMES'].'/layout/widget/success_widget');
        } else {
            $data['alert_msg'] = '';
            $data['WIDGET_ALERT_SECTION'] = '';
        }

        $data['breadcrumbs'][] = [
            'breadcrumbs_title'     => 'Slider'
        ];

        $SliderModel            = model('Modules\Cms\Models\SliderCms');
        $params = [
            'start' => 0,
            'length'=> 10,
        ];
        $slider_list = $SliderModel->getSlider($params);
        $data['SLIDER_LIST']    = $slider_list;
        

        $data['has_header'][] = 'themes/cms/layout/header/header';
        $data['has_header'][] = 'themes/cms/layout/menu/sidebar';
        
        $data['has_body'][]     = 'themes/cms/layout/header/breadcrumbs';
        $data['has_body'][]     = 'themes/cms/layout/list/Slider_list';
        
        echo $this->pageBuilder($data);
    }

    public function form($id=0)
    {
        //
        $data = [
            'THEMES_PAGE'   => base_url('themes/cms/'),
            'SITE_URL'      => site_url('cms'),
            'PAGE_TITLE'    => 'WSL EVENTS',
            'THEMES'        => $this->adminThemes,
            'table_title'   => 'Slider',
            'URL_SLIDER_SAVE'   => site_url('cms/slider/save')
        ];

        $alert_msg = $this->session->getFlashdata('alert_msg');
        if (!empty($alert_msg)){
            $data['alert_msg'] = $alert_msg;
            $data['WIDGET_ALERT_SECTION'] = $this->parser->setData($data)->render($data['THEMES'].'/layout/widget/danger_widget');
        } else {
            $data['alert_msg'] = '';
            $data['WIDGET_ALERT_SECTION'] = '';
        }

        $data['breadcrumbs'][] = [
            'breadcrumbs_title'     => 'Slider'
        ];

        $SliderModel            = model('Modules\Cms\Models\SliderCms');
        if ($id>0){
            $detail = $SliderModel->getDetailId($id);
            $data['slider_id']      = $detail['id'];
            $data['slider_title']   = $detail['title'];
            $data['slider_link']    = $detail['link'];
            $data['slider_is_active']  = $detail['is_active'];
        } else {
            $data['slider_id']      = '';
            $data['slider_title']   = '';
            $data['slider_link']    = '';
            $data['slider_is_active']  = 1;
        }

        $params = [
            'start' => 0,
            'length'=> 10,
        ];
        $Slider_list = $SliderModel->getSlider($params);
        $data['Slider_LIST']    = $Slider_list;
        

        $data['has_header'][] = 'themes/cms/layout/header/header';
        $data['has_header'][] = 'themes/cms/layout/menu/sidebar';
        
        $data['has_body'][]     = 'themes/cms/layout/header/breadcrumbs';
        $data['has_body'][]     = 'themes/cms/layout/form/Slider_form';
        
        echo $this->pageBuilder($data);
    }

    function delete($id)
    {
        $SliderModel            = model('Modules\Cms\Models\SliderCms');
        if ((!empty($id)) || ($id>0)){
            $result = $SliderModel->setDelete($id);
            if ($result['status']){
                $this->session->setFlashdata('alert_msg', $result['msg']);
                return redirect()->to('cms/Slider');
            }

        } else {
            $this->session->setFlashdata('alert_msg', 'Can not delete empty id!');
            return redirect()->back();
        }
    }

    function saveSlider()
    {
        $params = $this->request->getPost();
        //print_r($params);
        if (!empty($params['slider_title'])) {
            $SliderModel            = model('Modules\Cms\Models\SliderCms');
            if ($params['id']>0){
                $result = $SliderModel->setUpdate($params['id'], $params);
            } else {
                $result = $SliderModel->setInsert($params);
            }

           
            $this->session->setFlashdata('alert_msg', $result['msg']);
            return redirect()->to('cms/slider');
        } else {

            $this->session->setFlashdata('alert_msg', 'Can not insert empty fields');
            return redirect()->back();
        }
        
    }
}
