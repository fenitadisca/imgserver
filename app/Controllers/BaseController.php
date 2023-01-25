<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\HTTP\CLIRequest;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 */
abstract class BaseController extends Controller
{
    /**
     * Instance of the main Request object.
     *
     * @var CLIRequest|IncomingRequest
     */
    protected $request;

    /**
     * An array of helpers to be loaded automatically upon
     * class instantiation. These helpers will be available
     * to all other controllers that extend BaseController.
     *
     * @var array
     */
    protected $helpers = [];

    /**
     * Be sure to declare properties for any property fetch you initialized.
     * The creation of dynamic property is deprecated in PHP 8.2.
     */
    // protected $session;

    /**
     * Constructor.
     */
    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
    {
        // Do Not Edit This Line
        parent::initController($request, $response, $logger);

        // Preload any models, libraries, etc, here.

        // E.g.: $this->session = \Config\Services::session();

        $this->session = \Config\Services::session();
        $this->parser = \Config\Services::parser();
        $this->config           = config('WslConfig');
        $this->themes           = 'themes/' . $this->config->themesName;
        $this->adminThemes      = 'themes/' . $this->config->adminThemesName;
    }

    function createHeader($params)
    {
        $data = '';
        $themes = $params['THEMES'];
        if (array_key_exists('has_header', $params)){
            foreach($params['has_header'] as $row_header){
                $data .= $this->parser->setData($params)->render($row_header);
            }
        } else {
            $data = $this->parser->setData($params)->render("$themes/layout/header/header");
        }
        return $data;
    }

    function createFooter($params)
    {
        $data = '';
        $themes = $params['THEMES'];
        if (array_key_exists('has_footer', $params)){
            foreach($params['has_footer'] as $row_footer){
                $data .= $this->parser->setData($params)->render($row_footer);
            }
        } else {
            $data = $this->parser->setData($params)->render("$themes/layout/footer/footer");
        }
        return $data;
    }

    function createBody($params)
    {
        $params['CONTENT_SECTION'] = '';
        $themes = $params['THEMES'];
        if (array_key_exists('has_body', $params)){
            foreach($params['has_body'] as $row_body){
                $params['CONTENT_SECTION'] .= $this->parser->setData($params)->render($row_body);
            }
        } else {
            $params['CONTENT_SECTION'] = $this->parser->setData($params)->render("$themes/layout/contents/body_blank");
        }

        $data = $this->parser->setData($params)->render("$themes/layout/contents/body_layout");
        return $data;
    }


    public function pageBuilder($params)
    {
        if(array_key_exists('THEMES', $params)){
            $themes = $params['THEMES'];
        } else {
            $themes = $this->themes;
            $params['THEMES'] = $themes;
        }

        
        $data['HEADER_SECTION'] = $this->createHeader($params);
        
        $data['BODY_SECTION'] = $this->createBody($params);
        
        $data['FOOTER_SECTION'] = $this->createFooter($params);
        return $this->parser->setData($data)->render("$themes/layout/main_layout");
    }
}
