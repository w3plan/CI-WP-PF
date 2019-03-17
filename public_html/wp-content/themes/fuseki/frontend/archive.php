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

if ( have_posts() ) 
{
  $contentMid['theArchiveTitle'] = get_the_archive_title();
  $contentMid['theArchiveDescription'] = get_the_archive_description();  
  $contentMid['havePosts'] = array();
  
  while ( have_posts() ) 
  {
    the_post();
    
    // include the Post-Format-specific template for the content.
    include current_theme_file( '/template-parts/content.php' );
    
    $contentMid['havePosts'][] =  $content;  // $content from content.php
  }
  
  $contentMid['thePostsPagination'] = 
    get_the_posts_pagination(
                              array(
                                    'prev_text' => '&laquo; Previous' . '<span class="screen-reader-text">' . __( 'Previous page', 'fuseki' ) . '</span>',
                                    'next_text' => '<span class="screen-reader-text">' . __( 'Next page', 'fuseki' ) . '</span>' . 'Next &raquo;',
                                    'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'fuseki' ) . ' </span>',
                                  )
                            );
} else
{
  include current_theme_file( '/template-parts/content-none.php' );
  
  $contentMid('contentNone', $contentNone);  // the value from content-none.php
}

if ( is_active_sidebar( 'sidebar-1' ) )
{  
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php
}

// save data for output
store_data('contentMid', $contentMid);

// include view bottom file 
include current_theme_file( "/structure-parts/view-bottom.php" );
