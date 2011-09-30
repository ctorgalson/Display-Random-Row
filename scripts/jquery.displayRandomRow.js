/**
 * This plugin finds all of the "rows"--repeating elements of whatever sort--in
 * the current jquery collection, generates a random number corresponding to one
 * item in the collection, and hides the siblings of that element.
 *
 * @author Christopher Torgalson <chris@raisedeyebrow.com>
 * @param object overrides Options for the script. Currently there is only one:
 *
 *        string: rowSelector The jquery selector for the "rows" in the current
 *                            collection. Given how the script works, these MUST
 *                            be siblings.
 * @version 1.0
 */
(function($){
  $.fn.displayRandomRow = function(overrides) {
    var defaults = {
      rowSelector: '.row'
    };
    return this.each(function(i,e){
      var settings = $.extend({}, defaults, overrides);
      $rows = $(e).find(settings.rowSelector);
      $rows.eq(Math.floor(Math.random() * $rows.size())).siblings().hide();
    });
  }
})(jQuery);