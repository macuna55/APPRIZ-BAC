var SalesProData = [{
    idRule: 54,
    ruleName: "Birthday Notification",
    active: true,
	description: "Send me a  <[By]> <[Notify]> message with my clients' birthday.",	
	fields: {
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
},{
    idRule: 55,
    ruleName: "Idle Cash",
    active: true,
	description: "Send me a <[By]> <[Notify]> message with clients that have cash/money market holding greather than <[Percentage]>%.",	
	fields: {
		"Percentage"   : {type: "number" , placeholder: 34.3},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
	
},{
    idRule: 56,
    ruleName: "Surrender expiration",
    active: true,
	description: "Send me a <[By]> <[Notify]> message with client's positions coming out of surrender in <[Days]> Days.",	
	fields: {
		"Days"   : {type: "integer" , placeholder: 34},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
	
},{
    idRule: 57,
    ruleName: "Client Change",
    active: true,
	description: "Send me a <[By]> <[Notify]> message when <[Name]> of my clients change.",
	fields: {
		"Name"  : {type: "boolean" ,  check: true, group: "Name"},
		"Address"   : {type: "boolean" , check: true, group: "Name"},
		"Marital status"  : {type: "boolean" ,  check: true, group: "Name"},
		"Date of death"   : {type: "boolean" , check: false, group: "Name"},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {weekly: "1", daily : "0"}},
	}
}];