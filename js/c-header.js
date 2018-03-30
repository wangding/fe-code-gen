var $header = function() {
  var $header = $('<div class="app-header"><h1></h1></div>');

  var $title = $header.find('h1');

  /**
   * 设置 header 组件的 title 信息
   *
   * @param int step 当前进行第几步设置
   */
  function setTitle(step) {
    var title = app.config.headerTitleTemplate;

    title = title.replace('x', step);
    title = title.replace('y', app.config.totalSteps);
    title = title.replace('#', app.config.stepTitles[step-1]);

    $title.html(title);
  }

  function show() {
    setTitle(app.currentStep);
    $(app.config.appContainer).append($header);
  }
  
  return {show: show, setTitle: setTitle};
}();
