<?php

/**
 * The template file for displaying archive pages
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy
 * 
 * @package		  CI-WP-PF
 * @subpackage	PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

// include view top file 
include current_theme_file( "/structure-parts/view-top.php" );

$contentMid = array();

/*
 * add your custom code to archive-$posttype archive
 *
 */

if ( is_active_sidebar( 'sidebar-1' ) )
{  
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php
}

// save data for output
store_data('contentMid', $contentMid);

// include view bottom file 
include current_theme_file( "/structure-parts/view-bottom.php" );
