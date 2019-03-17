/**
 PlannerFw Template
 
 Presentation URL path: /wppf/fuseki/struct/footer.html
 Dynamic data: JSON/XML Model
 
 This file was created at 2019-03-11 21:17:09 by PlannerFw Preprocessor
 Copyright  (c) Copyright 2015 - 2019 W3plan Technologies <https://www.w3plan.net/>
 License    GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
*/

var pfTemplate = {
run: function(pfDataSet) {
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
}
};