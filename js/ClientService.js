var ClientServData = [
    {
		"idRule": "6NhhqizDD4TkwCX7OwlVNmK5azHcN1ytnOWHLFMNQ0s7iBOpdpfPC6b+RqT4M/+G17iIKmnOjG2ChpW2QUNn/4w50bybsaqrF5u7CAcT3nQFQ9q2anjsphitvE+zemHYOBEWlXAU7WA9SDsViTE8d4FW9XwlI+exHMWMMRfcLLvPvgyw5DeZ7acd5q3x1cGP",
      "ruleName": "Portfolio Loss",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message with client's with portfolio value reduction greather than <[Percentage]>% over the prior <[Days]> days and risk tolerance of <[Tolerance]>.",
      "fields": {
        "By": {
          "value": null,
          "type": "selector",
          "items": {
            "individual": "1",
            "consolidate": "2"
          }
        },
        "Notify": {
          "value": null,
          "type": "selector",
          "items": {
            "monthly": "3",
            "weekly": "2",
            "daily": "1"
          }
        },
        "Days": {
          "value": "30",
          "type": "integer"
        },
        "Tolerance": {
          "value": "30",
          "type": "integer"
        },
        "Percentage": {
          "value": "34.3",
          "type": "number"
        }
      }
    },
    {
      "idRule": "VIMcjZgXrGu3R/Xm/5XD82IUx/EgqAoWgICuxlvT3gDgFCgq80AqW+iACcGoq89LESLd1srCJsVhKNnpH7Yhl3sX0wP/K/ocw2Ulromf3K/WdBTJIBORTt9RJzctWYionj9CKWzQlIaRE0EvkfJ4IzyheMtf0RsZa4KEVSruClb4WnKBNO5xVwZIWw7jbc9t",
      "ruleName": "Portfolio Drift",
      "active": true,
      "description": "Send me a <[By]> <[Notify]>  message with client's with portfolio drift greather than <[Percentage]>%.",
      "fields": {
        "Percentage": {
          "value": "34.3",
          "type": "number"
        },
        "By": {
          "value": null,
          "type": "selector",
          "items": {
            "individual": "2",
            "consolidate": "1"
          }
        },
        "Notify": {
          "value": null,
          "type": "selector",
          "items": {
            "monthly": "3",
            "weekly": "2",
            "daily": "1"
          }
        }
      }
    },
    {
      "idRule": "LlCV4SUiVfgJ1HJrJVq+SBBxEiwfANTnhthCZ/KE+F6TVU1OBVeermG6oyo4pSi5rDPnAWDHzHZgRMvLLToMrGJjE+hI/YrO1b4lJRW55v0FJ1dPmruVJ948AEukdq4USo0MYVqVPDugJzN9t/ctatauqjnwmaS5nlB/JnMoyC0yh8cKjAnAZh7Rq4ppaM7W",
      "ruleName": "RMD",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message with client's holding qualified accounts reaching Required Minimum Distribution age (71.5) within <[Days]> days.",
      "fields": {
        "Days": {
          "value": "30",
          "type": "integer"
        },
        "By": {
          "value": null,
          "type": "selector",
          "items": {
            "individual": "2",
            "consolidate": "1"
          }
        },
        "Notify": {
          "value": null,
          "type": "selector",
          "items": {
            "monthly": "3",
            "weekly": "2",
            "daily": "1"
          }
        }
      }
    },
    {
      "idRule": "PjH8zhB1J5uw/SxsLvH00H01L04vG9vFhvHJ5uBnf6Zk6kEXrO+kQKleYf9PA8PSKNs20PYmRoVZ2PdG5O64ZQsjZDwr5vBLLz3vHAdTyz8eRc/B8R7ZQd6h3QqI1WJRX2oGTw4bc9jJazBalwGhe7v5V8QbCunGhfX+Se7EPc/saEaW/ZZxLWDs2EaZAWA7",
      "ruleName": "Account Review",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message with managed accounts with last account review greather than <[Days]> days.",
      "fields": {
        "Days": {
          "value": "30",
          "type": "integer"
        },
        "By": {
          "value": null,
          "type": "selector",
          "items": {
            "individual": "2",
            "consolidate": "1"
          }
        },
        "Notify": {
          "value": null,
          "type": "selector",
          "items": {
            "monthly": "3",
            "weekly": "2",
            "daily": "1"
          }
        }
      }
    }
  ]

/*[{
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
*/