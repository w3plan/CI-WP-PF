<?php
  /**
   * The sample code to log client errors in production environment
   * 
   */
  if (!empty($_REQUEST)) {
    $level = trim(htmlspecialchars($_REQUEST['level'], ENT_QUOTES));
    $msg = trim(htmlspecialchars($_REQUEST['msg'], ENT_QUOTES));
    $line = trim(htmlspecialchars($_REQUEST['line'], ENT_QUOTES));
    
    if (!empty($level) && !empty($msg)) {
      $msg = (empty($line)) ? $msg : $msg . " at line: " . $line; 
      
      // Sets 'UTC' as the default timezone
      date_default_timezone_set('UTC');
      $date = date("Y-m-d"); 
      $datetime = date("Y-m-d H:i:s");
      
      $message_type = 3;
      $destination = dirname($_SERVER["DOCUMENT_ROOT"]) . "/pfcomp/client_logs/errors-" . $date . ".log";
      
      /**
       * Get client IP address
       *
       * @param void
       * @return string
       */
      function getClientIP() {
        $client  = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote  = $_SERVER['REMOTE_ADDR'];

        if (filter_var($client, FILTER_VALIDATE_IP)) {
          $ip = $client;
        } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
          $ip = $forward;
        } else {
          $ip = $remote;
        }
        
        return $ip;
      }
      
      /**
       * Write other catchable errors and uncatchable errors from the client to log files
       * 
       */
      $message = getClientIP() . " - " . $datetime . " (UTC) --> " . $msg . " --> " . $_SERVER['REQUEST_URI'] . PHP_EOL;
      
      error_log($message, $message_type, $destination);
    }
  }
  
  exit();
?>
