function timePicker(objs){
		timePickerString = '<fieldset class="ui-field-contain">';
		$.each(objs,function(index,obj){
			timePickerString = timePickerString + "<option value='"+obj["idTime"]+"'>"+obj["amount"]+" "+obj["unit"]+"</option>";
		});
		return timePickerString+"</fieldset>";
	}
function addRules(objs){
	var toAppend = '';				
	$.each(objs,function(index,obj){
		toAppend +=  "<li class='rule' id='rule_"+obj["idRule"]+"'><h3>"+obj["ruleName"]+"</h3>";
		toAppend +=   "<div class='onoffswitch'><input type='checkbox' name='toggle_"+obj["idRule"]+"' id='toggle_"+obj["idRule"]+"' class='toggle' "+(obj["active"] ? "checked" : "")+"><label for='toggle_"+obj["idRule"]+"'></label></div>";
		toAppend +=  "<div class='dropdownBox'>";
		toAppend +=  "<p>"+obj["description"].replace(/<\[singleAmount\]>/g,"<singleAmount>"+obj['singleAmount']+"</singleAmount>").replace(/<\[trxNo\]>/g,"<trxNo>"+obj['trxNo']+"</trxNo>").replace(/<\[idTime\]>/g,"<idTime>"+obj['idTime']+"</idTime>").replace(/<\[totalAmount\]>/g,"<totalAmount>"+obj['totalAmount']+"</totalAmount>").replace(/<\[varation\]>/g,"<varation>"+obj['varation']+"</varation>") +"</p><div class='editOption'><ul>";
	
	if("fields" in obj){
		for(field in obj["fields"]){
			switch(obj["fields"][field].type){
				case "integer":
				toAppend = toAppend + "<li><h4>"+field+"</h4><input type='tel' maxlength='15'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "number":
				toAppend = toAppend + "<li><h4>"+field+"</h4><input type='number' maxlength='15'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "string":
					
					toAppend = toAppend + "<li><h4>"+field+"</h4><input type='text' maxlength='10'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "cadence":
					toAppend = toAppend + "<li><h4>"+field+"</h4><select class='SelectStyle'>"+SPickerString+"</select></li>";
				break;
				
				case "date":
					toAppend = toAppend + "<li><h4>"+field+"</h4><input type='date' maxlength='10'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "time":					
					toAppend = toAppend + "<li><h4>"+field+"</h4><input type='time' maxlength='12'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "selector":
					var items = "";
					for (item in obj["fields"][field].items){
						items += "<option value='"+ obj["fields"][field].items[item]+"'>"+item+"</option>";
					}
					toAppend = toAppend + "<li><h4>"+field+"</h4><select class='SelectStyle'>"+items+"</select></li>";
					
				break;
				
				default:
					toAppend = toAppend + "<li><h4>"+field+"</h4><input type='text' field='trxNo' maxlength='100'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
			}
				//if( == "time" ){toAppend = toAppend + "<li><h4>"+field+"</h4><select class='SelectStyle'>"+SPickerString+"</select></li>";} 
			//	if(obj["fields"][field]. == "time" )
				//else{	toAppend = toAppend + "<li><h4>"+field+"</h4><input type='tel' field='trxNo' maxlength='10'  placeholder='"+obj.fields[field].placeholder+"'> <span class='icon-pencil'></span></li>";
			}
		};
	
		
		if("trxNo" in obj ) toAppend = toAppend + "<li><h4>"+$.t("Trx No.")+"</h4><input type='tel' field='trxNo' maxlength='10'  placeholder='"+obj["trxNo"]+"'> <span class='icon-pencil'></span></li>";
		if("singleAmount" in obj ) toAppend = toAppend + "<li><h4>"+$.t("Amount")+"</h4><input type='tel' field='singleAmount' maxlength='10'  placeholder='"+obj["singleAmount"]+"'/><span class='icon-pencil'></span></li>";
		if("totalAmount" in obj ) toAppend = toAppend + "<li><h4>"+$.t("Total Amount")+"</h4><input type='tel' field='totalAmount' maxlength='10'  placeholder='"+obj["totalAmount"]+"'/><span class='icon-pencil'></span></li>";
		if("varation" in obj ) toAppend = toAppend + "<li><h4>"+$.t("Variation")+"</h4><input type='tel' field='varation' maxlength='10' placeholder='"+obj["varation"]+"'/></td></tr>";
		if("idTime" in obj ) toAppend = toAppend + "<li><h4>"+$.t("Time")+"</h4><select class='SelectStyle'>"+SPickerString+"</select></li>";
		toAppend = toAppend + "</ul></div></div> </li>";
	//	$('#rules .products>ul').append(toAppend);
		//if("idTime" in obj ) {
		   // $('#rule_'+obj["idRule"]+' select option[value="'+obj["idTime"]+'"]').prop('selected', true); $('idTime:last').html($('select:last option[value="'+obj["idTime"]+'"]').html());}
	});
	$('#rules .products').html("<ul>"+toAppend+"</ul>");
	$('#rules .products select').each(function(){
		var idTime = $(this).parent().parent().parent().parent().find('idTime').html();
		$(this).find('option[value="'+idTime+'"]').prop('selected', true);
		$(this).parent().parent().parent().parent().find('idTime').html($(this).find('option[value="'+idTime+'"]').html());
		
	});
	
	
	$('#rules_div').append("<div style='width: 100%; height: 150px;'></div>");
	$(".refreshing_list").hide();
	myScrolll = new IScroll('#listProducts', {preventDefault: false, useTransition: true });

}

