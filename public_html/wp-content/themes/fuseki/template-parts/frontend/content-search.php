<?php

/**
 * Template part for displaying results in search pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$contentSearch = array (
                          "theID" => get_the_ID(),
                          "postClass" => 'class="' . join( ' ', get_post_class( ) ) . '"',
                          "theTitle" => the_title( 
                                                   sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ),
                                                   '</a></h2>', 
                                                   false 
                                                  ),
                        );

if ( 'post' === get_post_type() ) {
  $contentSearch['fusekiPostedOn'] = fuseki_posted_on(false);
}

ob_start();              
the_excerpt();
$contentSearch['theExcerpt'] = ob_get_clean();

ob_start();                                            
fuseki_entry_footer();
$contentSearch['fusekiEntryFooter'] = ob_get_clean();
