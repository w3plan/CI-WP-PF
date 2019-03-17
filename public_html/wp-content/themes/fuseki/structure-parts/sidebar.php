<?php

/**
 * The sidebar containing the main widget area
 * 
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * 
 * @package		  CI-WP-PF
 * @subpackage	WordPress
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

if (function_exists("store_data")) 
{
  include "frontend/sidebar.php";
  
} else
{
  if ( ! is_active_sidebar( 'sidebar-1' ) ) {
    return;
  }
?>

<aside id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->

<?php } ?>
