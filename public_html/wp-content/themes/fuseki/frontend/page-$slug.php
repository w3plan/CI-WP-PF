<?php

/**
 * The page template back-end for page-$slug pages, $slug is the slug of page url
 * 
 * 
 * @link https://codex.wordpress.org/Template_Hierarchy
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
 * add your custom code to page-$slug pages
 *
 */

if ( is_active_sidebar( 'sidebar-1' ) ) 
{
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php
}

// save data for output
store_data('contentMid', $contentMid);

// fill $contentBtm, $footer
include current_theme_file( "/structure-parts/view-bottom.php" );
