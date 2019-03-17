/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/comments.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-18 21:16:42 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
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
}
};