(function ($, Drupal) {
  Drupal.behaviors.ProductionWatermark = {
    attach: function attach(context) {
        var watermark = $('<div class="toolbar-item toolbar-item-environment"><span>⚠️ Production environment</span></div>');
        $(once('env-watermark','#toolbar-bar', context)).append(watermark);
    }
  };

})(jQuery, Drupal);
