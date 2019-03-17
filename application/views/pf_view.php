<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Output PlannerFW protable controller for dynamic data and data presentation
 *
 * Default PlannerFw view  
 *
 * @link		https://codeigniter.com/user_guide\
 * @version 3.1.0
 *
 * @package		  CI-WP-PF
 * @subpackage	PlannerFw
 * @category	  view
 * @author      W3plan Technologies
 */

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="/app/lib/planner.js"></script>
  <script type="text/javascript">
    <?php echo $tm ?>
  </script>
  <script type="text/javascript">
    var pfModel = <?php echo $md ?>;
  </script>
  <script src="/app/index.js"></script>
  <title>PlannerFw portable controller</title>
</head>
<body></body>
</html>
