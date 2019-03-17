<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Default CI-WP-PF Controller 
 *
 * @link		https://codeigniter.com/user_guide
 * @version 3.1.0
 * 
 * @package		  CI-WP-PF
 * @subpackage	CodeIgniter
 * @category	  Controller
 * @author      W3plan Technologies
 */

// include basic CI-WP-PF controller file
require_once APPPATH . "controllers/Cwp.php";

class Ciwppf extends CWP_Controller 
{    
  /**
   * Class constructor
   * 
   * @public
   * @param   void
   * @return	void
   */
  public function __construct()
  {        
    parent::__construct();
    
    // load CI-WP-PF base model
    $this->load->model('cwf_model', 'cwf', TRUE);
  }
  
  /**
   * output message with error-general template
   * 
   * @private
   * @param	string   $message  The message to output 
   * @return	viod
   */
  private function _errorGeneral($message = "")
  {
    header("Location: /error-general?msg=" . $message, TRUE);
    
    exit();
  }
  
  /**
   * using WordPress theme for web presentation
   * 
   * @private
   * @param   object  $cntlr  The controller object
   * @return	viod
   */
  private function _ciwpStage($cntlr)
  {
    // transfer controller object
    $cidata['controller'] = $cntlr;
    
    // load CI-WP view
    $this->load->view('ciwp_view', $cidata);
  }
  
  /**
   * using the view to output PlannerFW protable controller
   * 
   * @private
   * @param	string   $tm  The URL path to public template or the content to private template
   * @param	string	 $md  A JSON encoded string of dynamic data to related template 
   * @return void
   */
  private function _pfStage($tm, $md)
  {
    // transfer data to view
    $data['tm'] = $tm;
    $data['md'] = $md;
    
    // load PlannerFw view
    $this->load->view('pf_view', $data);
  }
  
  /**
   * default action for CI-WP-PF
   *
   * @public
   * @param   void
   * @return	void
   */
	public function index()
  { 
    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    
    $url_path = parse_url($url, PHP_URL_PATH);
    
    $url_path = trim(trim($url_path), '/');
    
    if (stripos($url_path, '/') !== FALSE)
    {
      $url_path = strstr($url_path, '/', TRUE);
    }
    
    $part_urlpath = "/" . $url_path;
    
    $bypassUrlPaths = get_bypass_paths();
    
    if (defined('PF_ACTIVATION') && PF_ACTIVATION && !in_array($part_urlpath, $bypassUrlPaths)) 
    { 
      // load PlannerFw configuration 
      $this->load->helper('pf_config');
      
      $site_root = trim($_SERVER["DOCUMENT_ROOT"]);
      
      // transfer controller object
      $cidata['controller'] = $this;
        
      // load CI-WP-PF view but doesn't output the view
      $this->load->view('ciwp_view', $cidata, TRUE);
      
      $pf_temp_name = pathinfo (get_current_template(), PATHINFO_FILENAME);
      
      $pf_temp_skins = get_temp_skins($pf_temp_name);
      
      if ($pf_temp_skins) 
      {
        $skin = '.' . $pf_temp_skins;
        
      } else 
      {
        $skin = '';
      }
      
      $relative_temp_path = trim(PF_TEMP_PATH, '/') . '/' . $pf_temp_name . $skin . '.' . trim(PF_TEMP_EXT, '.');
      
      $user_id = get_current_user_id();
      
      if ($user_id)
      {
        $user_info = get_userdata($user_id);
        
        $pf_permissions = get_permissions($pf_temp_name);
        
        $pf_permissions = array_change_key_case($pf_permissions);
        
        $msg = '';
        
        $temp_ckeck = FALSE;
        
        if ($pf_permissions)
        { 
          if (array_key_exists('roles', $pf_permissions) && !empty($pf_permissions['roles'])) 
          {
            $user_roles = $user_info->roles;
            
            $permissions = array_map('strtolower', $pf_permissions['roles']);
            
            $msg = 'Your WordPress user role can not access the private template.';
            
            foreach($user_roles as $user_role) 
            { 
              if (in_array($user_role, $permissions)) 
              { 
                $msg = '';
                
                break;
              }
            }
          
          } elseif (array_key_exists('usernames', $pf_permissions) && !empty($pf_permissions['usernames'])) 
          {
            $user_name = $user_info->user_login;
            
            $permissions = array_map('strtolower', $pf_permissions['usernames']);
            
            if (!in_array($user_name, $permissions))
            {
              $msg = 'Your WordPress username can not access the private template.';
            }
            
          } elseif (array_key_exists('useremails', $pf_permissions) && !empty($pf_permissions['useremails'])) 
          {
            
            $user_email= $user_info->user_email; 
            
            $permissions = array_map('strtolower', $pf_permissions['useremails']);
            
            if (!in_array($user_email, $permissions))
            {
              $msg = 'Your WordPress useremail can not access the private template.';
            }
            
          } else 
          {
            $msg = 'The key in the array of access control has to be one of roles, usernames, useremails.';
          }
          
          if ($msg !== '') 
          {
            $this->_errorGeneral($msg);
          }
          
          // check whether the private template exist
          $temp_path =  dirname($site_root) . '/private_tmpl/' . $relative_temp_path;
          
          if (file_exists ($temp_path)) 
          {
            // get PlannerFw template content for private template
            $temp = file_get_contents($temp_path);
            
            // disable the browser to parse script tags in the string 
            $temp = str_ireplace('</script>', "</scri' + 'pt>", $temp);
            
          } else
          {
            $this->_errorGeneral('The private template: /private_tmpl/' . $relative_temp_path . ' does not exist');
          }
          
        } else
        {
          $temp_ckeck = TRUE;
        }
        
      } else 
      {
        $temp_ckeck = TRUE;
      }
      
      // check whether the public template exist
      if ($temp_ckeck) 
      { 
        $temp_path = $site_root . '/tmpl/' . $relative_temp_path;
        
        if (file_exists($temp_path))
        { 
          // assign public template path
          $temp = 'var pfTemplatePath = "' . $relative_temp_path . '"';
          
        } else
        { 
          $this->_errorGeneral('The public template: /tmpl/' . $relative_temp_path . ' does not exist');
        }
      }
      
      $pfmd = get_static_modeldata();
      
      // add dynamic data for PlannerFw model
      $pfmd['pfDataSet'] = fetch_data();      
      $pfmd = json_encode($pfmd);
      
      // go to the view of PlannerFw
      $this->_pfStage($temp, $pfmd );
      
    } else 
    { 
      // go to the view of WordPress
      $this->_ciwpStage($this);
    }
	}

}