function getRules(productName){
	console.log(productName);
	addRules([{
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
	description: "Send me notifications of my Clients when they have positions coming out of surrender in X Days",	
	fields: {
		"Days "   : {type: "integer" , placeholder: 34},
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
	
},{
    idRule: 57,
    ruleName: "Birthday",
    active: true,
	description: "Send me notifications when one of my clients birthday is coming",	
	fields: {
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
},{
    idRule: 58,
    ruleName: "Idle Cash",
    active: true,
	description: "Send me notifications of my clients Clients with cash/money market holdings > <[Percentage]> %",	
	fields: {
		"Percentage "   : {type: "number" , placeholder: 34.3},
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
	
},{
    idRule: 59,
    ruleName: "Surrender expiration",
    active: true,
	description: "Send me notifications of my Clients when they have positions coming out of surrender in X Days",	
	fields: {
		"Days "   : {type: "integer" , placeholder: 34},
		"By "  : {type: "selector" , items: {individually : "1", conglomerate: "0"}},
		"Notify"  : {type: "selector" , items: {monthly : "1", weekly: "0"}},
	}
	
}])
	
}


function addRuleChange(idRule,field,value){
	if (!(idRule in  rulesChanges)){
		rulesChanges[idRule] = {"idRule" : idRule}
	}
		rulesChanges[idRule][field] = parseInt(value);
		
		console.log(JSON.stringify(rulesChanges));
}
		

function getValidTimePeriods(prd){	
	SPickerString = timePicker([{
		amount: 20,
		idTime: 1,
		unit: "Minute(s)",
	},{
		amount: 40,
		idTime: 2,
		unit: "Minute(s)",
	},{
		amount: 1,
		idTime: 3,
		unit: "Hour(s)",
	},{
		amount: 12,
		idTime: 4,
		unit: "Hour(s)",
	},{
		amount: 1,
		idTime: 5,
		unit: "Day(s)",
	}]);
		getRules(prd);
}

function processRuleChange(){
	var tmp_ruleChange = [];
	for ( ruleChange in rulesChanges){
		tmp_ruleChange.push(rulesChanges[ruleChange]);
	}
	rulesChanges = {};
	console.log(JSON.stringify(tmp_ruleChange));
	
$.post('http://'+IP+':8089/appriz/setRulesByProduct',{"idSecretClient": idScretClient,"productName": currentProduct, "rules":tmp_ruleChange},function(data){
	console.log(JSON.stringify(data));
			if (data["status"]== 200){
				SPickerString = timePicker(data["periods"]);
			}
		
	},'json') .fail(function(e) {
		showInfoD($.t("Offline Mode"),$.t("This option is disabled in Offline Mode"),function(){back=["inbox","inbox"];$(".imglogo").trigger("tapend")});
	}).done(function(){});
	
	return tmp_ruleChange;
}
		

$( document ).on("tapend","[page-content=rules]",function(ev){
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	if(Math.abs(startTap.Y - endY) < 10){
		$('#rules .products').html("<div class='refreshing_list'><i class='fa fa-spinner fa-spin'></i></div>");
		$("#rules .productNav li").eq(1).find("button").html($(this).find("prd").html());
		getValidTimePeriods($(this).find("prd").html());
	}else{
		ev.stopPropagation();
	}
		
		
});


$( document ).on('tapend','.rule',function(ev){
		
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	if(Math.abs(startTap.Y - endY) < 10){
		$('.rule.active').not($(this)).removeClass('active');
		$('.dropdownBox').not($(this).find('.dropdownBox')).hide();
		$(this).find('.dropdownBox').toggle();
		$(this).toggleClass('active');
	}
});

$( document ).on('tapend','.dropdownBox',function(event){
	event.stopPropagation();
});

//change values on rule description
$(document).on('keyup','.rule input[type=tel]',function(){
		
		$(this).parent().parent().parent().parent().parent().find($(this).attr('field')).html($(this).val());
		$(this).parent().parent().find('input[type=tel]').each(function(){
			addRuleChange($(this).parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).attr('field'),$(this).val() == null || $(this).val() == "" ? $(this).attr("placeholder")  : $(this).val() );	
		});
		$(this).parent().parent().find('.SelectStyle').each(function(){
		
			addRuleChange($(this).parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),'idTime',$(this).find('option:selected').val());
		});
		
		$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
});

$(document).on('change','.SelectStyle',function(){
		$(this).parent().parent().parent().parent().parent().parent().find('idTime').html($(this).find('option:selected').html());
		$(this).css({"color" : "#1A73B6"});
		$(this).parent().parent().find('input[type=tel]').each(function(){
			addRuleChange($(this).parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).attr('field'),$(this).val() == null || $(this).val() == "" ?    $(this).attr("placeholder") : $(this).val());	
		});
		addRuleChange($(this).parent().parent().parent().parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),'idTime',$(this).find('option:selected').val());
		$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
		
	});


