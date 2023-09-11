/**
 * Checks if the document is being displayed in full screen mode.
 * @returns {boolean} If the display mode is full screen.
 */
function isFullScreen() {
  const doc = window.document;
  return doc.fullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
}

/**
 * Toggle between windowed and full screnn display modes.
 * @returns {boolean} If the display mode is full screen.
 */
function toggle() {
  const doc = window.document;
  if (isFullScreen()) {
    const cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.msExitFullscreen ||
      doc.webkitExitFullscreen;
    cancelFullScreen.call(doc);
    return false;
  } else {
    const docEl = doc.documentElement;
    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.msRequestFullscreen ||
      docEl.webkitRequestFullScreen;
    requestFullScreen.call(docEl);
    return true;
  }
}

/**
 * Exports the object with its objects.
 * @returns {object} A fullscreen object.
 */
export default {
  isFullScreen,
  toggle
};
