<?php
class PluginBootstrapToast{
  public function widget_include($data){
    wfPlugin::enable('wf/embed');
    $widget = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => '/plugin/bootstrap/toast/js/PluginBootstrapToast.js'));
    wfDocument::renderElement(array($widget));
  }
}
