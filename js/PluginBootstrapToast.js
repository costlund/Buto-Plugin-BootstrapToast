
function PluginBootstrapToast(){
  this.toast = function(data){
    if(typeof data.id == 'undefined'){
      alert('id not set');
      return null;
    }
    if(typeof data.autohide == 'undefined'){
      data.autohide = true;
    }
    if(typeof data.header == 'undefined'){
      data.header = '(header not set)';
    }
    if(typeof data.body == 'undefined'){
      data.body = '(body not set)';
    }
    /**
     * container
     */
    var containers = document.getElementsByClassName('toast-container');
    if(typeof containers[0] == 'undefined'){
      PluginWfDom.render([this.toast_container], document.body);
      containers = document.getElementsByClassName('toast-container');
    }
    var container = containers[0];
    /**
     * toast
     */
    if(!document.getElementById(data.id)){
      var e = this.toast_element;
      e.attribute.id = data.id;
      e.attribute["data-bs-autohide"] = data.autohide;
      e.innerHTML[0].innerHTML[0].innerHTML = data.header;
      e.innerHTML[1].innerHTML = data.body;
      /**
       * Header background
       */
      if(typeof data.header_bg != 'undefined'){
        e.innerHTML[0].attribute.class = 'toast-header text-bg-'+data.header_bg;
      }else{
        e.innerHTML[0].attribute.class = 'toast-header';
      }
      /**
       * 
       */
      PluginWfDom.render([e], container);
    }
    /**
     * show
     */
    if( typeof $('#'+data.id).toast == 'function'){
      $('#'+data.id).toast('show');
    }
  }
  this.toast_element =
    {
      "type": "div",
      "attribute": {
        "id": "liveToast1",
        "class": "toast",
        "role": "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        "data-bs-autohide": "false"
      },
      "innerHTML": [
        {
          "type": "div",
          "attribute": {
            "class": "_set_in_action_"
          },
          "innerHTML": [
            {
              "type": "strong",
              "attribute": {
                "class": "me-auto"
              },
              "innerHTML": "Bootstrap1"
            },
            {
              "type": "button",
              "attribute": {
                "type": "button",
                "class": "btn-close",
                "data-bs-dismiss": "toast",
                "aria-label": "Close"
              }
            }
          ]
        },
        {
          "type": "div",
          "attribute": {
            "class": "toast-body"
          },
          "innerHTML": "Hello, world! This is a toast message.  "
        }
      ]
    }
  ;
  this.toast_container = 
    {
      "type": "div",
      "attribute": {
        "class": "toast-container position-fixed top-0 end-0 p-3"
      },
      "innerHTML": null
    }
  ;
}
var PluginBootstrapToast = new PluginBootstrapToast();
