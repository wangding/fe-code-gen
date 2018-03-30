var $configer = (function() {
  function show() {
    $(app.config.appContainer).append('<div class="app-configer"></div>')
  }

  return {show: show};
})();
