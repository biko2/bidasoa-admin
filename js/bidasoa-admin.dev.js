(function ($, Drupal) {
  Drupal.behaviors.DevWatermark = {
    attach: function attach(context) {
        var watermark = $('<div class="toolbar-item toolbar-item-environment"><span>✅ DEV environment</span></div>');
        $(once('env-watermark','#toolbar-bar', context)).append(watermark);
    }
  };

})(jQuery, Drupal);
