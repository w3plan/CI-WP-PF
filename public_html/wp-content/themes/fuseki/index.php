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
 * @subpackage	WordPress
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

if (function_exists("store_data")) 
{
  include "frontend/index.php";
  
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
          <?php
            if ( have_posts() ) {
              $cols = get_option( 'posts_per_page' );
              
              if ( !$cols || $cols > 36 ) {
                $cols = 12;
              }
              
              $cnt = 0;
              while ( have_posts() ) {
                the_post(); 
                
                $plink = esc_url( get_permalink() ?: '' );
                $mytitle = get_the_title();
                if (get_the_post_thumbnail_url()) {
                  $postImage = '<img class="post-thumbnail thumbnail_img img-responsive" src="' . get_the_post_thumbnail_url() . '" alt="' . $mytitle . '">';
                } else {
                  $postImage = '<img class="post-thumbnail thumbnail_img img-responsive" src="' . current_theme_file_uri( "/imgs/post-thumbnail.png" ) . '" alt="Post thumbnail">';
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
                if ( $cnt >= $cols ) {
                  break;
                }
              }
              
              echo '<div class="col-md-12 site-pagination">';
              
              the_posts_pagination(
                array(
                      'prev_text' => '&laquo; Previous' . '<span class="screen-reader-text">' . __( 'Previous page', 'fuseki' ) . '</span>',
                      'next_text' => '<span class="screen-reader-text">' . __( 'Next page', 'fuseki' ) . '</span>' . 'Next &raquo;',
                      'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'fuseki' ) . ' </span>',
                    )
              );
              
              echo '</div>';              
            } else {
              echo '<div class="col-md-12">';
              
              require_once current_theme_file( '/template-parts/content-none.php' );
              
              echo '</div>';
            }
          ?>
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
