
			//Menu - Demo Button
	$( document ).on("tapend",'#demoButton',function(){
	$(".imglogo").trigger("tapend");		
	$('#demo1').css("visibility","visible");
	$('#demo1 .NextBtn').css('visibility','visible');
	onDemo=true;
	});
	
	$( document ).on("tapend",'.close',function(){
		
		location.reload();
		
	});
	
	
		$( document ).on("tapend",'#navv1',function(){
			
			$('#demo6 .NextBtn').trigger("tapend");
		
		});
				$( document ).on("tapend",'#navv2',function(){$('#demo7 .NextBtn').trigger("tapend");});
						$( document ).on("tapend",'#navv3',function(){$('#demo8 .NextBtn').trigger("tapend");});
								$( document ).on("tapend",'#navv4',function(){$('#demo9 .NextBtn').trigger("tapend");});
							//			$( document ).on("tapend",'#navv5',function(){$('#demo10 .NextBtn').trigger("tapend");});
	
/* 		$( document ).on("tapend",'#backButtonDemo',function(){

		if(true){$('#demo27 .NextBtn').trigger("tapend");}

}); */
	
	
	
		$( document ).on("taphold",'#demo3 .containerIconCircle',function(){
			
			$('#demo3 .NextBtn').css('visibility','visible');
			$("#type3").trigger("taphold");
			$('.demoAprrizApp').css('background','none');
			
		});
		$( document ).on("tapend",'#demo4 .containerIconCircle',function(){
			
			$('#demo4 .NextBtn').css('visibility','visible');
			$("#type3").trigger("tapend");
			
		});
		
		$( document ).on("tapend",'#demo5 .containerIconCircle',function(){
			
			$('#demo5 .NextBtn').css('visibility','visible');
			$("#type3").trigger("tapend");
				
			
		});
	
			
		$( document ).on("tapend",'#demo6 .containerIconCircle',function(){
				$("#type1").trigger("tapend");
			$('#demo6 .NextBtn').css('visibility','visible');
		
			
		});
		
			$( document ).on("tapend",'#demo7 .containerIconCircle',function(){
				$("#type2").trigger("tapend");
			$('#demo7 .NextBtn').css('visibility','visible');
		
			
		});
		
				$( document ).on("tapend",'#demo8 .containerIconCircle',function(){
				$("#type3").trigger("tapend");
			$('#demo8 .NextBtn').css('visibility','visible');
		
			
		});
			
			
			$( document ).on("tapend",'#demo9 .containerIconCircle',function(){
			$("#type4").trigger("tapend");
			$('#demo9 .NextBtn').css('visibility','visible');
		
			
		});
		
				$( document ).on("tapend",'#demo10 .containerIconCircle',function(){
			$("#type5").trigger("tapend");
			$('#demo10 .NextBtn').css('visibility','visible');
		
			
		});
		
		/* 			$( document ).on("tapend",'#demo22 containerMenu2',function(){
			$("#mainOptions").trigger("tapend");
		
			
		$('#demo22 .NextBtn').css('visibility','visible');
		
			
		}); */
		
		
				
		
			//Next demo Buttton
			
			$( document ).on("tapend",'.NextBtn',function(){
		
		 		switch($(this).parent().parent().parent().prop('id')) 
				{
					case 'demo1':
							
							$('#demo1').css("visibility","hidden");
							$('#demo2').css("visibility","visible");
							$('#demo1 .NextBtn').css('visibility','hidden');
							$('#demo2 .NextBtn').css('visibility','visible');
							
						break;
					 case 'demo2':
						
							$('#demo2 .NextBtn').css('visibility','hidden');
							$('#demo2').css("visibility","hidden");
							$('#demo3').css("visibility","visible");
							$(".fullWrapper").css("zIndex", "1");
							$(".fullWrapper").css("opacity", "1");
						break;
						
						case 'demo3':
							$('#demo3 .NextBtn').css('visibility','hidden');
							$('#demo3').css("visibility","hidden");
							$('#demo4').css("visibility","visible");
						break;
						case 'demo4':
							$('#demo4 .NextBtn').css('visibility','hidden');
							$('#demo4').css("visibility","hidden");
							$('#demo5').css("visibility","visible");
						break;
						case 'demo5':
							$('#demo5 .NextBtn').css('visibility','hidden');
							$('#demo5').css("visibility","hidden");
							$('#demo6').css("visibility","visible");
								$('.demoAprrizApp').css('background','black');	
						break;
						case 'demo6':
							$('#demo6 .NextBtn').css('visibility','hidden');
							$('#demo6').css("visibility","hidden");
							$('#demo7').css("visibility","visible");
							
							
						break;
					 	case 'demo7':
						$('#demo7 .NextBtn').css('visibility','hidden');
						$('#demo7').css("visibility","hidden");
							$('#demo8').css("visibility","visible");
					
						break; 
						case 'demo8':
						$('#demo8 .NextBtn').css('visibility','hidden');
							$('#demo8').css("visibility","hidden");
							$('#demo9').css("visibility","visible");
						break;
						case 'demo9':
						$('#demo9 .NextBtn').css('visibility','hidden');
						$('#demo9').css("visibility","hidden");
							$('#demo10').css("visibility","visible");
						break;
						case 'demo10':
						
							
							$('#demo5 .NextBtn').css('visibility','hidden');
							$('#demo6 .NextBtn').css('visibility','hidden');
							$('#demo7 .NextBtn').css('visibility','hidden');
							$('#demo8 .NextBtn').css('visibility','hidden');
							$('#demo9 .NextBtn').css('visibility','hidden');
							$('#demo10 .NextBtn').css('visibility','hidden');
							$('#demo10').css('visibility','hidden');
							$('#demo11').css("visibility","visible");
						//	$('#demo11 .NextBtn').css('visibility','visible');
			
					
						break;
						case 'demo11s':
							$('#demo11 .NextBtn').css('visibility','hidden');
							$('#demo11').css("visibility","hidden");
							$('#demo12').css("visibility","visible");
						
						break;
						case 'demo12s':
							$('#demo12 .NextBtn').css('visibility','hidden');
							$('#demo12').css("visibility","hidden");
							$('#demo13').css("visibility","visible");
						break; 
						case 'demo13s':
							$('#demo13 .NextBtn').css('visibility','hidden');
							$('#demo13').css("visibility","hidden");
							$('#demo14').css("visibility","visible");
							$('#demo14 .NextBtn').css('visibility','visible');
						break; 
						
							case 'demo14s':
							$('#demo14 .NextBtn').css('visibility','hidden');
							$('#demo14').css("visibility","hidden");
							$('#demo15').css("visibility","visible");
									$('.demoAprrizApp').css('background','none');	
						break;
						
							case 'demo15s':
							$('#demo15 .NextBtn').css('visibility','hidden');
							$('#demo15').css("visibility","hidden");
							$('#demo16').css("visibility","visible");
							$('#demo16 .NextBtn').css('visibility','visible');
						break;
						
								case 'demo16s':
							$('#demo16 .NextBtn').css('visibility','hidden');
							$('#demo16').css("visibility","hidden");
							$('#demo17').css("visibility","visible");
							$('#demo17 .NextBtn').css('visibility','visible');
						break;
						
						
								case 'demo17s':
							$('#demo17 .NextBtn').css('visibility','hidden');
							$('#demo17').css("visibility","hidden");
							$('#demo18').css("visibility","visible");
							$('#demo18 .NextBtn').css('visibility','visible');
						break;
						
								case 'demo18s':
							$('#demo18 .NextBtn').css('visibility','hidden');
							$('#demo18').css("visibility","hidden");
							$('#demo19').css("visibility","visible");
							$('#demo19 .NextBtn').css('visibility','visible');
						break;
						
								case 'demo19s':
							$('#demo19 .NextBtn').css('visibility','hidden');
							$('#demo19').css("visibility","hidden");
							$('#demo20').css("visibility","visible");
							$('#demo20 .NextBtn').css('visibility','visible');
							   	$('#dem20').css("zIndex","100000");
					
						break;
						
							case 'demo20s':
							$('#demo20 .NextBtn').css('visibility','hidden');
							$('#demo20').css("visibility","hidden");
							$('#demo21').css("visibility","visible");
							//$('#demo21 .NextBtn').css('visibility','visible');
							$('.demoAprrizApp').css('background','black');	
							
						break;
						
						case 'demo21s':
							$('#demo21 .NextBtn').css('visibility','hidden');
							$('#demo21').css("visibility","hidden");
							$('#demo22').css("visibility","visible");
							$('#demo22 .NextBtn').css('visibility','visible');
						//	$(".menu-main , .icon-menu").trigger("tapend");
						
					
						break;
						
							case 'demo22s':
							$('#demo22 .NextBtn').css('visibility','hidden');
							$('#demo22').css("visibility","hidden");
							$('#demo23').css("visibility","visible");
							$('#demo23 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo23s':
							$('#demo23 .NextBtn').css('visibility','hidden');
							$('#demo23').css("visibility","hidden");
							$('#demo24').css("visibility","visible");
						//	$('#demo24 .NextBtn').css('visibility','visible');
							$('#alertB').trigger("tapend");
					
						break;
						
						
							case 'demo24s':
							$('#demo24 .NextBtn').css('visibility','hidden');
							$('#demo24').css("visibility","hidden");
							$('#demo25').css("visibility","visible");
							//$('#demo25 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo25s':
							$('#demo25 .NextBtn').css('visibility','hidden');
							$('#demo25').css("visibility","hidden");
							$('#demo26').css("visibility","visible");
							$('#demo26 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo26s':
							$('#demo26 .NextBtn').css('visibility','hidden');
							$('#demo26').css("visibility","hidden");
							$('#demo27').css("visibility","visible");
						//	$('#demo27 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo27s':
							$('#demo27 .NextBtn').css('visibility','hidden');
							$('#demo27').css("visibility","hidden");
							$('#demo28').css("visibility","visible");
							$('#demo28 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo28':
							$('#demo28 .NextBtn').css('visibility','hidden');
							$('#demo28').css("visibility","hidden");
							$('#demo29').css("visibility","visible");
							$('#demo29 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo29s':
							$('#demo29 .NextBtn').css('visibility','hidden');
							$('#demo29').css("visibility","hidden");
							$('#demo30').css("visibility","visible");
							$('#demo30 .NextBtn').css('visibility','visible');
					$(".menu-main , .icon-menu").trigger("tapend");
						break;
						
							case 'demo30s':
							$('#demo30 .NextBtn').css('visibility','hidden');
							$('#demo30').css("visibility","hidden");
							$('#demo31').css("visibility","visible");
							$('#demo31 .NextBtn').css('visibility','visible');
					
						break;
						
							case 'demo31s':
							$('#demo31 .NextBtn').css('visibility','hidden');
							$('#demo31').css("visibility","hidden");
						$(".imglogo").trigger("tapend");
					
						break;
						
					default:
						
								} 
				
			});
			

