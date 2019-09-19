"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = safeActiveElement;
// https://gist.github.com/Alex1990/046a6553dc83e22dd6f4
/**
 * Get the current active element safely.
 * Ref: https://github.com/jquery/jquery-ui/blob/2b84531ae9331f60e4d739fabca6d78abde89ae1/ui/safe-active-element.js
 */
function safeActiveElement(doc) {
  doc = doc || document;
  var activeElement = void 0;

  try {
    activeElement = document.activeElement;
    if (!activeElement || !activeElement.nodeName) {
      activeElement = doc.body;
    }
  } catch (error) {
    activeElement = doc.body;
  }

  return activeElement;
}