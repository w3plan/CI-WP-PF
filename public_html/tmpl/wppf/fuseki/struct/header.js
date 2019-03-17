/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/header.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-01-12 13:31:32 by PlannerFw Preprocessor
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
_pf19edb768 += '"><div class="row"><div class="col-md-12"><div class="carousel slide" id="carousel-ci-wp"><ol class="carousel-indicators"><li class="active" data-slide-to="0" data-target="#carousel-ci-wp"></li><li data-slide-to="1" data-target="#carousel-ci-wp"></li><li data-slide-to="2" data-target="#carousel-ci-wp"></li></ol><div class="carousel-inner"><div class="item active"><img alt="Carousel Bootstrap First" src="';
_pf19edb768 += pfDataSet.slideOne;
_pf19edb768 += '" /><div class="carousel-caption"><!--h4>Caption title</h4--><p>';
_pf19edb768 += pfDataSet.caption1;
_pf19edb768 += '</p></div></div><div class="item"><img alt="Carousel Bootstrap Second" src="';
_pf19edb768 += pfDataSet.slideTwo;
_pf19edb768 += '" /><div class="carousel-caption"><!--h4>Caption title</h4--><p>';
_pf19edb768 += pfDataSet.caption2;
_pf19edb768 += '</p></div></div><div class="item"><img alt="Carousel Bootstrap Third" src="';
_pf19edb768 += pfDataSet.slideThree;
_pf19edb768 += '" /><div class="carousel-caption"><!--h4>Caption title</h4--><p>';
_pf19edb768 += pfDataSet.caption3;
_pf19edb768 += '</p></div></div></div><a class="left carousel-control" href="#carousel-ci-wp" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#carousel-ci-wp" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a></div></div></div></div>';
return _pf19edb768.replace(//g, "'");
}
};