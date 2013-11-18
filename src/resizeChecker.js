/*
 * resizeChecker
 * https://github.com/silvers/jquery-resizeChecker
 *
 * Copyright (c) 2013 silvers
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.resizeChecker = function(options) {
    console.log('start watching resize.');
    options = $.extend({}, $.resizeChecker.options, options);

    var $target = $(this);
    $target.on(options.eventname, options.callback);

    var data = {
      current:  {},
      previous: {}
    };

    $.each(options.keys, function() {
      data.current[this] = $target[this]();
    });

    var checkResize = function() {
      var isResize = false;
      $.each(options.keys, function() {
        data.previous[this] = data.current[this];
        data.current[this]  = $target[this]();
        isResize = isResize || data.previous[this] !== data.current[this];
      });
      return isResize;
    };

    var interval = setInterval(function() {
      console.log('checking resize...');

      if ( checkResize() ) {
        console.log('trigger costomresize.');
        $target.trigger(options.eventname, [this, data]);
      }
    }, options.interval);

    return this;
  };

  // Static method default options.
  $.resizeChecker.options = {
    interval: 1000,
    keys: ['height', 'width'],
    eventname: 'customresize',
    callback: function() {}
  };

}(jQuery));
