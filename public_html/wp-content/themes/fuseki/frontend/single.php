<?php

/**
 * The template file for displaying all single posts
 * 
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
  $contentMid['havePosts'] = array();
  
  while ( have_posts() ) 
  {
    the_post();
    
    include current_theme_file( '/template-parts/content.php' );
    
    $postid = get_the_ID();
    
    $postItems = array("content" => $content);  // the value from content.php
    
    // If comments are open or we have at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) 
    {
      /*
       * If the current post is protected by a password and
       * the visitor has not yet entered the password we will
       * return early without loading the comments.
       */
      if ( ! post_password_required() ) 
      {
        include current_theme_file( '/structure-parts/comments.php' );
      
        $postItems['comments'] = $comments;  // $comments from comments.php 
      }
    }
    
    if ( is_singular( 'attachment' ) )
    {
      $navs = array (
                      'prev_text' => _x( '<span class="meta-nav">Published in</span><span class="post-title">%title</span>', 'Parent post link', 'fuseki' ),
                    );
    } elseif ( is_singular( 'post' ) )
    {
      $navs = array (
                      'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'fuseki' ) . '</span> ' .
                                     '<span class="screen-reader-text">' . __( 'Next post:', 'fuseki' ) . '</span> ' .
                                     '<span class="post-title">%title</span>',
                      'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'fuseki' ) . '</span> ' .
                                     '<span class="screen-reader-text">' . __( 'Previous post:', 'fuseki' ) . '</span> ' .
                                     '<span class="post-title">%title</span>',
                    );
    }
    
    if ( !empty($navs) ) {
      $postItems['thePostNavigation'] = get_the_post_navigation($navs);
    }
    
    $contentMid['havePosts'][] = $postItems;
  }
}

if ( defined( 'POPULAR_POSTS_START_YEAR' ) && POPULAR_POSTS_START_YEAR > 2010 )
{
  $start_year = POPULAR_POSTS_START_YEAR;
} else 
{
  $start_year = 2010;
}

if ( defined( 'DISPLAY_POPULAR_POSTS' ) && POPULAR_POSTS_START_YEAR > 0 ) 
{
  $postnum = DISPLAY_POPULAR_POSTS;
} else
{
  $postnum = 8;
}

$cols = get_option( 'posts_per_page' );
if ( ! $cols || $cols > 8 ) 
{
  $cols = 8;
}

$args = array(
                'posts_per_page' => $cols,
                'post_status' => 'publish',
                'orderby' => 'meta_value_num', 
                'meta_key' => 'popular_posts',
                'date_query' => array( 'after' => array( 'year' => $start_year, 'month' => 1, 'day' => 1 ) ),
                'order' => 'DESC'
             );

if ( defined( 'CW_CUSTOM_POST_TYPES' ) && !empty( CW_CUSTOM_POST_TYPES ) ) 
{
  $ptypes = explode( ",", CW_CUSTOM_POST_TYPES );
  array_unshift( $ptypes, 'post' );
  $args['post_type'] = $ptypes;
}

$contentMid['populars'] = array();
$query = new WP_Query( $args );
$populars = $query->get_posts();

$cnt = 0;
foreach ( $populars as $popular ) 
{
  if ( get_post_meta( $popular->ID, 'popular_posts', true) > 1 ) 
  {
    $popularid = $popular->ID;
    
    $postsTile = array(
                    'pLink' => esc_url( get_permalink() ?: '' ),
                    'title' => get_the_title( $popularid )
                  );
    
    $postImageUrl = get_the_post_thumbnail_url( $popularid );
    
    if ( $postImageUrl ) 
    {	
      $postsTile['thumbnailUrl'] = $postImageUrl;
    } else
    {
      $postsTile['thumbnailUrl'] = current_theme_file_uri( "/imgs/post-thumbnail.png" );
    }
    
    $contentMid['populars'][] = $postsTile;
    
    $cnt++;
    if ( $cnt >= $postnum )
    {
      break;  // show $postnum popular posts
    }
  }
}

if ( is_active_sidebar( 'sidebar-1' ) ) 
{ 
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php  
}

// save data for output
store_data("contentMid", $contentMid);

// include view bottom file 
include current_theme_file( "/structure-parts/view-bottom.php" );
