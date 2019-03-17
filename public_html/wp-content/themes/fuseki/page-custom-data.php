<?php

/**
 * page template for page-custom-data page
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
  include 'frontend/page-custom-data.php';
  
} else
{
  $controller->load->model('example_model', 'example');
  
  $ci_results = $controller->example->get_query_by_ci();
  
  // include view top file 
  include current_theme_file( "/structure-parts/view-top.php" );
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === 'fluid' ) echo '-fluid'; ?>">
	<div class="row">
    <div class="col-md-9<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-push-3'; ?>">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <div class="row">
            <div class="col-md-12 text-center"><div class="col-md-12 text-center">
              <h4 style="margin-top:30px;">Display posts in news category from PlannerFw model data</h4>
              <table style="margin-top:60px; margin-left:10%; width:80%">
                <tr>
                  <th>Post title</th>
                  <th>Post time</th>
                </tr>
              <?php 
                foreach( $ci_results as $ci_result )
                {
                  echo '<tr><td>' . $ci_result['post_title'] . '</td>';
                  echo '<td>' . $ci_result['post_date'] . '</td></tr>';
                }
              ?>
              </table>
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
