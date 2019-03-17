/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/content-top.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-03-11 21:03:21 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<!-- content-top section template @package CI-WP-PF @subpackage PlannerFw Copyright W3plan Technologies<https://www.w3plan.net/>--><div id="content" class="site-content"><div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row"><div class="col-md-12"><div class="content-top">';
 if (pfDataSet.hasOwnProperty('leaderBoardAd')){
_pf19edb768 += '<div class="image-placeholder leaderboard"><h4>' + pfDataSet.leaderBoardAd + '</h4></div>';
} else if (pfDataSet.hasOwnProperty('dfpTags')) {
_pf19edb768 += '<div id="div-gpt-ad-123456789-0" style="width: 728px;height: 90px"><script>googletag.cmd.push(function() {googletag.display("div-gpt-ad-123456789-0");});</script></div>';
}
_pf19edb768 += '</div></div></div></div>';
return _pf19edb768.replace(//g, "'");
}
};