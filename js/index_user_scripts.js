(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", "#sidemenu_button", function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidemenu"));  
        });
        $(document).on("click", ".uib_w_6", function(evt)
        {
         activate_subpage("#favorites_page"); 
        });
        $(document).on("click", ".uib_w_7", function(evt)
        {
         activate_subpage("#messages_page"); 
        });
        $(document).on("click", ".uib_w_8", function(evt)
        {
         activate_subpage("#profile_page"); 
        });
}
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
