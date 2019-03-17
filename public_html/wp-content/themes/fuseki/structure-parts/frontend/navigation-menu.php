<?php

/**
 * website navigation menu
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 * 
 * @package     CI-WP-PF
 * @subpackage  PlannerFw
 * @category	  Fuseki Theme
 * @author      W3plan Technologies
 */

$navMenu['wpNavMenu'] = wp_nav_menu( array(
                                            'theme_location' => 'primary',
                                            'menu_class'     => 'primary-menu',
                                            'echo' => 0
                                          ) );


store_data('navMenu', $navMenu);

