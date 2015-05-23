/** Callback error
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     callback-error
 */
 (function() {
  'use strict';
  var CallbackErrorError = require('make-error')('CallbackErrorError')

  /** Callback error
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function callbackErrorClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = options
    return self
  }



  /** Callback error
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function callbackError(options) {
    return new callbackErrorClass(options).value
  }


  module.exports = callbackError
})();
