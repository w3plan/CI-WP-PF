<?php

/**
 * The content bottom file
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
  include "frontend/content-bottom.php";
  
} else
{
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === "fluid" ) echo "-fluid"; ?>">
    <div class="row">
        <div class="col-md-12">
            <div class="content-bottom">
                
            </div>
        </div>
    </div>
</div>

</div><!-- #content -->
<?php } ?>
