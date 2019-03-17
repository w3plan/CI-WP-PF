<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * PlannerFw configuration helper
 *
 * @version 3.1.0
 * 
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Helper
 * @author      W3plan Technologies
 */

/** 
 * set PlannerFw module path for WordPress 
 *
 */
define('PF_TEMP_PATH', 'wppf/fuseki/');

/** 
 * set PlannerFw template extension
 * '.js' is the default value for PlannerFw templates
 *
 */
define('PF_TEMP_EXT', '.js');



/** 
 * set skin to PlannerfFw template 
 *
 * The key is a template filename and the value is the string of 'si', here i is a non-negative integer in the associative array of the definition.
 * you don't have to define skin to default templates, empty or 's0' is the default value to default PlannerFw templates 
 * 
 */
define('PF_TEMP_SKINS', serialize(
                                    array(
                                           'single' => 's1',
                                           
                                         )
                                  )
      );

/**
 * get skin to PlannerFw template from the setting, retrun false if template setting does not exsit
 * 
 * @param	  $temp    template filename
 * @return  string   skin or false if no skin assigned to the template
 */
function get_temp_skins($temp)
{ 
  $skins = unserialize(PF_TEMP_SKINS);
  
  if (array_key_exists($temp, $skins) && trim($skins[$temp]) !=='' && strtolower(trim($skins[$temp])) !== 's0') 
  {
    return $skins[$temp];
    
  } else 
  {
    return false;
  }
}



/** 
 * set access control to dynamic data and PlannerFw templates
 *
 * one template name requires one name-value pair in the setting, the name is a template name, the value is an associative array with one of user roles, usernames, useremails as key and an indexed array as value, all data in the value array are case insensitive.
 *
 * The default Wordpress user roles include 'Administrator', 'Editor', 'Author', 'Contributor', 'Subscriber'
 * 
 */
define(
        "PF_PERMISSIONS", 
        serialize(
                    array(
                           'page-list-tables' => array(
                                                        'roles' => array('Subscriber', 'Contributor', 'Author', 'Editor', 'Administrator')
                                                      )
                         )
                  )
      );

/**
 * get access permissions of PlannerFw template
 * 
 * @param	  void
 * @return  array
 */
function get_permissions($temp)
{ 
  $permissions = unserialize(PF_PERMISSIONS);
  
  if (array_key_exists($temp, $permissions) && !empty($permissions[$temp]))
  {
    return $permissions[$temp];
    
  } else 
  {
    return false;
  }
}



/**
 * store model data that gets from WordPress processes to the array variable $pfDataStore
 * 
 * @param	string  $name                the name to store
 * @param	number|string|array	 $val    the value to store
 * @return	void
 */
function store_data($name, $val) 
{
  global $pfDataStore;
  
  $pfDataStore[$name] = $val;
}

/**
 * return the model data that got from WordPress processes
 * 
 * @param	void
 * @return array
 */
function fetch_data() 
{
  global $pfDataStore;
  
  return $pfDataStore;
}



/** 
 * set optional properties to PlannerFW model data
 * 
 * 
 */
define("PF_MODELDATA", serialize(
                                  array(
                                          "name" => "CI-WP-PF data model",
                                          "description" => "WordPress dynamic data for PlannerFw presentation template",
                                          "version" => "0.1.0",
                                          "category" => "Data category",
                                          "author" => "Data author",
                                          "company" => "Data owned by company",
                                          "copyright" => "Data copyright",
                                          "license" => "Data license"
                                       )
                                )
      );

/**
 * set optional properties to output PlannerFW dynamic data
 *
 * @param   void
 * @return  array
 */
function get_static_modeldata()
{
  return unserialize(PF_MODELDATA);
}
