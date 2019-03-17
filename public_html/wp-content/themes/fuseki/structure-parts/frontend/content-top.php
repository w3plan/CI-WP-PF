<?php

/**
 * content top file for Leaderboard Ad
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$contentTop = array();

if (! ( defined( 'GOOGLE_DFP_TAGS' ) && GOOGLE_DFP_TAGS )) {
  $contentTop['leaderBoardAd'] = esc_html__( 'Leaderboard Ad', 'fuseki' );
}


store_data('contentTop', $contentTop);
