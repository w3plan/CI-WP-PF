<?php

/**
 * The template file for displaying 404 pages (not found)
 * 
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 * 
 * @package		  CI-WP-PF
 * @subpackage	PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

// include view top file 
include current_theme_file( "/structure-parts/view-top.php" );

$contentMid = array(
                     'pageTitle'   => esc_html__( 'Oops! That page can&rsquo;t be found.', 'fuseki' ),
                     'pageContent' => esc_html__( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'fuseki' ),
                     'searchForm'  => get_search_form(false),
                   );

ob_start();
the_widget( 'WP_Widget_Recent_Posts' );
$theWidgetRecentPosts = ob_get_clean();

$contentMid['theWidgetRecentPosts'] = $theWidgetRecentPosts;

// Only show the widget if site has multiple categories.
if ( fuseki_categorized_blog() ) 
{
  $contentMid['widgetCategories'] = esc_html__( 'Most Used Categories', 'fuseki' );
  $contentMid['listCategories'] = wp_list_categories( array (
                                                              'orderby'    => 'count',
                                                              'order'      => 'DESC',
                                                              'show_count' => 1,
                                                              'title_li'   => '',
                                                              'number'     => 10,
                                                              'echo'       => 0
                                                            )
                                                    );
}

/* translators: %1$s: smiley */
$archive_content = '<p>' . sprintf( esc_html__( 'Try looking in the monthly archives. %1$s', 'fuseki' ), convert_smilies( ':)' ) ) . '</p>';

ob_start();
the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$archive_content" );
$theWidgetArchives = ob_get_clean();

$contentMid['theWidgetArchives'] = $theWidgetArchives;

ob_start();
the_widget( 'WP_Widget_Tag_Cloud' );
$theWidgetTagCloud = ob_get_clean();

$contentMid['theWidgetTagCloud'] = $theWidgetTagCloud;

// save data for output
store_data('contentMid', $contentMid);

// include view bottom file
include current_theme_file( "/structure-parts/view-bottom.php" );
