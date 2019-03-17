<?php

/**
 * website footer
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$footer = array 
  (
    "title" => esc_html__( 'Title', 'fuseki' ),
    "email" => esc_html__( 'Get new posts by email', 'fuseki' ),
    "feedback" => esc_html__( 'Contact and feedback', 'fuseki' )
  );

store_data('footer', $footer);
