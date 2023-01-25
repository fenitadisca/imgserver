<?php

namespace Modules\Cms\Controllers;

use App\Controllers\BaseController;

class Blog extends BaseController
{
    public function index()
    {
        //
        $data = [
            'THEMES_PAGE'   => base_url('themes/cms/'),
            'SITE_URL'      => site_url('cms'),
            'PAGE_TITLE'    => 'WSL EVENTS',
            'THEMES'        => $this->adminThemes,
            'table_title'   => 'Blog'
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
            'breadcrumbs_title'     => 'Blog'
        ];

        $blogModel            = model('Modules\Cms\Models\BlogCms');
        $params = [
            'start' => 0,
            'length'=> 10,
        ];
        $blog_list = $blogModel->getBlog($params);
        $data['BLOG_LIST']    = $blog_list;
        

        $data['has_header'][] = 'themes/cms/layout/header/header';
        $data['has_header'][] = 'themes/cms/layout/menu/sidebar';
        
        $data['has_body'][]     = 'themes/cms/layout/header/breadcrumbs';
        $data['has_body'][]     = 'themes/cms/layout/list/blog_list';
        
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
            'table_title'   => 'Blog',
            'URL_Blog_SAVE'   => site_url('cms/Blog/save')
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
            'breadcrumbs_title'     => 'Blog'
        ];

        $BlogModel            = model('Modules\Cms\Models\BlogCms');
        if ($id>0){
            $detail = $BlogModel->getDetailId($id);
            $data['Blog_id']      = $detail['id'];
            $data['Blog_title']   = $detail['title'];
            $data['Blog_link']    = $detail['link'];
            $data['Blog_is_active']  = $detail['is_active'];
        } else {
            $data['Blog_id']      = '';
            $data['Blog_title']   = '';
            $data['Blog_link']    = '';
            $data['Blog_is_active']  = 1;
        }

        $params = [
            'start' => 0,
            'length'=> 10,
        ];
        $blog_list = $BlogModel->getBlog($params);
        $data['BLOG_LIST']    = $blog_list;
        

        $data['has_header'][] = 'themes/cms/layout/header/header';
        $data['has_header'][] = 'themes/cms/layout/menu/sidebar';
        
        $data['has_body'][]     = 'themes/cms/layout/header/breadcrumbs';
        $data['has_body'][]     = 'themes/cms/layout/form/blog_form';
        
        echo $this->pageBuilder($data);
    }

    function delete($id)
    {
        $BlogModel            = model('Modules\Cms\Models\BlogCms');
        if ((!empty($id)) || ($id>0)){
            $result = $BlogModel->setDelete($id);
            if ($result['status']){
                $this->session->setFlashdata('alert_msg', $result['msg']);
                return redirect()->to('cms/Blog');
            }

        } else {
            $this->session->setFlashdata('alert_msg', 'Can not delete empty id!');
            return redirect()->back();
        }
    }

    function saveBlog()
    {
        $params = $this->request->getPost();
        //print_r($params);
        if (!empty($params['Blog_title'])) {
            $BlogModel            = model('Modules\Cms\Models\BlogCms');
            if ($params['id']>0){
                $result = $BlogModel->setUpdate($params['id'], $params);
            } else {
                $result = $BlogModel->setInsert($params);
            }

           
            $this->session->setFlashdata('alert_msg', $result['msg']);
            return redirect()->to('cms/Blog');
        } else {

            $this->session->setFlashdata('alert_msg', 'Can not insert empty fields');
            return redirect()->back();
        }
        
    }
}
