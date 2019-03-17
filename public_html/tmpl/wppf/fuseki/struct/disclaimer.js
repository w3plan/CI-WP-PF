/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/disclaimer.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-12 13:32:02 by PlannerFw Preprocessor
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
_pf19edb768 += '"><div class="row footer-bottom"><div class="pull-left"></div><div class="pull-right">';
_pf19edb768 += pfDataSet.copyClaim;
_pf19edb768 += '</div></div></div></footer><!-- #colophon --></div><!-- #page -->';
_pf19edb768 += pfDataSet.wpFooter;
 if (pfDataSet.hasOwnProperty('dfpTags')) {
_pf19edb768 += '<script async="async" src="https://www.googletagservices.com/tag/js/gpt.js"></script><script>var googletag = googletag || {}googletag.cmd = googletag.cmd || [];googletag.cmd.push(function() {googletag.pubads().set("adsense_background_color", "FFFFFF");});googletag.cmd.push(function() {googletag.defineSlot("';
_pf19edb768 += pfDataSet.dfpTags.ADUNITPATH0;
_pf19edb768 += '", ';
_pf19edb768 += pfDataSet.dfpTags.ADSLOTSIZE0;
_pf19edb768 += ', "div-gpt-ad-123456789-0") .addService(googletag.pubads()) .setTargeting(';
_pf19edb768 += pfDataSet.dfpTags.SLOTLEVELTARGETING0;
_pf19edb768 += ');googletag.defineSlot("';
_pf19edb768 += pfDataSet.dfpTags.ADUNITPATH1;
_pf19edb768 += '", ';
_pf19edb768 += pfDataSet.dfpTags.ADSLOTSIZE1;
_pf19edb768 += ', "div-gpt-ad-123456789-1") .addService(googletag.pubads()) .setTargeting(';
_pf19edb768 += pfDataSet.dfpTags.SLOTLEVELTARGETING1;
_pf19edb768 += ');googletag.pubads().setTargeting(';
_pf19edb768 += pfDataSet.dfpTags.PAGELEVELTARGETING;
_pf19edb768 += ');googletag.pubads().enableSingleRequest();googletag.enableServices();});</script>';
}
 if (pfDataSet.hasOwnProperty('trackId')) {
_pf19edb768 += '<script async src="https://www.googletagmanager.com/gtag/js?id=';
_pf19edb768 += pfDataSet.trackId;
_pf19edb768 += '"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag(js, new Date());gtag(config, ';
_pf19edb768 += pfDataSet.trackId;
_pf19edb768 += ');</script>';
}
_pf19edb768 += '</body></html>';
return _pf19edb768.replace(//g, "'");
}
};