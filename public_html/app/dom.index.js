/**
 * 
 * PlannerFw Exec Library v3.1.0 for Dom Manipulations
 * 
 * Browser compatibilities
 *	Chrome  Firefox   IE    Opera   Safari   iOS Safari   Android   Blackberry
 *	5+      4+        9+    10.5+   4.0+     4.1+         2.1+      7+
 *  
 *
 * This file is covered by the GNU GPLv3 license <http://www.gnu.org/licenses/gpl.html>
 * 
 * (c) Copyright 2015-2019 W3plan Technologies, https://www.w3plan.net/
 *
 */

/**
 * PlannerFw Portable Controller Setting 
 */
var pfConfig = {
  /**
   * Sets application environment either development or production
   * default value is development
   */
  environment : "development",
  
  /**
   * Sets portable controller directory with relative file path from site root 
   */
  processPath : "/app",
  
  /**
   * Server-side handler to access private templates
   */
  ptmHandler : "/",
  
  /**
   * Server-side script file to log client errors in production environment
   *
   */
  clientErrorLogger : "/errors/php/clientErrorLogger.php",
  
  /**
   * Default template url path if assigned template is invalid
   * Set empty value to defaultTemplate if no default template 
   */
  defaultTemplate : "/wppf/fuseki/index.js",
  
  /**
   * Default data model url path if assigned model is invalid
   * Set empty value to defaultModel if no default data model
   */
  defaultModel : "",
  
  /**
   * Default URL to call if defaultTemplate, defaultModel are not assigned
   * Set empty value to defaultUrl if no default URL
   */
  defaultUrl : "/",
  
  /**
   * Set timeout for loading template from server in milliseconds
   */
  loadTemplateTimeout : 3000,
  
  /**
   * Set timeout for loading model from server in milliseconds
   */
  loadModelTimeout : 3000,
  
  /**
   * Setting that tracks elapsed time 
   */
  trackExecutedTime : true,
  
  /**
   * view global setting 
   */
  viewGlobal : {
                 /**
                  * The value fluid to use container-fluid class for view grid, 
                  * the fixed to use container class
                  */
                 "VIEW_DESIGN" : "fluid",
                 
                 /**
                  * The value content-sidebar to use left content right sidebar for view layout,
                  * the value sidebar-content to right sidebar left content
                  */
                 "VIEW_LAYOUT" : "content-sidebar"
               }
};

/**
 * Loading PlannerFw Exec Library
 */
(function(){
pfConfig.isProduct = false;
if (pfConfig.environment.toLowerCase() == "production"){
  pfConfig.isProduct = true; 
}

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "/app/lib/planner.js";
script.async = true;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
})();
