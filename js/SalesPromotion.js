var SalesProData = [{
    idRule: 54,
    ruleName: "Birthday",
    active: true,
	description: "Send me notifications when one of my clients birthday is coming",	
	fields: {
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
},{
    idRule: 55,
    ruleName: "Idle Cash",
    active: true,
	description: "Send me notifications of my clients Clients with cash/money market holdings > <[Percentage]> %",	
	fields: {
		"Percentage "   : {type: "number" , placeholder: 34.3},
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
	
},{
    idRule: 56,
    ruleName: "Surrender expiration",
    active: true,
	description: "Send me notifications of my Clients when they have positions coming out of surrender in <[Days]> Days",	
	fields: {
		"Days "   : {type: "integer" , placeholder: 34},
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
	
},{
    idRule: 57,
    ruleName: "Client Change",
    active: true,
	description: "Send me notifications if one of my clients marital status, address, name or date of death is change",
	fields: {
		"Name "  : {type: "boolean" ,  check: true},
		"Address "   : {type: "boolean" , check: true},
		"Marital status "  : {type: "boolean" ,  check: true},
		"Date of death "   : {type: "boolean" , check: false},
	}
}];