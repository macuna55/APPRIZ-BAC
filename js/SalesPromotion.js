var SalesProData = [
    {
      "idRule": "Jd6NoTij3xTDF9WurjcOKkR/TCGrb82Meucpr9wzQEPv8EPHLOtmeue1JvyuPfi4nZ1tHAQzKHS6zW2/r44ZgE6rWryOEvwrdCNgWGOpLk/mZKT8ja/y2avfbcyx/h4h0cp25W+PEeVIUBmn+8CuIIJnyfPceL9av42TRbfuH0+n0qaywe+++WJHlGLDhEyP",
      "ruleName": "Birthday Notification",
      "active": true,
      "description": "Send me a  <[By]> <[Notify]> message with my clients' birthday.",
      "fields": {
        "By": {
          "value": "2",
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
            "daily": "1",
            "weekly": "2",
            "monthly": "3"
          }
        }
      }
    },
    {
      "idRule": "z52I/ayONskbgvh887bNWD4+kRqKhqiAUdBz8GveG0pHrsUDKh3vrbTPEkflvVLgRUR1oMSWMgZTT/cKvL6PQnv37ArQfNIwKXNB1LaOZABnU3A1+puOh3zAOx05BbvzJOpGpUePNBVx7ACd64l+BEUJMOwRvd5ZR6ZZXCBZPSUf4MWy/p+ebsNi4UGMhE8+",
      "ruleName": "Idle Cash",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message with clients that have cash/money market holding greather than <[Percentage]>%.",
      "fields": {
        "Percentage": {
          "value": "34.3",
          "type": "number"
        },
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
        }
      }
    },
    {
      "idRule": "Sr03X6U3hzXPM6HcYatRUM+/MGlt6T+IM4np52h9Bf09kYeZEzt+uJbWWRBKyuYivtIlEbUCqj9/JhpGkbizuchlA7vymJkF7LKSSUQLir/l+Un/GQnH4pyh2q/fEhmwEVQ+DX4I2/CLB4wkKgItwbJm1GJ4negDyL22cfT4Rzhkbdup6TCRJRdLw4hVThhN",
      "ruleName": "Surrender expiration",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message with client's positions coming out of surrender in <[Days]> Days.",
      "fields": {
        "Days": {
          "value": "30",
          "type": "integer"
        },
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
        }
      }
    },
    {
      "idRule": "g6h265UCmP66bGsZe6DD9isJybcqqz+/8jq1IJj673B0dyNnSB1Sh6MKEw9g2tIYGz1QALaNfaUBot0bfSLnP+CQjbM4IcfER6ETyES01ofREH4xK47cGyt+GcPD9c9p7UUKxa7TYBi8rvNCZ1dCdXMM+ajH+YsHxx1gxgWSjT8TffWILRXdCq9m5fffGvps",
      "ruleName": "Client Change",
      "active": true,
      "description": "Send me a <[By]> <[Notify]> message when <[Name]> of my clients change.",
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
            "weekly": "2",
            "daily": "1"
          }
        },
        "Name": {
          "value": null,
          "type": "boolean",
          "items": {
            "Name": "1",
            "Address": "1",
            "Marital status": "1",
            "Date of death": "0"
          }
        }
      }
    }
  ]
/*[{
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
		"Percentage"   : {type: "number" , value: 34.3},
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
}];*/