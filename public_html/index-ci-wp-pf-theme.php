<?php

/**
 * Load CI-WP-PF theme
 *
 *
 * @package		  CI-WP-PF
 * @subpackage	WordPress
 * @category	  Theme
 */

/**
 * Let WordPress to load CI-WP-PF theme
 * 
 * @var bool
 */
define( 'WP_USE_THEMES', true );

// load CI-WP-PF theme template
require_once( ABSPATH . WPINC . '/template-loader.php' );
