<?php

/**
 * The index template file
 * 
 * set maximum of posts to this page from Setting/Reading menu on Administrator screen
 * default maximum of posts is 12
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

if ( have_posts() )
{
  $cols = get_option( 'posts_per_page' );
  
  if ( !$cols || $cols > 36 ) 
  {
    $cols = 12;
  }
  $contentMid['havePosts'] = array();
  
  $cnt = 0;
  while ( have_posts() ) 
  {
    the_post(); 
    $postsTile = array(
                        'pLink' => esc_url( get_permalink() ?: '' ),
                        'title' => get_the_title()
                      );
    
    if (get_the_post_thumbnail_url()) 
    {
      $postsTile['thumbnailUrl'] = get_the_post_thumbnail_url();
    } else 
    {
      $postsTile['thumbnailUrl'] = current_theme_file_uri( "/imgs/post-thumbnail.png" );
    }
    
    $contentMid['havePosts'][] = $postsTile;
    
    $cnt++;
    if ( $cnt >= $cols ) 
    {
      break;   // shows $cols posts along with the pagination
    }
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
