<?php

/**
 * CI-WP-PF base Model
 * 
 * @link		https://codeigniter.com/user_guide
 * @version 3.1.0
 *
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Model
 * @author      W3plan Technologies
 */

class CWF_Model extends CI_Model 
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
    
    // set up WordPress query to CI-WP-PF
    require FCPATH . "index-ci-wp-pf-query.php";
	}
  
}
