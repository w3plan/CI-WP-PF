<?php

/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	Fuseki Theme
 * @author      W3plan Technologies
 */

ob_start();                                            

dynamic_sidebar( 'sidebar-1' );

$sideBar = ob_get_clean();
