<?php

/**
 * website header images for index and home templates
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$header = array(
                 'caption1' => __( 'First caption', 'fuseki' ),
                 'caption2' => __( 'Second caption', 'fuseki' ),
                 'caption3' => __( 'Third caption', 'fuseki' ),
               );

// slide images that file starts with / from theme root to file name 
if ( file_exists( current_theme_file( "/imgs/slide-one.png" ) ) ) {
  $header['slideOne'] = current_theme_file_uri( '/imgs/slide-one.png' );
} else {
  $header['slideOne'] = '//via.placeholder.com/1700x480?text=Slider+one';
}

if ( file_exists( current_theme_file( "/imgs/slide-two.png" ) ) ) {
  $header['slideTwo'] = current_theme_file_uri( '/imgs/slide-two.png' );
} else {
  $header['slideTwo'] = '//via.placeholder.com/1700x480?text=Slider+two';
}

if ( file_exists( current_theme_file( "/imgs/slide-three.png" ) ) ) {
  $header['slideThree'] = current_theme_file_uri( '/imgs/slide-three.png' );
} else {
  $header['slideThree'] = '//via.placeholder.com/1700x480?text=Slider+three';
}

store_data('header', $header);
