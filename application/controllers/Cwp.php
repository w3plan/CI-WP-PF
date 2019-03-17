<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Basic CI-WP-PF Controller 
 *
 * @link		https://codeigniter.com/user_guide
 * @version 3.1.0
 * 
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Controller
 * @author      W3plan Technologies
 */

class CWP_Controller extends CI_Controller 
{ 
  /**
	 * Class constructor
	 *
   * @public
   * @param   void
   * @return	void
	 */
  public function __construct() 
  {
    
    parent::__construct();
    
    // load CI-WP-PF configuration 
    $this->load->helper('cwf_config');
    
    // load WordPress environments
    require FCPATH . "index-ci-wp-pf-env.php";
  }  
}
