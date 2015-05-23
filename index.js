/** Callback error
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     callback-error
 */
'use strict';
function CallbackError(param) {
  param = param || {}
  var cb = param.callback || param.cb
  var err = param.error   || param.err || 'Missing CallbackError Error'
  if (!cb || !err) return
  if ('object' == typeof err) err = err.message
  var scope = (param.in && param.in.length > 0) ? param.in + ': ' : ''
  var label = ''
  for (var i in param) {
    var value = param[i]
    var type = typeof value
    if (['in', 'err', 'error'].indexOf(i) < 0 && type != 'function') {
      if (label.length > 0) label += ', '
      label += i + ': '
      if (['number', 'string'].indexOf(type) < 0) value = JSON.stringify(value)
      label += value
    }
  }

  cb(scope + err + label)
}



module.exports = CallbackError
