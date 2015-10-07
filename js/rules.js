function timePicker(objs){
		timePickerString = '<fieldset class="ui-field-contain">';
		try{
			$.each(objs,function(index,obj){
				timePickerString = timePickerString + "<option value='"+obj["idTime"]+"'>"+obj["amount"]+" "+obj["unit"]+"</option>";
			});
		}catch(e){
			
		}
		return timePickerString+"</fieldset>";
	}
function addRules(objs){
	var toAppend = '';				
	$.each(objs,function(index,obj){
		console.dir(obj);
		toAppend +=  "<li class='rule' id='rule_"+obj["idRule"]+"'><h3>"+obj["ruleName"]+"</h3>";
		toAppend +=   "<div class='onoffswitch'><input type='checkbox' name='toggle_"+obj["idRule"]+"' id='toggle_"+obj["idRule"]+"' class='toggle' "+(obj["active"] ? "checked" : "")+"><label for='toggle_"+obj["idRule"]+"'></label></div>";
		toAppend +=  "<div class='dropdownBox'>";
		var toChange = obj["description"].match(/\<\[(.*?)\]\>/g);

		if(toChange)
		{ 
			
			var desc = obj["description"];
			for(i=0;i<toChange.length;i++)
			{
				var toChangeTag = toChange[i].substr(2,toChange[i].length-4);
				switch(obj.fields[toChangeTag].type)
				{
					case "selector":
					//console.log(obj.fields[toChangeTag].items);
					for (it in obj.fields[toChangeTag].items)
					{
						var selVal = obj.fields[toChangeTag].items[it];
						if(selVal == obj.fields[toChangeTag].value)
						{
							desc = desc.replace(toChange[i],"<"+toChangeTag+">"+it+"</"+toChangeTag+">");
							
						}
					}	
					break;
					case "boolean":
					var grbChk = "";
					var chk;				
					var Uval = "";		
					var UvalAux = obj.fields[toChangeTag];
					//console.log(obj["ruleName"] +"+++++++"+ toChangeTag+"+++++++++"+UvalAux);
					if(UvalAux.value!=null)
					{
						Uval = obj.fields[toChangeTag].value.split('');		
					}
					console.log(Uval);
					var z=0;
					for(chk in obj.fields[toChangeTag].items)
					{	
						var val ="";
						if(Uval !="")
						{
							val =Uval[z];
							z++;
						}else{
							val = obj.fields[toChangeTag].items[chk];
						}
						console.log(val);
						if(val == "1")
						{
							if(grbChk.length>0)
							{
								grbChk = grbChk+", "+chk;
							}else
							{
								grbChk = chk;
							}									
						}	
					}
					desc = desc.replace(toChange[i],"<"+toChangeTag+">"+grbChk+"</"+toChangeTag+">");
					break;
					default:
					desc = desc.replace(toChange[i],"<"+toChangeTag+">"+obj.fields[toChangeTag].value+"</"+toChangeTag+">");
				}				
			}
			toAppend +=  "<p>"+desc+"</p><div class='editOption'><ul>";
			//toAppend +=  "<p>"+obj["description"].replace(toChange,"<"+toChangeTag+">"+obj.fields[toChangeTag].placeholder+"</"+toChangeTag+">").replace(/<\[trxNo\]>/g,"<trxNo>"+obj['trxNo']+"</trxNo>").replace(/<\[idTime\]>/g,"<idTime>"+obj['idTime']+"</idTime>").replace(/<\[totalAmount\]>/g,"<totalAmount>"+obj['totalAmount']+"</totalAmount>").replace(/<\[varation\]>/g,"<varation>"+obj['varation']+"</varation>") +"</p><div class='editOption'><ul>";
		}else{
			toAppend +=  "<p>"+obj["description"]+"</p><div class='editOption'><ul>";
		}
		
	
	if("fields" in obj){
		for(field in obj["fields"]){
			switch(obj["fields"][field].type){
				case "integer":
				toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='tel' maxlength='15'  placeholder='"+obj.fields[field].value+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "number":
				toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='tel' maxlength='15'  placeholder='"+obj.fields[field].value+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "string":					
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='text' maxlength='10'  placeholder='"+obj.fields[field].value+"'> <span class='icon-pencil'></span></li>";
				break;
				
				case "cadence":
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><select class='SelectStyle'>"+SPickerString+"</select></li>";
				break;
				
				case "date":
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='date' maxlength='10'  placeholder='"+obj.fields[field].value+"'></li>";
				break;
				
				case "time":					
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='time' maxlength='12'  placeholder='"+obj.fields[field].value+"'></li>";
				break;
				
				case "boolean":
					toAppend = toAppend + "<div group="+field+" id='rule_"+obj["fields"][field]["ParameterID"]+"'>";
					var items = "";
					var chck = ""; 
					
					console.log(obj["ruleName"] +"+++++++"+ toChangeTag);
					if(obj.fields[toChangeTag].value!=null)
					{
						chck = obj.fields[toChangeTag].value.split('');		
					}
					console.log(chck);
					
					var it = 0;
					for (item in obj["fields"][field].items){
						if(chck!=""){							
							if(chck[it]=="1"){
								toAppend = toAppend + "<li><h4>"+item+"</h4><i class='fa fa-check-square-o aweCheck' name='"+field+"'></i></li>";
							}
							else
							{						
								toAppend = toAppend + "<li><h4>"+item+"</h4><i class='fa fa-square-o aweCheck aweSquare' name='"+field+"'></i></li>";
							}
							it++;
						}else{
							if(obj.fields[field].items[item]=="1"){
								toAppend = toAppend + "<li><h4>"+item+"</h4><i class='fa fa-check-square-o aweCheck' name='"+field+"'></i></li>";
							}
							else
							{						
								toAppend = toAppend + "<li><h4>"+item+"</h4><i class='fa fa-square-o aweCheck aweSquare' name='"+field+"'></i></li>";
							}
						}
					}
					toAppend = toAppend + "</div>";
				break;
				
				case "selector":
					var items = "";
					for (item in obj["fields"][field].items){
						if(obj["fields"][field].value == obj["fields"][field].items[item])
						{
							items += "<option value='"+ obj["fields"][field].items[item]+"' selected>"+item+"</option>";
						}else{
							items += "<option value='"+ obj["fields"][field].items[item]+"'>"+item+"</option>";
						}
					}
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><select class='SelectStyle' >"+items+"</select></li>";
					
				break;
				
				default:
					toAppend = toAppend + "<li id='rule_"+obj["fields"][field]["ParameterID"]+"'><h4>"+field+"</h4><input type='text' field='trxNo' maxlength='100'  placeholder='"+obj.fields[field].value+"'> <span class='icon-pencil'></span></li>";
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
	$('#rules .products').html("<div id='listProducts'><ul>"+toAppend+"</ul></div>");
	$('#rules .products select').each(function(){
		var idTime = $(this).parent().parent().parent().parent().find('idTime').html();
		$(this).find('option[value="'+idTime+'"]').prop('selected', true);
		$(this).parent().parent().parent().parent().find('idTime').html($(this).find('option[value="'+idTime+'"]').html());
		
	});
	
	
	$('#rules_div').append("<div style='width: 100%; height: 150px;'></div>");
	$(".refreshing_list").hide();
	ruleScroll = new IScroll('#rules .products', { preventDefault: false, probeType: 3, mouseWheel: true }); 
	
}
/*
function getRules(productName){
	console.log(productName);
	switch(productName)
	{
		case "Sales Promotion":
			addRules(SalesProData);
		break;
		case "Client Service":
			addRules(ClientServData);
		break;
		case "Compliance":
			addRules(ComplianceData);
		break;
	}
	
	
}*/
function getRules(productName){
	console.log(productName);
		$.post('http://'+IP+':'+PORT+'/appriz/getRulesByProduct',{"idSecretClient": idScretClient,"productName":productName,},function(data){
		if (data["status"]== 200){
				addRules(data["rules"]);
			}
		
	},'json') .fail(function(e) {
		//	alert("conexion error!");
		//	alert( JSON.stringify(e));
	}).done(function(){$('.refreshing_list').hide(); });		
}



function addRuleChange(idRule,field,value){
	if (!(idRule in  rulesChanges)){
		rulesChanges[idRule] = {"idRule" : idRule}
	}
		rulesChanges[idRule]["value"] = value;
		//lesChanges[idRule].fields[field] = parseInt(value);
		
		console.log(JSON.stringify(rulesChanges));
}


function addRuleStatusChange(idRule,value){
	if (!(idRule in  rulesStatusChanges)){
		rulesStatusChanges[idRule] = {"idRule" : idRule};
	}
	else
	{
		delete(rulesStatusChanges[idRule]);
	}
		
	console.log(JSON.stringify(rulesStatusChanges));
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
	setTimeout(function(){ getRules(prd) }, 100); //avoid change first rule. NEED TO BE TESTED
		
}

function processRuleChange(){
	var tmp_ruleChange = [];
	var tmp_ruleStatusChange = [];
	for ( ruleChange in rulesChanges){
		tmp_ruleChange.push(rulesChanges[ruleChange]);
	}	
	for ( ruleStatusChange in rulesStatusChanges){
		tmp_ruleStatusChange.push(rulesStatusChanges[ruleStatusChange]);
	}	
	console.log("Este cambioa>  "+JSON.stringify(tmp_ruleStatusChange));	
	
	console.log("Este cambio>  "+JSON.stringify(tmp_ruleChange));	
	rulesChanges = {};
	$.post('http://'+IP+':'+PORT+'/appriz/setRulesByProduct',{"idSecretClient": idScretClient, "rules":tmp_ruleChange},function(data){
	console.log(JSON.stringify(data));
			if (data["status"]== 200){
				SPickerString = timePicker(data["periods"]);
			}
		
	},'json') .fail(function(e) {
		showInfoD($.t("Offline Mode"),$.t("This option is disabled in Offline Mode"),function(){back=["inbox","inbox"];$(".imglogo").trigger("tapend")});
	}).done(function(){});
	
	rulesStatusChanges = {};
	console.log(JSON.stringify(tmp_ruleStatusChange));			
		
	$.post('http://'+IP+':'+PORT+'/appriz/setRulesByCustomer',{"idSecretClient": idScretClient, "idRules":tmp_ruleStatusChange},function(data){
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
	$("#backInRules").html($(this).attr("icon"));
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	if(Math.abs(startTap.Y - endY) < 10){
		$('#rules .products').html("<div class='refreshing_list'><i class='fa fa-spinner fa-spin'></i></div>");
		$("#rules .productNav li").eq(1).find("button").html($(this).find("prd").html());
		getValidTimePeriods($(this).find("prd").html());
	}else{
		ev.stopPropagation();
	}	
});

$( document ).on("tapend","#backInRules",backKeyDown);

$( document ).on("tapend",".aweCheck",function(ev){
	//var x = target;
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	var change = $(this).attr("name").toLowerCase();
	var valChange = $(this).siblings('h4').text();
	var descChange = $(this).parent().parent().parent().parent().siblings("p").children(change).text();
	if($(this).hasClass("aweSquare"))
	{
		$(this).removeClass("aweSquare").removeClass("fa-square-o").addClass("fa-check-square-o");
		if(descChange.length < 3)
		{
			descChange = valChange;
		}else{
			descChange = descChange + ", "+valChange;
		}
	}else{
		$(this).addClass("aweSquare").addClass("fa-square-o").removeClass("fa-check-square-o");
		if(descChange.search(", "+valChange)>-1)
		{
			descChange = descChange.replace(", "+valChange,"")
		}else{
		if(descChange.search(valChange+",")>-1)
		{
			descChange = descChange.replace(valChange+",","")			
		}
		else//(descChange.search(valChange))
		{
			descChange = descChange.replace(valChange,"")			
		}}
	}		
	$(this).parent().parent().parent().parent().siblings("p").children(change).text(descChange);
	
	var value = "";
	
	genCheckOptions($(this).parent().parent().attr("group"),$(this).parent().parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).siblings('h4').text());
			
});

function genCheckOptions(group,id,param){
	$('div[group='+group+']').each(function(element){
    var value = "";
    $('div[group='+$(this).attr("group")+'] .aweCheck').each(function(element){
           value += $(this).hasClass("aweSquare") ? "0" : "1";		
    });
    addRuleChange(id,param,value );
	
})
}

$( document ).on('tapend','.rule',function(ev){			
	var endY = ev.pageY || ev.originalEvent.changedTouches[0].pageY;
	if(Math.abs(startTap.Y - endY) < 10){
		$('.rule.active').not($(this)).removeClass('active');
		$('.dropdownBox').not($(this).find('.dropdownBox')).hide();
		$(this).find('.dropdownBox').toggle();
		$(this).toggleClass('active');
	}
	ruleScroll.refresh();
});

$( document ).on('tapend','.dropdownBox',function(event){
	event.stopPropagation();
});

//change values on rule description
$(document).on('keyup','.rule input[type=tel]',function(){
		
		$(this).parent().parent().parent().parent().parent().find($(this).attr('field')).html($(this).val());
		$(this).parent().parent().find('input[type=tel]').each(function(){
			addRuleChange($(this).parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).siblings('h4').text(),$(this).val() == null || $(this).val() == "" ? $(this).attr("placeholder")  : $(this).val() );
			var change = $(this).siblings('h4').text().toLowerCase();
			$(this).parent().parent().parent().siblings("p").children(change).text($(this).val());
		});
		
		$(this).parent().parent().find('.SelectStyle').each(function(){
			addRuleChange($(this).parent().attr('id').replace(/rule_(\S+)/,"$1"),'idTime',$(this).find('option:selected').val());
		});
		if(!$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked')){
				var rId =  $(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').parent().parent().attr('id').replace(/rule_(\S+)/,"$1");
				addRuleStatusChange(rId);	
				
			}
		
		$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
});

$(document).on('change','.SelectStyle',function(){
		$(this).parent().parent().parent().parent().parent().parent().find('idTime').html($(this).find('option:selected').html());
		$(this).css({"color" : "#1A73B6"});
		$(this).parent().parent().find('input[type=tel]').each(function(){
			addRuleChange($(this).parent().attr('id').replace(/rule_(\S+)/,"$1"),$(this).attr('field'),$(this).val() == null || $(this).val() == "" ?    $(this).attr("placeholder") : $(this).val());				
			var change = $(this).siblings('h4').text().toLowerCase();
			$(this).parent().parent().parent().siblings("p").children(change).text($(this).val());
		});
		addRuleChange($(this).parent().attr('id').replace(/rule_(\S+)/,"$1"),'idTime',$(this).find('option:selected').val());
			var change = $(this).siblings('h4').text().toLowerCase();
			$(this).parent().parent().parent().siblings("p").children(change).text($(this).find('option:selected').text());
			
			if(!$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked')){
				
				var rId =  $(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').parent().parent().attr('id').replace(/rule_(\S+)/,"$1");
				
				addRuleStatusChange(rId);	
				
			}
		$(this).parent().parent().parent().parent().parent().find('input[type=checkbox]').attr('checked','true');
		
	});


//active rule
$( document ).on("tapend",'input.toggle + label',function(e){
		e.stopPropagation();
		var rId = $(this).parent().parent().attr('id').replace(/rule_(\S+)/,"$1");
		console.log(rId);
		
		
		addRuleStatusChange(rId);				

	//return tmp_ruleChange;
		
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