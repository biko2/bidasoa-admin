(function ($, Drupal) {
  Drupal.behaviors.EnvironmentnWatermark = {
    attach: function attach(context) {
      var watermark = $('<div class="toolbar-item toolbar-item-environment"><span>'+ drupalSettings.bidasoaEnvironment + '</span></div>');
      $(once('env-watermark','#toolbar-bar', context)).append(watermark);
    }
  };

})(jQuery, Drupal, drupalSettings);
