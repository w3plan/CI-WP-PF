/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/navigation-menu.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-12 13:31:11 by PlannerFw Preprocessor
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
_pf19edb768 += '"><nav id="site-navigation" class="row main-navigation" role="navigation">';
_pf19edb768 += pfDataSet.wpNavMenu;
_pf19edb768 += '</nav><!-- #site-navigation --></div></header><!-- #masthead -->';
return _pf19edb768.replace(//g, "'");
}
};