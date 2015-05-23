/** Callback error
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     callback-error
 */
'use strict';


function CallbackError(scope, callback, err, label, variable) {
  self = this
  if (!callback) {
    self.scope = scope || ''
    return
  }
  if ('function' == typeof scope) {
    variable = label
    label    = err
    err      = callback
    callback = scope
    scope    = self.scope
  } else {
    scope    = self.scope + '.' + scope
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
