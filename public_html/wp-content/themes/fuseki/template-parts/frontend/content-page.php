<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$theContent = get_the_content();
$theContent = apply_filters( 'the_content', $theContent );
$theContent = str_replace( ']]>', ']]&gt;', $theContent );

$contentPage = array 
  (
    "theID" => get_the_ID(),
    "postClass" => 'class="' . join( ' ', get_post_class( ) ) . '"',
    "theTitle" => the_title( '<h1 class="entry-title">', '</h1>', false ),
    "theContent" => $theContent,
    "wpLinkPages" => wp_link_pages(array(
                                          'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'fuseki' ) . '</span>',
                                          'after'       => '</div>',
                                          'link_before' => '<span>',
                                          'link_after'  => '</span>',
                                          'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'fuseki' ) . ' </span>%',
                                          'separator'   => '<span class="screen-reader-text">, </span>',
                                          'echo' => 0
                                        )
                                  )
  );
  
  if ( get_edit_post_link() ) 
  {
    ob_start();
    edit_post_link (
                      sprintf( /* translators: %s: Name of current post */
                              esc_html__( 'Edit %s', 'fuseki' ),
                              the_title( '<span class="screen-reader-text">"', '"</span>', false )
                      ),
                      '<span class="edit-link">',
                      '</span>'
                    );
    $contentPage['editPostLink'] = ob_get_clean();
 }
