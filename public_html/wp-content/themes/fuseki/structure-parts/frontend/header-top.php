<?php

/**
 * The header top file
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$headerTop = array(
                    'languageAttributes' => get_language_attributes('html'),
                    'charset'            => get_bloginfo( 'charset', 'display' ),
                    'bodyClass'          => 'class="' . join( ' ', get_body_class( ) ) . '"',
                    'escHtml'            => esc_html( translate( 'Skip to content', 'fuseki' ) ),
                  );

if ( defined( 'META_DESCRIPTION' ) && ! empty( META_DESCRIPTION ) ) 
{
  $meta = '<meta name="description" content="' . META_DESCRIPTION . '">' . PHP_EOL;
} elseif ( defined( 'META_KEYWORDS' ) && ! empty( META_KEYWORDS ) ) 
{
  $meta = '<meta name="keywords" content="' . META_KEYWORDS . '">' . PHP_EOL; 
} elseif ( defined( 'GOOGLE_SITE_VERIFICATION' ) && ! empty( GOOGLE_SITE_VERIFICATION ) ) 
{
  // Google site verification for Google Analytics 
  $meta = '<meta name="google-site-verification" content="' . GOOGLE_SITE_VERIFICATION . '">' . PHP_EOL; 
}

if ($meta)
{
  $headerTop['meta'] = $meta;
}

if ( file_exists( current_theme_file( '/imgs/ci-wp-pf_logo.jpg' ) ) ) 
{
  $headerTop['siteLogo'] = current_theme_file_uri( '/imgs/ci-wp-pf_logo.jpg' );
} 

if ( is_user_logged_in() )
{
  $headerTop['userLogin'] = true;
} 

$headerTop['searchForm'] = get_search_form(false);

ob_start();

wp_head();

$headerTop['wpHead'] = ob_get_clean();

store_data("headerTop", $headerTop);

