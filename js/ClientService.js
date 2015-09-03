var ClientServData = [{
    idRule: 64,
    ruleName: "Portfolio Loss",
    active: true,
	description: "Send me a <[By]> <[Notify]> message with client's with portfolio value reduction greather than <[Percentage]>% over the prior <[Days]> days and risk tolerance of <[Tolerance]>.",	
	fields: {
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
		"Percentage"   : {type: "number" , placeholder: 34.3},
		"Days"   : {type: "integer" , placeholder: 34},
		"Tolerance"   : {type: "integer" , placeholder: 34},
	}
},{
    idRule: 65,
    ruleName: "Portfolio Drift",
    active: true,
	description: "Send me a <[By]> <[Notify]>  message with client's with portfolio drift greather than <[Percentage]>%.",	
	fields: {
		"Percentage"   : {type: "number" , placeholder: 34.3},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
	
},{
    idRule: 66,
    ruleName: "RMD",
    active: true,
	description: "Send me a <[By]> <[Notify]> message with client's holding qualified accounts reaching Required Minimum Distribution age (71.5) within <[Days]> days.",	
	fields: {
		"Days"   : {type: "integer" , placeholder: 34},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
	
},{
    idRule: 67,
    ruleName: "Account Review",
    active: true,
	description: "Send me a <[By]> <[Notify]> message with managed accounts with last account review greather than <[Days]> days.",
	fields: {
		"Days"   : {type: "integer" , placeholder: 34},
		"By"  : {type: "selector" , items: {individual : "1", consolidate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "2", weekly: "1", daily : "0"}},
	}
}];