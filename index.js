/** Callback error
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     callback-error
 */
'use strict';
function CallbackError(scope, callback, err, label, variable) {
  if ('function' == typeof scope) {
    variable = label
    label    = err
    err      = callback
    callback = scope
    scope    = ''
  }
  scope = (scope) ? scope + ': ' : ''
  if ('object' == typeof err) err = err.message
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
  callback(scope + err + label)
}



module.exports = CallbackError
