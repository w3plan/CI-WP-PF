<?php

/**
 * website disclaimer files
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$disclaimer = array 
  (
    "copyClaim" => esc_html__( 'Copyright 2017 - ', 'fuseki' ) . 
                   '<span id="cprtyear"></span><script>document.getElementById("cprtyear").innerHTML = new Date().getFullYear()</script>' . 
                   '<a href="https://www.w3plan.net/about-us/" target="_blank"><img style="margin:auto 10px; vertical-align: middle;" src="/img/pf/w3plan-logo-small.png" width="24" height="24" alt="W3plan Logo"> W3plan Technologies</a>' . 
                   esc_html__( ' - All rights reserved.', 'fuseki' )
  );

ob_start();

wp_footer();

$disclaimer['wpFooter'] = ob_get_clean();

// Google DoubleClick for Publishers 
if ( defined( 'GOOGLE_DFP_TAGS' ) && GOOGLE_DFP_TAGS ) {
  /* 
   * Asynchronous Google Publisher Tags for two AD slots
   * Ad slot "div-gpt-ad-123456789-0" located in content-top.php
   * Ad slot "div-gpt-ad-123456789-1" located on sidebar
   *
   */
  $dfpTags = array();
  
  $dfpTags['ADUNITPATH0'] = AD_UNIT_PATH_0;
  $dfpTags['ADUNITPATH1'] = AD_UNIT_PATH_1;
  $dfpTags['ADSLOTSIZE0'] = AD_SLOT_SIZE_0;
  $dfpTags['ADSLOTSIZE1'] = AD_SLOT_SIZE_1;
  $dfpTags['SLOTLEVELTARGETING0'] = SLOT_LEVEL_TARGETING_0;
  $dfpTags['SLOTLEVELTARGETING1'] = SLOT_LEVEL_TARGETING_1;
  $dfpTags['PAGELEVELTARGETING'] = PAGE_LEVEL_TARGETING;
  
  $disclaimer['dfpTags'] = $dfpTags;
}

// Google Analytics tracking snippet
if ( defined( 'GOOGLE_SITE_VERIFICATION' ) && ! empty( GOOGLE_SITE_VERIFICATION ) ) {
  $disclaimer['trackId'] = ANALYTICS_TRACKING_ID;
}


store_data('disclaimer', $disclaimer);
