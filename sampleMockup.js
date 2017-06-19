'use strict';
var http = require('http');

module.exports = {
  getCustomers: getCustomers,
  getMenus: getMenus,
  getFacilities: getFacilities,
  genReport: genReport,
  getStatusReport: getStatusReport,
  getURLReport: getURLReport,
  getExcelReport: getExcelReport
};

function getCustomers(req, res, next) {  
    res.json([
      {"customerId":"48854","customerName":"0083","level":"1"},{"customerId":"48912","customerName":"123213","level":"2"},
      {"customerId":"50106","customerName":"www","level":"2"},{"customerId":"48855","customerName":"0083-0123","level":"1"},
      {"customerId":"48830","customerName":"0104jobname","level":"1"},{"customerId":"49495","customerName":"jobName2","level":"2"},
      {"customerId":"48851","customerName":"0104jobname-01","level":"1"},{"customerId":"48852","customerName":"0104jobname-001","level":"2"},
      {"customerId":"48853","customerName":"0104jobname-0001","level":"3"},{"customerId":"48856","customerName":"0104jobname-00001","level":"4"},
      {"customerId":"48857","customerName":"0104jobname-000001","level":"5"},{"customerId":"48858","customerName":"0104jobname-0000001","level":"6"},
      {"customerId":"49886","customerName":"0200","level":"1"},{"customerId":"49044","customerName":"0638A","level":"1"},
      {"customerId":"49352","customerName":"0721","level":"1"},{"customerId":"49432","customerName":"0721_001","level":"2"},
      {"customerId":"49433","customerName":"0721_001_01","level":"3"},{"customerId":"49966","customerName":"0721_001_01_01","level":"4"},
      {"customerId":"49746","customerName":"0721_002","level":"2"},{"customerId":"45311","customerName":"0721_5","level":"1"},
      {"customerId":"49766","customerName":"0721's son","level":"2"},{"customerId":"45730","customerName":"0721_6","level":"2"},
      {"customerId":"46270","customerName":"0721_3","level":"3"},{"customerId":"48610","customerName":"test","level":"4"},
      {"customerId":"49351","customerName":"asdf","level":"2"},{"customerId":"49472","customerName":"win430","level":"2"},
    ]);
}

function getMenus(req, res, next) {   
    res.json([
     {"eventClass":"1","sectionDesc":"Administration","displayName":"Page Maintenance","displayDesc":"Add, Change or Delete pages from the Postage Reports Application"},{"eventClass":"39","sectionDesc":"Internal Use Only","displayName":"AAAA","displayDesc":"333"},{"eventClass":"16","sectionDesc":"Internal Use Only","displayName":"CASS Summary Report","displayDesc":"CASS Summary"},{"eventClass":"20","sectionDesc":"Reports","displayName":"CASS Mail Report","displayDesc":"Determine how many and what percentage of a customers statements were matched with valid addresses and zip codes by the CASS software for a particular run month. "}
     ]);
}

function getStatusReport(req, res, next){	

	var today = new Date();	
	if(today.getSeconds() % 10 > 6  )
	{	
		res.json({"status":"complete"});
	}    
    else
    {
        res.json({"status":"processing"});
    }		
}


function getURLReport(req, res, next){	
	res.json({"url":"http://crystalservicesdev3.billing.com/crystal-api-war/ws_test.html"})
}

function getExcelReport(req, res, next){
    res.set('content-disposition', 'attachment; filename=CassMailReport.82125.csv');
	res.set('Content-Type', 'application/csv');
    res.send('CLIENT_NM,CORP_CD,CORP_DESC,CUST_TARGET_MAIL_DT,SOC_DT,FINAL_MAIL_DT,CYCLE,RUN_MONTH,CASSED_MATCHED,CASS_STATUS_CD,STMT_CNT,CASS_MATCHED_PERC'); 
}
