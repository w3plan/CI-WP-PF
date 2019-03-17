/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/temp/content-none.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-18 22:20:00 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<section class="no-results not-found"><header class="page-header"><h1 class="page-title">';
_pf19edb768 += pfDataSet.theTitle;
_pf19edb768 += '</h1></header><!-- .page-header --><div class="page-content">';
 if (pfDataSet.hasOwnProperty('wpKses')) {
_pf19edb768 += '<p>' + pfDataSet.wpKses + '<p>';
} else {
_pf19edb768 += '<p>' + pfDataSet.message + '<p>' + pfDataSet.searchForm;
}
_pf19edb768 += '</div><!-- .page-content --></section><!-- .no-results -->';
return _pf19edb768.replace(//g, "'");
}
};