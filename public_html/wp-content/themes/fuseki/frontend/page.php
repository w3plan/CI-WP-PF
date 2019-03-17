<?php

/**
 * The page template file for displaying all pages
 * 
 * 
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package		  CI-WP-PF
 * @subpackage	PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

// include view top file 
include current_theme_file( "/structure-parts/view-top.php" );

$contentMid = array();

if ( have_posts() )
{
  
  $contentMid['havePosts'] = array();
  
  while ( have_posts() )
  {
    the_post();
    
    include current_theme_file( '/template-parts/content-page.php' );
    
    $postItems = array( 'contentPage' => $contentPage);  // the value from content-page.php
    
    // page comments
    if ( defined( 'SHOW_PAGE_COMMENTS' ) && SHOW_PAGE_COMMENTS )
    {
      $pgcomments = get_comments( array(
                                          'post_id' => get_the_ID(), 
                                          'status' => 'approve'
                                        )
                                );
      
      if ( ! empty( $pgcomments ) ) 
      { 
        $pageComments = array();
        foreach ( $pgcomments as $pgcomment ) 
        {
          $pageComments[] = array(
                                    "date"    => $pgcomment->comment_date,
                                    "author"  => $pgcomment->comment_author,
                                    "email"   => $pgcomment->comment_author_email,
                                    "content" => $pgcomment->comment_content
                                  );
        }
        
        $postItems['pageComments'] = $pageComments;
      }
    }
    
    // If comments are open or we have at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) 
    { 
      /*
       * If the current post is protected by a password and
       * the visitor has not yet entered the password we will
       * return early without loading the comments.
       */
      if ( ! post_password_required() ) 
      {
        include current_theme_file( '/structure-parts/comments.php' );
      
        $postItems['comments'] = $comments;  // $comments from comments.php 
      }
    }
    
    $contentMid['havePosts'][] = $postItems;
  }
}

if ( is_active_sidebar( 'sidebar-1' ) ) 
{ 
  include current_theme_file( "/structure-parts/sidebar.php" );
  
  $contentMid['sideBar'] = $sideBar;    // the value from sidebar.php  
}

// save data for output
store_data('contentMid', $contentMid);

// fill $contentBtm, $footer
include current_theme_file( "/structure-parts/view-bottom.php" );
