/** Callback error
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     callback-error
 */
 ;(function() {
'use strict';
var generalScope = ''


function CallbackError(callback, err, scope, label, variable) {
  if (!callback) {
    generalScope = scope || ''
    return CallbackError
  }
  if ('function' == typeof scope) {
    variable = label
    label    = err
    err      = callback
    callback = scope
    scope    = generalScope
  } else {
    scope    = (scope && scope.length > 0) ? generalScope + '.' + scope : generalScope
  }
  if ('string' !== typeof err) err = err.message
  if (label) {
    var type = typeof variable
    if (type == 'function') variable = type
    if ('number,string'.indexOf(type) < 0) {
      try {
        variable = JSON.stringify(variable)
      } catch(e) {
        variable = type + 'with error ' + e.message
      }
    }
    label = ', ' + label + ': ' + variable
  } else {
    label = ''
  }
  callback(scope + ': ' + err + label)
}



module.exports = CallbackError
})();
