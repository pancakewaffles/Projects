var y=0
settingspanel=new Ext.Panel({
													id:'settingspanel',
													cls:'settingspanel',
													layout:'card',
													
	   
													html:'<div id="iconlogo">iAegis</div><div id="logotext">An educational, self-fulfilling game!<br /><span id="copyrighttext">Copyright 2011 iAegis</span><center><div id="aboutus"></div><div id="invite"></div></center></div><div id="facebooklogin" ><a href="https://www.facebook.com/dialog/oauth?client_id=110921289002104&redirect_uri=http://iaegis.dhs.sg&scope=user_status,publish_stream,read_stream&display=touch&response_type=token">Connect with Facebook</a></div>',
													listeners:{
														afterrender:function(){
															new Ext.Button({
																		  text:'About Us',
																		  cls:'aboutus',
																		  renderTo:document.getElementById('aboutus'),
																		  handler:function(){
																			  if(y==0){
																				  y=1
																			  var Panel=new Ext.Panel({
																								   id:'AboutUs',
																								   cls:'aboutuspanel',
																																floating:true,
																																modal:true,
																																centered:true,
																																scroll:true,
																																height:340,
																			   												    width:270,				
																																html:'<center><span id="textdot"><p>An app done by:</p><p><strong>Tan Chuan (3M)</strong></p><p><strong>Quek Wen Qian (2B)</strong></p><p><strong>McCoy Lim Wei (2F)</strong></p><p>from Dunman High School.</p></span><img src="img/unglam.jpg" width="205" height="205" /></center><button style="background-color:transparent;border-color:red;width:70px;height:85px;position:absolute;left:45px;top:160px" onClick=javascript:goto("tc")></button><button style="background-color:transparent;border-color:green;width:70px;height:85px;position:absolute;left:110px;top:140px" onClick=javascript:goto("mc")></button><button style="background-color:transparent;border-color:yellow;width:70px;height:85px;position:absolute;left:160px;top:160px" onClick=javascript:goto("wq")></button>'
																																
																																})
																			 
																			  
																			  Ext.getCmp('AboutUs').show()
																			  }else{
																				  document.getElementById('textdot').innerHTML='<p>An app done by:</p><p><strong>Tan Chuan (3M)</strong></p><p><strong>Quek Wen Qian (2B)</strong></p><p><strong>McCoy Lim Wei (2F)</strong></p><p>from Dunman High School.</p>'
																				  Ext.getCmp('AboutUs').show()
																			  }
																			  
																			  
																		  }
																		  })
															new Ext.Button({
																		   text:'Invite!',
																		   cls:'invite',
																		   renderTo:document.getElementById('invite'),
																		   handler:function(){
																			   window.location="mailto:?subject=iAegis&body=Try out the new iAegis game! It's terribly fun!"
																		   }
																		   })
																		   
														}
													}
													
														   
														   
													})



									  