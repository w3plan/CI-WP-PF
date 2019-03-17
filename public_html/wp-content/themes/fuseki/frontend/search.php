<?php

/**
 * The template file for displaying search results pages
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
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
  $contentMid['searchWords'] = esc_html__( 'Search Results for: ', 'fuseki' ) . '<strong>' . get_search_query() . '</strong>';
  $contentMid['havePosts'] = array();
  
  while ( have_posts() ) 
  {
    the_post();
    
    // run the loop to output the search results.
    include current_theme_file( '/template-parts/content-search.php' );
    
    $contentMid['havePosts'][] = $contentSearch;  // $contentSearch from content-search.php
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
