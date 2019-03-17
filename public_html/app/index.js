/**
 * 
 * PlannerFw Exec Library v3.1.0
 * 
 * Browser compatibilities
 *	Chrome  Firefox   IE    Opera   Safari   iOS Safari   Android   Blackberry
 *	5+      4+        9+    10.5+   4.0+     4.1+         2.1+      7+
 *  
 *
 * This file is covered by the GNU GPLv3 license <http://www.gnu.org/licenses/gpl.html>
 * 
 * (c) Copyright 2015-2019 W3plan Technologies, https://www.w3plan.net/
 */

/**
 * PlannerFw Portable Controller Setting 
 */
var pfConfig = {
  /**
   * Set application environment either development or production
   * default value is development
   */
  environment : "development",
  
  /**
   * Set page process path with relative file path from site root 
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
                  * the value fixed to use container class
                  */
                 "VIEW_DESIGN": "fluid",
                 
                 /**
                  * The value content-sidebar to use left content right sidebar for view layout,
                  * the value sidebar-content to right sidebar left content
                  */
                 "VIEW_LAYOUT": "content-sidebar"
               }
};

/**
 * PlannerFw Portable Controller
 */
(function(){
pfConfig.isProduct = false;
if (pfConfig.environment.toLowerCase() == "production")
  pfConfig.isProduct = true;

// check whether PlannerFw library was loaded
if (!window.planner) {
  alert("Failed to load PlannerFw library");
  return;
}

// setting for global error handler
window.onerror = function (errorMsg, file, line, col, error) {
  planner.errorHandler(0, errorMsg, line);
  pfIndex = null;
  pfTemplate = null;
  pfModel = null;
  pfXMLModel = null;
};

if (pfConfig.isProduct)
  planner.deleteCookie("pf_times");

var pfIndex = {};

// start to track PlannerFw processing time
if (pfConfig.trackExecutedTime) {
  pfIndex.start = planner.startMeter();
  planner.updateTrackTime(0);
}

// check browser support
planner.checkEnvironment();

if ( typeof pfTemplate !== 'undefined' && pfTemplate.hasOwnProperty('run') && 
     typeof pfModel !==  'undefined' && pfModel.hasOwnProperty('pfDataSet') )
{
  process(pfModel);
} else if( (typeof pfTemplatePath !== 'undefined' && pfTemplatePath.length > 0 ||
            typeof pfpvTemplatePath !== 'undefined' && pfpvTemplatePath.length > 0) &&
           (typeof pfModel !==  'undefined' || typeof pfXMLModel !== 'undefined') )
{
  if (typeof pfpvTemplatePath !== 'undefined') {
    pfIndex.template = planner.normTemplatePath("ptm=" + pfpvTemplatePath, pfConfig.ptmHandler);
  } else {
    pfIndex.template = planner.normTemplatePath("tm=" + pfTemplatePath, pfConfig.ptmHandler);
  }
  
  if (typeof pfModel !==  'undefined') {
    if (typeof pfModel === 'string' || pfModel instanceof String) {
      pfModel = planner.responseJsonEncode(pfModel);
    }
    pfIndex.model = pfModel;
  } else if (typeof pfXMLModel !==  'undefined') {
    if (typeof pfXMLModel === 'string' || pfXMLModel instanceof String) {
      pfXMLModel = planner.string2Xml(pfXMLModel);
      pfXMLModel = planner.xml2Json(pfXMLModel);
    }
    pfIndex.model = pfXMLModel[Object.keys(pfXMLModel)[0]];
  }
  
  if (pfConfig.trackExecutedTime)
    planner.updateTrackTime(pfIndex.start);
  
  planner.loadTemplate(pfIndex.template, process, pfIndex.model);
  
} else {
  throw new Error("Web server should output model and template path in the response");
}

/**
 * Callback to execution after template loaded
 *
 * @param {object} model    Data model for the template 
 * @return {void}
 */
function process(model) {
  if (pfConfig.trackExecutedTime)
    planner.updateTrackTime(pfIndex.start);
  
  planner.checkModelData(model);
  
  planner.validatePfsdjs(model);
  
  var html = pfTemplate.run(model.pfDataSet);
  
  // render result page in html element
  document.open();
  document.write(html);
  document.close();
  
  if (pfConfig.trackExecutedTime) {
    planner.updateTrackTime(pfIndex.start, true);
    planner.errorHandler(3, planner.getElapsedDetailTime(pfIndex.start));
  }
  
  pfIndex = null;
  if (pfConfig.isProduct) {
    pfTemplate = null;
    pfModel = null;
    pfXMLModel = null;
  }
}

})();
