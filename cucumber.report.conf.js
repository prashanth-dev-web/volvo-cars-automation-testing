const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './report/cucumber/',
  reportPath: './report/cucumber/html',
  displayDuration: true,
  removeFolders: true,

  pageTitle: 'Volvo Cars',
  reportName: 'Volvo Cars',
  openReportInBrowser: true,
  customData: addMetadata(),
});

function addMetadata() {
  return {
    title: 'Run info',
    data: [
      {
        label: 'Project',
        value: 'Volvo Cars Testing Automation'
      },
      {
        label: 'Generated on:',
        value: new Date().toUTCString()
      },
      {
        label: 'Reporter:',
        value: '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
          'target="_blank">multiple-cucumber-html-reporter</a>'
      },
    ]
  };
}