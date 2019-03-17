/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/header-top.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-12 13:31:21 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<!DOCTYPE html><html ';
_pf19edb768 += pfDataSet.languageAttributes;
_pf19edb768 += '><head><meta charset="';
_pf19edb768 += pfDataSet.charset;
_pf19edb768 += '"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="profile" href="http://gmpg.org/xfn/11">';
 if (pfDataSet.hasOwnProperty('meta')){
_pf19edb768 += pfDataSet.meta;
}
_pf19edb768 += pfDataSet.wpHead;
_pf19edb768 += '</head><body ';
_pf19edb768 += pfDataSet.bodyClass;
_pf19edb768 += '><div id="page" class="site"><a class="skip-link screen-reader-text" href="#content">';
_pf19edb768 += pfDataSet.escHtml;
_pf19edb768 += '</a><header id="masthead" class="site-header" role="banner"><div class="site-branding"><div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row"><div class="col-md-4">';
 if (pfDataSet.hasOwnProperty('siteLogo')) {
_pf19edb768 += '<a href="/" rel="home"><img class="custom-logo" src="' + pfDataSet.siteLogo + '" alt="Site Logo"></a>';
} else {
_pf19edb768 += '<a href="/" rel="home"><div class="image-placeholder" style="width:150px;height:75px;"><h4>Site Logo</h4></div></a>';
}
_pf19edb768 += '</div><div class="col-md-4 horizontal-centered">';
 if (pfDataSet.hasOwnProperty('userLogin') && pfDataSet.userLogin){
_pf19edb768 += '<a href="/wp-admin/profile.php" class="btn btn-default" role="button">My profile</a>' + '<div class="horizontal-interval"></div>' + '<a href="/logout/" class="btn btn-default" role="button">Log out</a>';
} else {
_pf19edb768 += '<a href="/register/" class="btn btn-default" role="button">Register</a>' + '<div class="horizontal-interval"></div>' + '<a href="/login/" class="btn btn-default" role="button">Log in</a>';
}
_pf19edb768 += '</div><div class="col-md-4 horizontal-centered">';
_pf19edb768 += pfDataSet.searchForm;
_pf19edb768 += '</div></div></div></div><!-- .site-branding -->';
return _pf19edb768.replace(//g, "'");
}
};