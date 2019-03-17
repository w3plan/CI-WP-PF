<?php

/**
 * page back-end template for page-custom-data page
 * 
 * 
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package		  CI-WP-PF
 * @subpackage	PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$controller->load->model('example_model', 'example');

$ci_results = $controller->example->get_query_by_ci();

// include view top file 
include current_theme_file( "/structure-parts/view-top.php" );

$contentMid = array();

/*
 * output custom data to page-custom-data page
 *
 */

$contentMid['ciwp'] = $ci_results;

if ( is_active_sidebar( 'sidebar-1' ) ) 
{
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php  
}

// save data for output
store_data('contentMid', $contentMid);

// fill $contentBtm, $footer
include current_theme_file( "/structure-parts/view-bottom.php" );
