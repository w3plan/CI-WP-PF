<?php

/**
 * page-$slug pages, $slug is the slug of page url
 * 
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
  include 'frontend/page-$slug.php';
  
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
                    Add your PlannerFw temaplet code here to page-$slug pages
                -->
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
