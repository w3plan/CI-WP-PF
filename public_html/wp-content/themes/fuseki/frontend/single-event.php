<?php

/**
 * The single template back-end for single-event-form pages
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

the_post();

$contentMid = array(
                     'theID' => get_the_ID(),
                     'theTitle' => the_title( '<h1 class="entry-title">', '</h1>', false ),
                     'venueName' => get_field( "venue_name" ),
                     'organizerName' => get_field( "organizer_name" ),
                     'startDatetime' => get_field( "start_date_time" ),
                     'endDatetime' => get_field( "end_date_time" ),
                     'eventPhone' => get_field( "eventPhone" ),
                     'eventCost' => get_field( "event_cost" )
                   );

$contentMid['thumbNail'] = get_the_post_thumbnail( null, 'post-thumbnail', ['class' => 'img-responsive responsive--full', 'title' => 'Feature image'] );

$contentMid['imageSlider'] = do_shortcode( get_field( "image_slider" ) );

ob_start();
the_content();
$contentMid['theContent'] = ob_get_clean();

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
    $postsTile = array();
    
    $postsTile['pLink'] = esc_url( get_permalink( $popularid ) ?: '' );
    $postsTile['title'] = get_the_title( $popularid );
    
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