//active rule
$( document ).on("tapend",'input.toggle + label',function(e){
		e.stopPropagation();
		var rId = $(this).parent().parent().attr('id').replace(/rule_(\S+)/,"$1");
		console.log(rId);
		if($(this).prev().is(":checked")){
			console.log('checked');
			$('.dropdownBox').not($(this).parent().parent().find(".dropdownBox")).hide();
			$(this).parent().parent().find(".dropdownBox").show();
			$('.rule.active').not($(this).parent().parent()).removeClass('active');
			$(this).parent().parent().addClass('active');
			$(this).parent().parent().find('.dropdownBox input').each(function(){
				console.log('table input');
				addRuleChange(rId,$(this).attr('field'),$(this).val() == "" ? $(this).attr("placeholder") : $(this).val());
				
			});
			$(this).parent().parent().find('option:selected').each(function(){
				addRuleChange(rId,'idTime',$(this).val());
			});

		}else{
			rulesChanges[rId] = {"idRule" : rId} // disable rule
			$(this).parent().parent().find(".dropdownBox").hide();
			$(this).parent().parent().removeClass('active');
		}
	});
	
$( document ).on("tapend",".icon-pencil",function(){
//	$(this).prev().focus();
});
	
//avoid non numeric symbols
 $(document).on("keydown",".rule input[type=tel]",function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            $(this).val(0);
			e.preventDefault();
			
        }
    });