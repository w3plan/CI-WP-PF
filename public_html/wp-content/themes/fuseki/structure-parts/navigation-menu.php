<?php

/**
 * website navigation menu
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
  include "frontend/navigation-menu.php";
  
} else
{
?>
    <div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === "fluid" ) echo "-fluid"; ?>">
        <nav id="site-navigation" class="row main-navigation" role="navigation">
            <?php
                wp_nav_menu( array(
                                    'theme_location' => 'primary',
                                    'menu_class'     => 'primary-menu'
                             ) );
            ?>
        </nav><!-- #site-navigation -->
    </div>
</header><!-- #masthead -->
<?php } ?>
