var app = {};

/*
 * appName 暂时没用
 */

app.config = {
  'appName': 'FE 代码生成器',
  'appContainer': '#fe-code-gen-app',
  'headerTitleTemplate': '第&nbsp;x&nbsp;步（共&nbsp;y&nbsp;步）：#',
  'totalSteps': '4',
  'stepTitles': [
    '创建&nbsp;header',
    '创建&nbsp;panel',
    '创建&nbsp;dialog',
    '生成代码'
    ]
};

app.currentStep = 1;  // 当前程序位于第 1 步设置
