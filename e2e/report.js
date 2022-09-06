const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'report.json',
     output:'cucumber-html-report.html',
     reportSuiteAsScenaros:true,
     launchReport:false,
}
reporter.generate(options)