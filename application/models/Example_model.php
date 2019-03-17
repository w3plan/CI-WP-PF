<?php

/**
 * CodeIgniter model to interact with the database for custom data
 *
 * Write your code for custom data, the property and methods in this class only are examples for references
 * 
 * @link		https://codeigniter.com/user_guide
 * @version 3.1.0
 * 
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Model
 * @author      W3plan Technologies
 */

class Example_Model extends CI_Model 
{ 
  // select the meta data WordPress collects from posts in news category (category id < 10)  
  private $statement  = '
                          SELECT DISTINCT post_title, post_date 
                          FROM cw_posts a 
                          LEFT JOIN cw_term_relationships b ON ( a.ID = b.object_id ) 
                          LEFT JOIN cw_postmeta c ON ( a.ID = c.post_id ) 
                          LEFT JOIN cw_term_taxonomy d ON ( d.term_taxonomy_id = b.term_taxonomy_id ) 
                          LEFT JOIN cw_terms e ON ( e.term_id = d.term_id ) 
                          WHERE e.term_id < 10
                        ';
  
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
	}
    
  /**
	 * apply CodeIgniter query
	 *
   * @public
   * @param   void
	 * @return	array   containing the names of selected tables from database  
	 */
	public function get_tables()
  {
		return $this->db->list_tables();
	}
  
  /**
	 * apply CodeIgniter query
	 *
   * @public
   * @param   void
	 * @return	array   result arrray of query execution  
	 */
  public function get_query_by_ci() 
  {
    $results = $this->db->query($this->statement);
    
    return $results->result_array();
  }
  
  /**
	 * apply WordPress query
	 *
   * @public
   * @param   void
	 * @return	array   result arrray of query execution
	 */
  public function get_query_by_wp() 
  {
    // declaim WordPress global variable
    global $wpdb;
    
    return $wpdb->get_results($this->statement);
  }
}
