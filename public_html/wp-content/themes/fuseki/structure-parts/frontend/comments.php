<?php

/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$comments = array ();

if ( have_comments() ) {
  $comment_count = get_comments_number();
  if ( 1 === $comment_count ) {
    $comments['commentCount'] = printf( /* translators: 1: title. */
                            esc_html__( 'One thought on &ldquo;%1$s&rdquo;', 'fuseki' ),
                            '<span>' . get_the_title() . '</span>'
                          );
  } else {
    $comments['commentCount'] = printf( // WPCS: XSS OK.
                                        /* translators: 1: comment count number, 2: title. */
                                        esc_html( _nx( '%1$s thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $comment_count, 'comments title', 'fuseki' ) ),
                                        number_format_i18n( $comment_count ),
                                        '<span>' . get_the_title() . '</span>'
                                      );
  }
  
  if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) {
    $comments['commentNavigation'] =  esc_html__( 'Comment navigation', 'fuseki' );
    $comments['previousCommentsLink'] = previous_comments_link( esc_html__( 'Older Comments', 'fuseki' ) );
    $comments['nextCommentsLink'] = next_comments_link( esc_html__( 'Newer Comments', 'fuseki' ) );
    
  }
  
  $comments['wpListComments'] = wp_list_comments( array(
                                                          'style'      => 'ol',
                                                          'short_ping' => true,
                                                          'echo' => 0
                                                        ) 
                                                );
}

if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) {
  $comments['noComments'] = esc_html__( 'Comments are closed.', 'fuseki' );
}

ob_start();                                            

comment_form();

$comments['commentForm'] = ob_get_clean();
