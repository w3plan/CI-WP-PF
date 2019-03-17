/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/single.js
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-03-11 21:17:09 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/
var pfTemplate = {
pf2a1fb6f1: function (pfDataSet) {
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
},
pf54032fc0: function (pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><nav id="site-navigation" class="row main-navigation" role="navigation">';
_pf19edb768 += pfDataSet.wpNavMenu;
_pf19edb768 += '</nav><!-- #site-navigation --></div></header><!-- #masthead -->';
return _pf19edb768.replace(//g, "'");
},
pffd9e134b: function (pfDataSet) {
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
},
pfaa6ae108: function (pfDataSet) {
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
_pf19edb768 += '</header><!-- .entry-header --><div class="entry-content">';
_pf19edb768 += pfDataSet.theContent + pfDataSet.wpLinkPages;
_pf19edb768 += '</div><!-- .entry-content --><footer class="entry-footer">';
_pf19edb768 += pfDataSet.fusekiEntryFooter;
_pf19edb768 += '</footer><!-- .entry-footer --></article><!-- #post-## -->';
return _pf19edb768.replace(//g, "'");
},
pf16d1e58c: function (pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<div id="comments" class="comments-area">';
 if (pfDataSet.hasOwnProperty('wpListComments')) {
_pf19edb768 += '<h2 class="comments-title">' + pfDataSet.commentCount + '</h2><!-- .comments-title -->';
 if (pfDataSet.hasOwnProperty('commentNavigation')) {
_pf19edb768 += '<nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">' + '<h2 class="screen-reader-text">' + pfDataSet.commentNavigation + '</h2>' + '<div class="nav-links">' + '<div class="nav-previous">' + pfDataSet.previousCommentsLink + '</div>' + '<div class="nav-next">' + pfDataSet.nextCommentsLink + '</div>' + '</div><!-- .nav-links -->' + '</nav><!-- #comment-nav-above -->';
}
_pf19edb768 += '<ol class="comment-list">' + pfDataSet.wpListComments + '</ol><!-- .comment-list -->';
 if (pfDataSet.hasOwnProperty('commentNavigation')) {
_pf19edb768 += '<nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">' + '<h2 class="screen-reader-text">' + pfDataSet.commentNavigation + '</h2>' + '<div class="nav-links">' + '<div class="nav-previous">' + pfDataSet.previousCommentsLink + '</div>' + '<div class="nav-next">' + pfDataSet.nextCommentsLink + '</div>' + '</div><!-- .nav-links -->' + '</nav><!-- #comment-nav-above -->';
}} if (pfDataSet.hasOwnProperty('noComments')) {
_pf19edb768 += '<p class="no-comments">' + pfDataSet.noComments + '</p>';
}
_pf19edb768 += pfDataSet.commentForm;
;
_pf19edb768 += '</div><!-- #comments -->';
return _pf19edb768.replace(//g, "'");
},
pfbc334214: function (pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '';
_pf19edb768 += '<aside id="secondary" class="widget-area" role="complementary">' + pfDataSet + '</aside><!-- #secondary -->';
_pf19edb768 += ' ';
return _pf19edb768.replace(//g, "'");
},
pf9c7fd493: function (pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row"><div class="col-md-12"><div class="content-bottom"><!-- add the content to the bottom --></div></div></div></div></div><!-- #content -->';
return _pf19edb768.replace(//g, "'");
},
pf40126157: function(pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '<!-- footer section template @package CI-WP-PF @subpackage PlannerFw Copyright W3plan Technologies<https://www.w3plan.net/>--><footer id="colophon" class="site-footer" role="contentinfo"><div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row footer" id="footer"><div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 center-block text-center"><h3>';
_pf19edb768 += pfDataSet.title;
_pf19edb768 += '</h3><ul><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li></ul></div><div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 center-block text-center"><h3>';
_pf19edb768 += pfDataSet.title;
_pf19edb768 += '</h3><ul><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li></ul></div><div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 center-block text-center"><h3>';
_pf19edb768 += pfDataSet.title;
_pf19edb768 += '</h3><ul><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li></ul></div><div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 center-block text-center"><h3>';
_pf19edb768 += pfDataSet.title;
_pf19edb768 += '</h3><ul><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li><li><a href="#">Lorem Ipsum</a></li></ul></div><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div style="margin-top:20px;padding: 20px 0px;width: 100%;border: 1px solid rgb(181, 181, 181);background-color: rgb(255, 255, 255);"><form method="post" action="" style="margin: 0px 20px;"><h5 style="margin: 0px 0px 10px;padding: 0px;font-family: Helvetica, Arial, sans-serif;font-weight: bold;color: rgb(0, 0, 0);font-size: 16px;text-align: center;">';
_pf19edb768 += pfDataSet.email;
_pf19edb768 += '</h5><div style="margin: 5px 0;width: 100%;"><input style="padding: 10px 0px !important;width: 100% !important;font-family: Helvetica, Arial, sans-serif;font-style: normal;font-size: 14px;text-align: center;" type="email" placeholder="Enter your email" value="" name="data[Widget][email]"></div><div style="margin: 5px 0;width: 100%;"><input style="padding: 10px 0px !important;width: 100% !important;font-family: Helvetica, Arial, sans-serif;font-weight: bold;color: rgb(0, 0, 0);font-size: 16px;text-align: center;background-color: rgb(222, 222, 222);" type="submit" name="subscribe" value="Subscribe"></div></form></div><a href="#"><button class="btn contact" type="button">';
_pf19edb768 += pfDataSet.feedback;
_pf19edb768 += '</button></a></div></div><!--/.row--></div>';
return _pf19edb768.replace(//g, "'");
},
pf5b3af606: function (pfDataSet) {
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
},
run: function (pfDataSet) {
var _pf19edb768 = "";
_pf19edb768 += '';
_pf19edb768 += /** * include header-top section */ this.pf2a1fb6f1(pfDataSet.headerTop);
_pf19edb768 += /** * include navigation-menu section */ this.pf54032fc0(pfDataSet.navMenu);
_pf19edb768 += /** * include content-top section */ this.pffd9e134b(pfDataSet.contentTop);
_pf19edb768 += '<!-- single entirety template @package CI-WP-PF @subpackage PlannerFw Copyright W3plan Technologies<https://www.w3plan.net/>--><div class="container';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_DESIGN') && pfConfig.viewGlobal.VIEW_DESIGN === 'fluid') {
_pf19edb768 += '-fluid';
}
_pf19edb768 += '"><div class="row"><div class="col-md-9';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_LAYOUT') && pfConfig.viewGlobal.VIEW_LAYOUT === 'sidebar-content') {
_pf19edb768 += ' col-md-push-3';
}
_pf19edb768 += '"><div id="primary" class="content-area"><main id="main" class="site-main" role="main">';
 if ( pfDataSet.contentMid.hasOwnProperty('havePosts') ) {var plen = pfDataSet.contentMid.havePosts.length;var post;for (post = 0;post< plen;post++) {
_pf19edb768 += '<div class="row"><div class="col-md-12">';
_pf19edb768 += /* include content-page template */ this.pfaa6ae108(pfDataSet.contentMid.havePosts[post].content);
_pf19edb768 += '</div></div>';
 if (pfDataSet.contentMid.havePosts[post].hasOwnProperty('comments') && pfDataSet.contentMid.havePosts[post].comments) {
_pf19edb768 += '<div class="vertical-interval"></div><div class="row"><div class="col-md-12">';
_pf19edb768 += /* include comments template */ this.pf16d1e58c(pfDataSet.contentMid.havePosts[post].comments);
_pf19edb768 += '</div></div>';
} if (pfDataSet.contentMid.havePosts[post].hasOwnProperty('thePostNavigation')) {
_pf19edb768 += '<div class="vertical-interval"></div><div class="row"><div class="col-md-12">';
_pf19edb768 += pfDataSet.contentMid.havePosts[post].thePostNavigation;
_pf19edb768 += '</div></div>';
}}}
_pf19edb768 += '<div class="row"><div class="col-md-12">';
 if (pfDataSet.contentMid.hasOwnProperty('populars')) {
_pf19edb768 += '<p class="title-bar">POPULAR POSTS</p>';
 var plen = pfDataSet.contentMid.populars.length;var pst;for (pst = 0;pst< plen;pst++) {
_pf19edb768 += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 md-box"><a class="entry-link" href="';
_pf19edb768 += pfDataSet.contentMid.populars[pst].pLink;
_pf19edb768 += '"><img class="post-thumbnail thumbnail_img img-responsive" src="';
_pf19edb768 += pfDataSet.contentMid.populars[pst].thumbnailUrl;
_pf19edb768 += '" alt="Post thumbnail"><p class="cw-post-title">';
_pf19edb768 += pfDataSet.contentMid.populars[pst].title;
_pf19edb768 += '</p></a></div>';
}}
_pf19edb768 += '</div></div></main><!-- #main --></div><!-- #primary --></div><div class="col-md-3';
 if (pfConfig.viewGlobal.hasOwnProperty('VIEW_LAYOUT') && pfConfig.viewGlobal.VIEW_LAYOUT === 'sidebar-content') {
_pf19edb768 += ' col-md-pull-9';
}
_pf19edb768 += '">';
 if (pfDataSet.contentMid.hasOwnProperty('sideBar')) {
_pf19edb768 += /* include sidebar template */ this.pfbc334214(pfDataSet.contentMid.sideBar);
}
_pf19edb768 += '</div></div></div>';
_pf19edb768 += /** * include content-bottom section */ this.pf9c7fd493(pfDataSet.contentBtm);
_pf19edb768 += /** * include footer section */ this.pf40126157(pfDataSet.footer);
_pf19edb768 += /** * include disclaimer section */ this.pf5b3af606(pfDataSet.disclaimer);
_pf19edb768 += ' ';
return _pf19edb768.replace(//g, "'");
}
};