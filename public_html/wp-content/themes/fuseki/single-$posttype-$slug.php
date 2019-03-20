<?php

/**
 * The template file for displaying all single posts
 * 
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * 
 * @package		  CI-WP-PF
 * @subpackage	WordPress
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

if (function_exists("store_data")) 
{
  include 'frontend/single-$posttype-$slug.php';
  
} else
{
  // include view top file 
  include current_theme_file( "/structure-parts/view-top.php" );
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === 'fluid' ) echo '-fluid'; ?>">
	<div class="row">
    <div class="col-md-9<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-push-3'; ?>">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="row">
            <div class="col-md-12">
              <!--
                  Add your PlannerFw template code for single-$posttype-$slug posts
              -->
            <div>
          </div>
              
          <div class="row">
            <div class="col-md-12">
            <?php
              if ( defined( 'POPULAR_POSTS_START_YEAR' ) && POPULAR_POSTS_START_YEAR > 2010 ) {
                $start_year = POPULAR_POSTS_START_YEAR;
              } else {
                $start_year = 2010;
              }
              if ( defined( 'DISPLAY_POPULAR_POSTS' ) && POPULAR_POSTS_START_YEAR > 0 ) {
                $postnum = DISPLAY_POPULAR_POSTS;
              } else {
                $postnum = 8;
              }
              $cols = get_option( 'posts_per_page' );
              if ( ! $cols || $cols > 8 ) {
                $cols = 8;
              }
              $args = array (
                              'posts_per_page' => $cols,
                              'post_status' => 'publish',
                              'orderby' => 'meta_value_num', 
                              'meta_key' => 'popular_posts',
                              'date_query' => array( 'after' => array( 'year' => $start_year, 'month' => 1, 'day' => 1 ) ),
                              'order' => 'DESC'
                            );
              
              if ( defined( 'CW_CUSTOM_POST_TYPES' ) && ! empty( CW_CUSTOM_POST_TYPES ) ) {
                $ptypes = explode( ",", CW_CUSTOM_POST_TYPES );
                array_unshift( $ptypes, 'post' );
                $args['post_type'] = $ptypes;
              }
              
              $query = new WP_Query( $args );
              $populars = $query->get_posts();
              
              echo '<p class="title-bar">POPULAR POSTS</p>';
              
              $cnt = 0;
              foreach ( $populars as $popular ) {
                if ( get_post_meta( $popular->ID, 'popular_posts', true) > 1 ) 
                { 
                  $plink = esc_url( get_permalink( $popular->ID ) ?: '' );
                  $mytitle = get_the_title( $popular->ID );
                  $postImageUrl = get_the_post_thumbnail_url( $popular->ID );
                  
                  if ( $postImageUrl ) {	
                    $postImage = '<img class="post-thumbnail thumbnail_img img-responsive" src="' . $postImageUrl . '" alt="' . $mytitle . '">';
                  } else {
                    $postImage = '<img class="post-thumbnail thumbnail_img img-responsive" src="' . current_theme_file_uri(   "/imgs/post-thumbnail.png" ) . '" alt="Post thumbnail">';
                  }

                  echo <<<HTML
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 md-box">
                    <a class="entry-link" href="$plink">
                      $postImage
                      <p class="cw-post-title">$mytitle</p>
                    </a>
                  </div>
HTML;
                  
                  $cnt++;
                  if ( $cnt >= $postnum ) {
                    break;
                  }
                }
              }
            ?>
            </div>
          </div>
        </main><!-- #main -->
      </div><!-- #primary -->
    </div>
    
    <div class="col-md-3<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-pull-9'; ?>">
      <?php
        if ( is_active_sidebar( 'sidebar-1' ) )
        { 
          include current_theme_file( "/structure-parts/sidebar.php" ); 
        }
      ?>
    </div>
	</div>
</div>

<?php
  // include view bottom file 
  include current_theme_file( "/structure-parts/view-bottom.php" );

}
