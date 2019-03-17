/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/temp/content-page.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-18 15:15:30 by PlannerFw Preprocessor
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
_pf19edb768 += '</header><!-- .entry-header --><div class="entry-content">';
_pf19edb768 += pfDataSet.theContent + pfDataSet.wpLinkPages;
_pf19edb768 += '</div><!-- .entry-content -->';
 if (pfDataSet.hasOwnProperty('editPostLink')) {
_pf19edb768 += '<footer class="entry-footer">' + pfDataSet.editPostLink + '</footer><!-- .entry-footer -->';
}
_pf19edb768 += '</article><!-- #post-## -->';
return _pf19edb768.replace(//g, "'");
}
};