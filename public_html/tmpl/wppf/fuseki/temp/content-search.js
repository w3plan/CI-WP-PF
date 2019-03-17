/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/temp/content-search.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-18 15:15:56 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<article id="post-';
_pf19edb768 += pfDataSet.theID;
_pf19edb768 += '" ';
_pf19edb768 += pfDataSet.postClass;
_pf19edb768 += '><header class="entry-header">';
_pf19edb768 += pfDataSet.theTitle;
 if (pfDataSet.hasOwnProperty('fusekiPostedOn')) {
_pf19edb768 += '<div class="entry-meta">' + pfDataSet.fusekiPostedOn + '</div><!-- .entry-meta -->';
}
_pf19edb768 += '</header><!-- .entry-header --><div class="entry-summary">';
_pf19edb768 += pfDataSet.theExcerpt;
_pf19edb768 += '</div><!-- .entry-summary --><footer class="entry-footer">';
_pf19edb768 += pfDataSet.fusekiEntryFooter;
_pf19edb768 += '</footer><!-- .entry-footer --></article><!-- #post-## -->';
return _pf19edb768.replace(//g, "'");
}
};