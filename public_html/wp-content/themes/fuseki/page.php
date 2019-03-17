<?php

/**
 * The page template file for displaying all pages
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
  include "frontend/page.php";
  
} else
{
  // include view top file 
  include current_theme_file( "/structure-parts/view-top.php" );
?>

<div class="container<?php if ( defined( 'VIEW_DESIGN' ) && VIEW_DESIGN === 'fluid' ) echo '-fluid'; ?>">
	<div class="row">
    <div class="col-md-9<?php if ( defined( 'VIEW_LAYOUT' ) && VIEW_LAYOUT === 'sidebar-content' ) echo ' col-md-push-3'; ?>">
      <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">
          <?php
            while ( have_posts() ) {
              the_post(); 
              
              echo '<div class="row">';
              echo '<div class="col-md-12">';
              
              include current_theme_file( 'template-parts/content-page.php' );
              
              echo '</div></div>';
              
              // page comments
              if ( defined( 'SHOW_PAGE_COMMENTS' ) && SHOW_PAGE_COMMENTS ) {
                
                $pgcomments = get_comments( array(
                                                   'post_id' => get_the_ID(), 
                                                   'status' => 'approve'
                                                  )
                                          );
                
                if ( ! empty( $pgcomments ) ) {
                  echo '<div class="entry-content">';
                  echo '<div class="vertical-interval"></div>';
                  echo '<h3>User Comments</h3>';
                  echo '<div class="row">';
                  echo '<div class="col-md-12">';
                  
                  foreach ( $pgcomments as $pgcomment ) {
                    echo '<div class="vertical-interval"></div>';
                    echo '<div class="row">';
                    echo '<div class="col-md-12">' 
                         . $pgcomment->comment_date . ' By ' 
                         . $pgcomment->comment_author . ' [' 
                         . $pgcomment->comment_author_email . ']</div>';
                    echo '<div class="col-md-1"></div>
                          <div class="col-md-10"> '
                         . $pgcomment->comment_content
                         . ' </div><div class="col-md-1"></div>';                           
                   echo '</div>';
                  }
                  
                  echo '</div></div></div>';
                }
              }
              
              // If comments are open or we have at least one comment, load up the comment template.
              if ( comments_open() || get_comments_number() ) {
                /*
                 * If the current post is protected by a password and
                 * the visitor has not yet entered the password we will
                 * return early without loading the comments.
                 */
                if ( ! post_password_required() ) 
                { 
                  echo '<div class="vertical-interval"></div>';
                  echo '<div class="row">';
                  echo '<div class="col-md-12">';
                  
                  include current_theme_file( '/structure-parts/comments.php' );
                  
                  echo '</div></div>';
                }
              }
            }
          ?>
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