/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/content-bottom.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-12 13:32:37 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row"><div class="col-md-12"><div class="content-bottom"><!-- add the content to the bottom --></div></div></div></div></div><!-- #content -->';
return _pf19edb768.replace(//g, "'");
}
};