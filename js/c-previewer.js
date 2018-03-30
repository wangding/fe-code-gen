var $previewer = (function() {
  function show() {
    $(app.config.appContainer).append('<div class="app-previewer"></div>')
  }

  return {show: show};
})();
