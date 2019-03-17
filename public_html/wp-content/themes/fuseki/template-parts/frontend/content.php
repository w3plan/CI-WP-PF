<?php

/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$content = array (
                    "theID" => get_the_ID(),
                    "postClass" => 'class="' . join( ' ', get_post_class( ) ) . '"',
                 );

if ( is_single() ) {
  $content['theTitle'] = the_title( '<h1 class="entry-title">', '</h1>', false );
} else {
  $content['theTitle'] = the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>', false );
}

if ( 'post' === get_post_type() ) {
  $content['fusekiPostedOn'] = fuseki_posted_on(false);
}

ob_start();
the_content(
            sprintf (
                      wp_kses(  /* translators: %s: Name of current post. */
                                __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'fuseki' ),
                                array (
                                        'span' => array (
                                                          'class' => array(),
                                                        ),
                                      )
                              ),
                      the_title( '<span class="screen-reader-text">"', '"</span>', false )
                    )
            );
$content['theContent'] = ob_get_clean();

$content['wpLinkPages'] =  wp_link_pages(array(
                                                'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'fuseki' ) . '</span>',
                                                'after'       => '</div>',
                                                'link_before' => '<span>',
                                                'link_after'  => '</span>',
                                                'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'fuseki' ) . ' </span>%',
                                                'separator'   => '<span class="screen-reader-text">, </span>',
                                                'echo' => 0
                                              ) 
                                        );

ob_start();
fuseki_entry_footer();
$content['fusekiEntryFooter'] = ob_get_clean();
