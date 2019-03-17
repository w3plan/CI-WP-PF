<?php

/**
 * General error page
 * 
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package		  CI-WP-PF
 * @subpackage	WordPress
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

// include view top file 
include current_theme_file( "/structure-parts/view-top.php" );
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === 'fluid' ) echo '-fluid'; ?>">
	<div class="row">
    <div class="col-md-9<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-push-3'; ?>">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="row">
            <div class="col-sm-6">
              <?php 
                if ( file_exists( current_theme_file( "/imgs/message.png" ) ) ) 
                {
                  echo '<img class="center-block" src="' . current_theme_file_uri("/imgs/message.png") . '" width="206" height="200" >';
                } else 
                {
                  echo '<img class="center-block" src="/img/pf/message.png" width="206" height="200" >';
                }
              ?>
            </div>
            <div class="col-sm-6">
              <div style="margin-top:60px;font-weight:bold;">
                <p><?php                    
                    print_r($_REQUEST); 
                ?></p>
              </div>
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
