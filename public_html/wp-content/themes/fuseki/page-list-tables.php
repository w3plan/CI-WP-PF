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
  include 'frontend/page-list-tables.php';
  
} else
{ 
  //header("Location: /error-general?msg=Try to activate PlannerFw, this template is for PlannerFw only.", TRUE);
  
  $controller->load->model('example_model', 'example');
  
  $tables = $controller->example->get_tables();
  
  // include view top file 
  include current_theme_file( "/structure-parts/view-top.php" );
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === 'fluid' ) echo '-fluid'; ?>">
	<div class="row">
    <div class="col-md-9<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-push-3'; ?>">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <h4 style="margin:30px auto;text-align: center">Display tables of the current database</h4>
              <ul style="margin-left:50px;">
                <?php
                  foreach($tables as $table) {
                    echo '<li>' . $table . '</li>';
                  }
                ?>
              </ul>
            </div>
            <div class="col-md-2"></div>
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
