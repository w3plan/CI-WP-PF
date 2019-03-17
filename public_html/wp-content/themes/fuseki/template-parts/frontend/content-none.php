<?php

/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$contentNone = array ("theTitle" => esc_html__( 'Nothing Found', 'fuseki' )};

if ( is_home() && current_user_can( 'publish_posts' ) ) {
  ob_start();
  printf(
          wp_kses(  /* translators: 1: link to WP admin new post page. */
                    __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'fuseki' ),
                    array (
                            'a' => array(
                                          'href' => array(),
                                        ),
                          )
                  ),
          esc_url( admin_url( 'post-new.php' ) )
        );
  $contentNone['wpKses'] = ob_get_clean();
} elseif ( is_search() ) {
  $contentNone['message'] =  esc_html__( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'fuseki' );
  
  $contentNone['searchForm'] = get_search_form( false );  
} else {
  $contentNone['message'] = esc_html__( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'fuseki' );
  
  $contentNone['searchForm'] = get_search_form( false );
}
