<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * CI-WP-PF configuration helper
 *
 * @version 3.1.0
 *
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Helper
 * @author      W3plan Technologies
 */

/** 
 * set TRUE to activate PlannerFw for WordPress 
 * set FALSE to deactivate PlannerFw for WordPress 
 * 
 */
define('PF_ACTIVATION', FALSE);



/** 
 * Add your URL paths to bypass PlannerFw processes when PlannerFw was activated
 * Don't delete the following default values from the definition 
 * 
 */
define("BYPASS_URL_PATHS", serialize(
                                      array (
                                              '/wp-admin', 
                                              '/admin', 
                                              '/login',
                                              '/logout',
                                              '/register',
                                              '/lostpassword',
                                              '/resetpass',
                                              '/wp-login.php', 
                                              '/wp-includes',
                                              '/error-general',
                                            )
                                    )
      );

/**
 * return URL paths for that PlannerFw will bypass
 * 
 * @param	  void
 * @return	array
 */
function get_bypass_paths()
{ 
  return unserialize(BYPASS_URL_PATHS);
}
