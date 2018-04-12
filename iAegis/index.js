new Ext.Application({
					fullscreen:Ext.is.iPhone,
					delay:10000,
					launch:function(){
	
						//Game//
						var deviceIphone = "iphone";
                                              var deviceIpod = "ipod";
                                              var uagent = navigator.userAgent.toLowerCase();
						var x=0
						var browser
						var catch_rate
						var havebytes
						var rank
						var experience
						var updates
						var upgrades
						var rankimg
						var rankmessage
						var daynight
						var date
						var upgradeno=2
						var updateno=0
						//Travel//
						var location
						
						//Facebook//
						
						
			Ext.Ajax.request({
             url: 'json/user_data.js',
            params: {
                format: 'json',
            },
			method:'GET',	
            success:function(data){
				 var person=Ext.util.JSON.decode(data.responseText)
				 if(rsvp){
					 alert('You have successfully logged in into Facebook!')
					
					 if(Ext.Element.getViewportHeight()!=460 && Ext.Element.getViewportWidth()!=320 ){
						 
						 if(uagent.search(deviceIphone) > -1 || uagent.search(deviceIpod) > -1 || navigator.userAgent.match(/iPad/i) != null){  //If it is an iPhone, iPad, or iPod
												  					  
						 }else{
							 window.location="javascript:open(location,'iPhone:portrait','innerWidth='+(320)+',innerHeight='+(460)+',');"
							 browser='chrome'
							 
							 
						 }
  
											  }
											  
				  for(i=0;i<=person.users.length;i++){  
				 
				 if(person.users[i].name && person.users[i].name==rsvp){
					
					 location=person.users[i].location
					 havebytes=person.users[i].bytes
					 rank=person.users[i].rank
					 experience=person.users[i].experience
					 updates=person.users[i].updates
					 upgrades=person.users[i].upgrades
				 }else if(i==person.users.length && !person.users[i]){ 
						 person.users.push({"name":rsvp,"rank":"Clueless","location":"HQ","bytes":2000,"experience":2500,"updates":1,"upgrades":0})
						 location="HQ"
						 havebytes=2000
						 experience=2500
						 updates=1
						 upgrades=0
						 rank="Clueless"
					 Ext.Ajax.request({
                       method : "POST",
                       url : "json/json.php",
                       params : {
						   json:Ext.encode(person)
   								 },
						success:function(result){
								alert(result.responseText)
								
										   
								},
						failure:function(){
								alert('fail')
							}
						})
												}
				 
																		}
				 }else{
					 //When rsvp is undefined
					
				 	alert('Please log in into Facebook!')
				 }
	 				 
				 
				  
				 
				  },
			failure:function(){
				alert('Error in collecting data. Pls log in into facebook.')
			}
        })
			
						
				function setdaynight(){  
				  date=new Date()
				  date=date.getHours()
				  if(date==00 || date==01 || date==04 || date==05 || date==08 || date==09 || date==12 || date==13 || date==16 || date==17 || date==20 || date==21){
					  if(hackersint){
					  clearInterval(hackersint)
					  }
					  daynight='DAY'
					  Ext.getCmp('daynight').setText('Day')
					  
				  }
				  if(date==02 || date==03 || date==06 || date==07 || date==10 || date==11 || date==14 || date==15 || date==18 || date==19 || date==22 || date==23){
					  daynight='NIGHT'
					  Ext.getCmp('daynight').setText('Night')
					  var hackersint=setInterval(function(){hackers()},12000)
					  
				  }
				}
				function hackers(){
				if(rank!='Clueless'){
				i=Math.floor(Math.random()*10+1)
				if(updates>4){
					i=Math.floor(Math.random()*10+1)
				}
				if(updates>9){
					i=Math.floor(Math.random()*10+1)
				}
				if(upgrades>1){
					i=Math.floor(Math.random()*8+1)
				}
				if(i>7){
					lostexp=Math.floor(Math.random()*1000+200)
					lostbytes=Math.floor(Math.random()*1000+250)
					panelhacker=new Ext.Panel({
											  modal:true,
											  floating:true,
											  centered:true,
											  scroll:true,
											  height:290,
											  width:210,
											  html:'<center><b>You just got hit by a hacker attack!</b></center><p>You lost '+lostexp+' exp points and lose '+lostbytes+' bytes. Be more careful next time!</p>'
											  })
					panelhacker.show('pop')
					experience-=lostexp
					havebytes-=lostbytes
					Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
				}
				}
					}
						
				  
				  
				  
				  
						loginpanel=new Ext.Panel({
									   cls:'loginpanel',
									   id:'loginpanel',
									   layout:'card',
									   
									  items:[
											   
											   new Ext.form.Slider({
																   id:'slider',
											  cls:'slider',
											  renderTo:document.getElementById('slider'),
											  value:0,
											  minValue:0,
											  maxValue:10,
											  animate: 5,
											  height:30,
											  width:Ext.Element.getViewportWidth()-20,
											  listeners:{
												  dragend:function(slider, thumb, value){
													  if(slider.getValue()<10){
														  slider.setValue(0)
													  }else if(slider.getValue()==10){
														  if(rsvp){
												          Ext.getCmp('loginpanel').setLoading('true','true')
												  
														  Ext.getCmp('masterpanel').setActiveItem(1,'slide')
														  setTimeout(Ext.getCmp('loginpanel').setLoading('false'),3000)
														   setInterval(setdaynight(),900000)
														   
														  }else{
															  alert('Some features may be disabled if you do not login.')
															  Ext.getCmp('loginpanel').setLoading('true','true')
												  
														  Ext.getCmp('masterpanel').setActiveItem(1,'slide')
														  setTimeout(Ext.getCmp('loginpanel').setLoading('false'),3000)
															   setInterval(setdaynight(),900000)
														  }
													  }
												  }
											  }
											})
										   
									   ],
									  listeners:{
										  afterrender:function(){
											  var deviceIphone = "iphone";
                                              var deviceIpod = "ipod";
                                              var uagent = navigator.userAgent.toLowerCase();
										  
										   
											  
										   if(Ext.Element.getViewportHeight()==460 && Ext.Element.getViewportWidth()==320){               //If it is Chrome, Iphone/iPod
											  if(uagent.search(deviceIphone) == -1 && uagent.search(deviceIpod) == -1){                   //If it is Chrome
												  browser='chrome'
												 
											  }
  
											  }
											  else if(Ext.Element.getViewportHeight()==1004 && Ext.Element.getViewportWidth()==768){ //if it is an iPad in Homescreen mode
												  
											  }
										     else if(uagent.search(deviceIphone) > -1 || uagent.search(deviceIpod) > -1 || navigator.userAgent.match(/iPad/i)!= null){//if it is iphone, ipad or ipod
												 
											  if(Ext.Element.getViewportHeight()<460 || Ext.Element.getViewportWidth()>320){ //if they are in safari mode
											  new Ext.Panel({
															id:'OTLtext',
															cls:'OTLtext',
															html:'Please do a One-Time Login to Facebook!<p><i>Then save it to your iPhone homescreen to install the app.</i></p>',
															renderTo:document.getElementById('slider')
															})
											  loginpanel.remove(Ext.getCmp('slider'))
											  document.getElementById('slidetext').innerHTML=''
											  loginpanel.doLayout()
										  }
										  }else{
											  
											 
											 new Ext.Panel({
															id:'OTLtext',
															cls:'OTLtext',
															html:'Our app was intended for iPhones.<p><i>If you wish, you may access the app using the Google Chrome browser. But first, log in with Facebook!</i></p>',
															renderTo:document.getElementById('slider')
															})
											  loginpanel.remove(Ext.getCmp('slider'))
											  document.getElementById('slidetext').innerHTML=''
											  loginpanel.doLayout() 
										  }
									  }
									  },
									  
									  html:'<p><div id="iconlogo">iAegis</div><div id="facebooklogin" ></p><p><a href="https://www.facebook.com/dialog/oauth?client_id=110921289002104&redirect_uri=http://iaegis.dhs.sg&scope=user_status,publish_stream,read_stream&display=touch&response_type=token">Connect with Facebook</a></div></p><p id="slidetext">Slide to Enter</p><div id="slider"></div>'
									   })
						
						var maingamepanel=new Ext.Panel({
													   layout:'card',
													   id:'maingamepanel',
													   cls:'maingamepanel',
													   baseCls:'maingamepanel',
													   dockedItems:[
																	new Ext.Toolbar({
																			  id:'locationbar',
																			  dock:'top',
																			  title:'HQ',
																			  ui:'iaegisblack',
																			  items:[
																					 new Ext.Button({
																									text:'Stats',
																									handler:function(){
																										
																										if(upgrades>1){
																											upgradeno+=upgrades
																										}
																										if(updates>1){
																											updateno+=updates
																										}
																										
																										if(rank=='Clueless'){
																											rankmessage='What’s a firewall? What’s an antivirus software? Why can’t my computer start?'
																											rankimg='rankimg/Clueless.png'
																											
																										}
																										if(rank=='Virus Veteran'){
																											rankmessage='I redefined the term “target of viruses”.'
																											rankimg='rankimg/Virus_Veteran.png'
																											
																										} 
																										if(rank=='Blue Screen Boss'){
																											rankmessage='The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.'
																											rankimg='rankimg/Blue_Screen_Boss.png'
																											
																										} 
																										if(rank=='Virus Prone'){
																											rankmessage='I’m a target of viruses.'
																											rankimg='rankimg/Virus_Prone.png'
																											
																										} 
																										if(rank=='Secured'){
																											rankmessage='Secured, but still prone to viruses.'
																											rankimg='rankimg/Secured.png'
																											
																										} 
																										if(rank=='Secured Scammer'){
																											rankmessage='I fool viruses. You can’t fool me.'
																											rankimg='rankimg/Secured_Scammer.png'
																											
																										} 
																										if(rank=='Secured Smasher'){
																											rankmessage='i.Smash Viruses.'
																											rankimg='rankimg/Secured_Smasher.png'
																											
																										} 
																										if(rank=='Secured Slasher'){
																											rankmessage='Thy will cut thou viruses down!'
																											rankimg='rankimg/Secured_Slasher.png'
																											
																										} if(rank=='Security Sentinel'){
																											rankmessage='No virus can stand in my way.'
																											rankimg='rankimg/Security_Sentinel.png'
																											
																										}
																										
																										panel2=new Ext.Panel({
																															cls:'statspanel',
																													  floating:true,
																													  modal:true,
																													  centered:true,
																													  scroll:true,
																													  overflow:scroll,
																													  height:250,
																													  width:260,
																													  html:'You are logged in as:<center><p><i>'+rsvp+'</i></p></center><br /><center><img src='+rankimg+' /></center><br />Rank: <b>'+rank+'</b>,<i>'+rankmessage+'</i><br />Bytes: <p style="color:green">'+havebytes+'</p><br />Location: '+location+'<br />Exp: <p style="color:blue">'+experience+'</p><br />System Version: <p style="color:grey">'+upgradeno+'.'+updateno+'</p>',
																													  dockedItems:[
																																   new Ext.Button({
																																				  dock:'bottom',
																																				  ui:'iaegisbutton',
																																				  text:'Share on Facebook!',
																																				  handler:function(){
																																					  alert('This will bring you out of our webapp-game! Do remember to visit this app again!')
																																					  window.location = "http://www.facebook.com/dialog/feed?app_id=110921289002104&link=http://iaegis.dhs.sg&picture=http://icode.dhs.sg/dhshub/iAegis/"+rankimg+"&name=iAegis%20Webapp%20Game&caption=A%20fun%20filled%20educational%20game!&description=I%20have%20attained%20Rank:%20"+rank+"%20in%20iAegis!%20Come%20join%20me!&redirect_uri=http://iaegis.dhs.sg&display=touch"
																																				  }
																																				  })
																																   ]
																													  })
																										panel2.show()
																									}
																									}),
																					 {
																						 xtype:'spacer',
																					 },
																					 new Ext.Button({
																									id:'daynight',
																									text:"Time",
																									handler:function(){
																										panel3=new Ext.Panel({
																															centered:true,
																															modal:true,
																															floating:true,
																															height:260,
																															width:260,
																															scroll:true,
																															html:'<center>It is <b><i>'+daynight+'</i></b> now!</center><p>Each day(24 hrs) is made of 4 hours in the real world. When it is <b>DAY</b>, there are lesser hackers working and you lose less exp and bytes.</p><p>However, when it is <b>NIGHT</b>, and when you have very few updates, there are more hackers working and you might lose a lot of exp and bytes. So be careful! When it is undefined, it means you need to play it from your iPhone homescreen.</p>'
																															})
																										panel3.show('pop')
																									}
																									})
																					 ],
																			  listeners:{
																				  afterrender:function(){
																					  if(location){
																						  
																						  if(location=='Asia'){
																							  Ext.getCmp('locationbar').setTitle('Asia')
																							  catch_rate=30
																							  
																						  }else if(location=='Africa'){
																							  Ext.getCmp('locationbar').setTitle('Africa')
																							  catch_rate=25
																							  
																						  }else if(location=='HQ'){
																							  Ext.getCmp('locationbar').setTitle('HQ')
																							  
																							  catch_rate=0
	  
																							  
																						  }else if(location=='Europe'){
																							  Ext.getCmp('locationbar').setTitle('Europe')
																							  catch_rate=20
																							  
																						  }else if(location=='POK'){
																							  Ext.getCmp('locationbar').setTitle('Kings')
																							  catch_rate=20
																							  
																						  }else if(location=='MOH'){
																							  Ext.getCmp('locationbar').setTitle('Heaven')
																							  catch_rate=20
																							  
																						  }else if(location=='Russia'){
																							  Ext.getCmp('locationbar').setTitle('Russia')
																							  catch_rate=45
																						  }else if(location=='US'){
																							  Ext.getCmp('locationbar').setTitle('USA')
																							  catch_rate=40
																						  }
																						  
																					  }
																					  
																					  
																				  }
																			  }
																			  
																			  }),
																	
																	],
													   
													   html:'<div id="buttons"></div><br /><br /><div id="buttonlearn"></div><div id="updatebutton"></div><div id="buttons2"></div><div id="parry"><img class="parry" src="Pencil.png"></img></div><div class="triangle-right"><span id="contentspeech">Welcome to iAegis! You are an agent of Aegis, a powerful security company aimed to destroy all viruses. I am Parry the Pencil! There are no viruses in the HQ so you need to travel. </span></div><div id="buttonhelp"></div>',
													   listeners:{
														   delay:3500,
														   afterrender:function(){
															   
															   if(location){
																   
																						  
																						  if(location=='Asia'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgasia.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='Welcome to Asia, a place culturally known for its wonderful dishes and history. Now, it is a plague of virus breeding land. Go catch some viruses!'
																							  
																						  }else if(location=='Africa'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgafrica.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='There are not much malware here though. Phew! Its definitely very hot in here!'
																							  
																						  }else if(location=='HQ'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bghq.jpg)'})
																							 document.getElementById('contentspeech').innerHTML='Welcome to iAegis! You are an agent of Aegis, a powerful security company aimed to destroy all viruses. I am Parry the Pencil! There are no viruses in the HQ so you need to travel.'
	  
																							  
																						  }else if(location=='Europe'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgeurope.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='Whoo! We are in Europe! Europe is classy and historical, and the best thing is, it has lots of malware too!'
																							  
																						  }else if(location=='POK'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgpok.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='Brrrr....Its very cold in here! I wonder what the malware did to it. Anyway, I heard there are three legendaries to be caught!'
																							  
																						  }else if(location=='MOH'){
																							  Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgmoh.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='Mandate of Heaven, a really nice place until you find that you can be quite lonely here!'
																							  
																						  }else if(location=='Russia'){
																							 Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgrussia.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='Wow! We have ventured across the world to get to Russia, one of the most abundant sources of viruses and malware!'
																						  }
																						  else if(location=='US'){
																							 Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgusa.jpg)'})
																							  document.getElementById('contentspeech').innerHTML='US--A! I have always wanted to visit this place, so full of viruses and trojans to kill oops, I mean quarantine. Word is there is a Master R-Virus controlling them.'
																						  }
																					  }
															   	
															   
															   
																   
																   new Ext.Button({
																				  
																				  cls:'button_learn',
																				  id:'button_learn',
																				  renderTo:document.getElementById('buttonlearn'),
																				  listeners:{
																				 afterrender:function(){
																					 Ext.get('button_learn').applyStyles({'background-image':'url(img/learnicon.png)','background-position':'center'})
																					 new Ext.Panel({
																								   html:'<p id="plearn">Learn</p>',
																								   renderTo:document.getElementById('buttonlearn')
																								   })
																				 }
																			 },
																				  handler:function(){
																					  Ext.getCmp('masterpanel').setActiveItem(4,'fade')
																				  }
																				  })
																   
															   
															   new Ext.Button({
																			 cls:'button_travel',
																			 id:'button_travel',
																			 renderTo:document.getElementById('buttons'),
																			 listeners:{
																				 afterrender:function(){
																					 Ext.get('button_travel').applyStyles({'background-image':'url(img/travelicon.png)','background-position':'center'})
																					 new Ext.Panel({
																								   html:'<p id="ptravel">Travel</p>',
																								   renderTo:document.getElementById('buttons')
																								   })
																				 }
																			 },
																			 handler:function(){
																				 Ext.getCmp('masterpanel').setActiveItem(2,'slide')
																				 
																				 if(browser=='chrome'){
																					 document.getElementById('asia').style.top='375px';
																					 
																					 document.getElementById('africa').style.top='450px';
																					 
																					 document.getElementById('europe').style.top='270px';
																					 document.getElementById('europe').style.left='705px';
																					 
																					 document.getElementById('POK').style.top='125px';
																					 
																					 document.getElementById('MOH').style.top='650px';
																					 
																					 document.getElementById('HQ').style.top='500px';
																					 
																					 document.getElementById('Russia').style.top='245px';
																					 document.getElementById('Russia').style.left='900px';
																					 
																					 document.getElementById('USA').style.top='250px';
																				 }
																				 
																			 }
																			 }),
																	new Ext.Button({
																				   
																				   cls:'button_catch',
																				   id:'button_catch',
																				   renderTo:document.getElementById('buttons'),
																				   listeners:{
																				 afterrender:function(){
																					 Ext.get('button_catch').applyStyles({'background-image':'url(img/catchicon.png)','background-position':'center'})
																					 new Ext.Panel({
																								   html:'<p id="pcatch">Catch</p>',
																								   renderTo:document.getElementById('buttons')
																								   })
																				 }
																			 },
																				   handler:function(){
																					   Ext.getCmp('masterpanel').setActiveItem(3,'fade')
																					   
																				   }
																				   
																				   })
																	new Ext.Button({
																				   
																				   cls:'button_update',
																				   id:'button_update',
																				   renderTo:document.getElementById('updatebutton'),
																				   listeners:{
																				 afterrender:function(){
																					 Ext.get('button_update').applyStyles({'background-image':'url(img/updateicon.png)','background-position':'center'})
																					 new Ext.Panel({
																								   html:'<p id="pupdate">Updater</p>',
																								   renderTo:document.getElementById('updatebutton')
																								   })
																				 }
																			 },
																				   handler:function(){
																					   Ext.getCmp('masterpanel').setActiveItem(7,{type:'slide',direction:'up'})
																				   }
																				   })
																	new Ext.Button({
																				   cls:'button_help',
																				   id:'button_help',
																				   text:'Guide',
																				   renderTo:document.getElementById('buttonhelp'),
																				   handler:function(){
																					 panelhelp=new Ext.Sheet({
																											     modal: true,
    centered : false,
    hideOnMaskTap : true,
    
    
    layout: 'fit',
    enter: 'left',
    exit: 'left',
	width:270,
	stretchY:true,
	items:[
		   new Ext.Carousel({
							scroll:true,
																																	 
																											 		 items:[
																																			
{
																																				id:'1st Page',
																																				html:'<b><center>The Origins</center></b><p>How did the name "iAegis" come about? Well if you searched the word "security" on thesaurus.com, you can see that "aegis" is a synonym of the term. That means that they have a similar meaning. The letter "i" is added in front to better convey the message that our app is directed at users who are constantly using the internet and at risk of being a victim of cyber-related problems.</p>'
																																			},	
																																			{
																																				id:'2nd Page',
																																				html:'<b><center>Storyline</center></b><p><font size=4>In iAegis, you are an agent of Aegis, a security suite that is determined to vanquish all viruses and malware. The Earth has since been infected with a lot of viruses and people are not being educated on cybersecurity and wellness, hence it is your job to catch those viruses and convey the message of cybersecurity and wellness. Rumour has it that there are many legendary viruses/trojans to be caught, so make sure to keep an eye on them!</font></p>'
																																			},
																																			{
																																				id:'3rd Page',
																																				html:'<b><center>Navigation</center></b><p>To open "The Console" for navigation between the game and settings, tap and hold the screen and it will open. Similarly, "The Console" will close after you tap and hold the screen.</p>'
																																			},
																																			{
																																				id:'4th Page',
																																				html:'<b><center>Catch</center></b><p>To catch a virus, simply go to "Catch" and tap anywhere around the white area! You may even find a Tip or Fact at times to expand your knowledge of cyberwellness and advance in your game rank. There are no viruses in the HQ though, since it is where beginners start out and we run virus check regularly to ensure that beginners do not get infected.</p>'
																																			},
																																			{
																																				id:'5th Page',
																																				
																																				html:'<b><center>Ranks and Updates/Upgrades</center></b><p>There are 9 types of rank to be attained.</p><b><i>-Security Sentinel<br />-Secured Slasher<br />-Secured Smasher<br />-Secured Scammer<br />-Secured<br />-Virus Prone<br />-Blue Screen Boss<br />-Virus Veteran<br />-Clueless</i></b><p>With a new Updater, players can install updates and upgrades to boost their catch rate. Also, it may deter them from hacker attacks!</p>'
																																			},
																																			
{
																																				id:'6th Page',
																																				
																																				html:'<b><center>Meet the Viruses</center></b><p>There are many types of viruses which you can quarantine in iAegis. They are:</p><b><i>-Clueless Virus<br />-Maximum Loophole Virus<br />-Bypass All In One Virus<br />-Easy-to-Catch Virus<br />-Hard-to-Catch Virus<br />-Basic Virus<br />-Russian Banking Virus<br />-April Fools Virus<br />-2000 Turn of a Century Virus<br />-Master R Virus</i></b><p><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v3pink.png"></img><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v2orange.png"></img><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v1blue.png"></img></p>'
																																			},
																																			
{
																																				id:'7th Page',
																																				
																																				html:'<b><center>Meet the Trojans</center></b><p>There are many types of trojans which you can quarantine in iAegis. They are:</p><b><i>-Infamous Trojan Horse<br />-Magnificient Trojan that infects computers to death<br />-Liberating Trojan<br />-Indigenious Trojan<br />-Squeaking Trojan<br />-Magnifying Glass of Trojans<br />-Stepping Stones<br />-Baby Step<br />-Trojan of Horror<br />-The Ultimate Trojan Horse</i></b><p><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v3pink.png"></img><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v2orange.png"></img><img src="http://icode.dhs.sg/dhshub/iAegis/graphics/Viruses/v1blue.png"></img></p>'
																																			},																																																																						
																																			
{
																																				id:'8th Page',
																																				html:'<b><center>Facebook</center></b><p>Once you have connected to Facebook, you do not need to do so again unless you want to switch accounts. We respect your privacy and have no access to your Facebook account and its confidential information.</p><p>Without connecting to Facebook, your game progress will not be saved and certain functions (such as ranking, profiles and time) will not work.</p>'
																																			},
	
{
																																				id:'9th Page',
																																				html:'<b><center>Day/Night System</center></b><p>With our unique day and night system, we simulate the doings of every day. For example, in the day, there are lesser hackers working and there are less occurences of getting "hacked" ~ where you might lose bytes and exp points. At night, there are more hackers and there are more occurences of getting "hacked".</p><p>Hacker attacks only attack those with a rank of Virus Veteran or higher.</p>'
																																			},	
																																			{
																																				id:'10th Page',
																																				html:'<b><center>Travel</center></b><p>With our easy-to-use travel function, you can travel to different parts of the world to catch viruses. However, we do have ranks restriction. You may only travel areas that can be accessed with your rank to avoid getting attacked by the powerful viruses.</p>'
																																			},
																																																																						]
																																	 })
		   ]
																											 })
																					 panelhelp.show()
																													
																													
																											 
																					
																				   
																				   }
																				   })
														   }
													   }
													   
													   })
						
						var travelpanel=new Ext.Panel({
													  layout:'card',
													  id:'travelpanel',
													  dockedItems:[
																   new Ext.Toolbar({
																				   title:'Travel',
																				   dock:'top',
																				   ui:'iaegisblack',
																				   items:[
																						  new Ext.Button({
																										 text:'Back',
																										 ui:'back',
																										 handler:function(){
																											 Ext.getCmp('masterpanel').setActiveItem(1,{type:'slide',direction:'right'})
																										 }
																										 })
																						  ]
																				   
																				   }),

																   ],
													  items:[{
																 xtype:'component',
																 id:'travelmap',
																 scroll:'both',
																 html:'<body><div id="travelmap"><img class="travelmap" src=World-Physical-Map.jpg /></div><div id="travelbuttons"></div></body>',
																 listeners:{
														  afterrender:function(){
															  new Ext.Button({
																			 id:'asia',
																			 cls:'button-asia',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>800 && location!='Asia'){
																				 alert('You have just arrived in Asia! You spent 800 bytes travelling here!')
																				location='Asia'
																				catch_rate=30
																				havebytes=havebytes-800
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Asia')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgasia.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Welcome to Asia, a place culturally known for its wonderful dishes and history. Now, it is a plague of virus breeding land. Go catch some viruses!'
																				 }else if(location=='Asia'){
																					 alert('You are already in Asia!')
																				 }else{
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'africa',
																			 cls:'button-africa',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>650 && location!='Africa'){
																				 alert('You have just arrived in Africa!You spent 650 bytes travelling here!')
																				location='Africa'
																				catch_rate=25
																				havebytes=havebytes-650
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Africa')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgafrica.jpg)'})
																				document.getElementById('contentspeech').innerHTML='There are not much malware here though. Phew! Its definitely very hot in here!'
																				 }else if(location=='Africa'){
																					 alert('You are already in Africa!')
																				 }else {
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'europe',
																			 cls:'button-europe',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>1200 && location!='Europe' && rank!='Clueless'){
																				 alert('You have just arrived in Europe!You spent 1200 bytes travelling here!')
																				location='Europe'
																				catch_rate=20
																				havebytes=havebytes-1200
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Europe')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgeurope.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Whoo! We are in Europe! Europe is classy and historical, and the best thing is, it has lots of malware too!'
																				 }else if(location=='Europe'){
																					 alert('You are already in Europe!')
																				 }else if(rank=='Clueless'){
																					 alert('This area is too strong. You have to have a rank of above Clueless in order to access this area.')
																				 }
																				 else {
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'POK',
																			 cls:'button-POK',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>2900 && location!='POK' && rank=='Security Sentinel'){
																				 alert('You have just arrived at the Pillar of Kings!You spent 2900 bytes travelling here!')
																				location='POK'
																				catch_rate=20
																				havebytes=havebytes-2900
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Kings')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgpok.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Brrrr....Its very cold in here! I wonder what the malware did to it. Anyway, I heard there are three legendaries to be caught!'
																				 }else if(location=='POK'){
																					 alert('You are already in the Pillar of Kings!')
																				 }else if(rank!='Security Sentinel'){
																					 alert('Your rank is not high enough. You need to be at least a Security Sentinel')
																				 }else{
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'MOH',
																			 cls:'button-MOH',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>3000 && location!='MOH' && rank=='Security Sentinel'){
																				 alert('You have just arrived at the Mandate of Heaven!You spent 3000 bytes travelling here!')
																				location='MOH'
																				catch_rate=20
																				havebytes=havebytes-3000
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Heaven')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgmoh.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Mandate of Heaven, a really nice place until you find that you can be quite lonely here!'
																				 }else if(location=='MOH'){
																					 alert('You are already in Mandate of Heaven!')
																				 }else if(rank!='Security Sentinel'){
																					 alert('Your rank is not high enough. You need to be at least a Security Sentinel')
																				 }else{
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'HQ',
																			 cls:'button-HQ',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 alert('You have just arrived at HQ! You took the express way and its FOC.')
																				location='HQ'
																				catch_rate=0
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('HQ')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bghq.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Welcome to iAegis! You are an agent of Aegis, a powerful security company aimed to destroy all viruses. I am Parry the Pencil! There are no viruses in the HQ so you need to travel.'
																				
																				
																			 }
																			 })
															  new Ext.Button({
																			 id:'Russia',
																			 cls:'button-russia',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>1650 && location!='Russia' && rank!='Secured' && rank!='Blue Screen Boss' && rank!='Virus Veteran' && rank!='Clueless'){
																				 alert('You have just arrived in Russia!You spent 1650 bytes travelling here!')
																				 location='Russia'
																				catch_rate=45
																				havebytes=havebytes-1650
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('Russia')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgrussia.jpg)'})
																				document.getElementById('contentspeech').innerHTML='Wow! We have ventured across the world to get to Russia, one of the most abundant sources of viruses and malware!'
																				 }else if(location=='Russia'){
																					 alert('You are already in Russia!')
																				 }else if(havebytes<=1650){
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }else{
																					 alert('Your rank is not high enough, you need a rank of at least Secured to access this area.')
																				 }
																			 }
																			 })
															  new Ext.Button({
																			 id:'USA',
																			 cls:'button-USA',
																			 renderTo:document.getElementById('travelbuttons'),
																			 handler:function(){
																				 if(havebytes>1700 && location!='US' && rank!='Secured Scammer' && rank!='Secured' && rank!='Blue Screen Boss' && rank!='Virus Veteran' && rank!='Clueless' ){
																				 alert('You have just arrived in US!You spent 1700 bytes travelling here!')
																				 location='US'
																				 havebytes=havebytes-1700
																				catch_rate=40
																				Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																				
																				Ext.getCmp('masterpanel').setActiveItem(1)
																				Ext.getCmp('locationbar').setTitle('USA')
																				Ext.getCmp('maingamepanel').el.applyStyles({'background-image':'url(img/bgusa.jpg)'})
																				document.getElementById('contentspeech').innerHTML='US--A! I have always wanted to visit this place, so full of viruses and trojans to kill oops, I mean quarantine. Word is there is a Master R-Virus controlling them.'
																				 }else if(location=='US'){
																					 alert('You are already in the US!')
																				 }else if(havebytes<=1700){
																					 alert("You do not have enough bytes. Try catching more viruses.")
																				 }else{
																					 alert('Your rank is not high enough! You need at least a rank of Secured Scammer.')
																				 }
																			 }
																			 })
															  
															  }
													  }
																		   }
															 ],
													  
													  
													  
													 
													  })
						catchpanel=new Ext.Panel({
												 layout:'card',
												 
												 dockedItems:[
															  new Ext.Toolbar({
																			  dock:'top',
																			  ui:'iaegisblack',
																			  title:'VirusHunter 2.0',
																			  items:[
																					 new Ext.Button({
																									text:'Back',
																									ui:'back',
																									handler:function(){
																										Ext.getCmp('masterpanel').setActiveItem(1,{type:'slide',direction:'right'})
																									}
																									}),
																					 {
																						 xtype:'spacer'
																					 },
																					 new Ext.Button({
																									text:'Manual',
																									handler:function(){
																										var Panel=new Ext.Panel({
																																floating:true,
																																modal:true,
																																cls:'manual',
																																centered:true,
																																collapsible:true,
																																scroll:true,
																																height:250,
																																width:210,
																																html:'Welcome to the VirusHunter 2.0 Interface! This Hunter is unique in the sense that it can detect viruses and malware effectively and and eliminate them easily. You just have to tap the screen to try to catch a virus! By the way, you may catch tips along the way, and they can help increase your exp points! Oh yes, just a reminder, the HQ is clean, that means there are no viruses to be caught in there, so you would have to travel to either Asia or Africa to catch your first virus. Have fun!'
																																})
																										Panel.show('fade')
																									}
																									})
																					 ]
																			  })
															  ],
												 listeners:{
													 body:{
														 tap:function(){
															 var randomizer=Math.floor(Math.random()*100+1)
															 if(randomizer>=75){
																
																 if(updates>=1 || upgrades>1){
																	 
																		 catch_rate=catch_rate*updates+upgrades
																	 }
																 var new_randomizer=Math.floor(Math.random()*randomizer*catch_rate)
																 
																 if(new_randomizer>=1126){
																	 
																	 var caseofvtm=Math.floor(Math.random()*12+1)
																	 
																	 if(caseofvtm<5){
																		 virusbytesearn=Math.floor(Math.random()*100+catch_rate)
																		 expearn=Math.floor(Math.random()*80+catch_rate)
																		 colour=Math.floor(Math.random()*2+1)
																		 if(colour==1){
																			 colour="blue"
																		 }else if(colour==2){
																			 colour="green"
																		 }else if(colour==3){
																			 colour="red"
																		 }
																		 i=Math.floor(Math.random()*20)
																		 if(location=='Asia'){
																			 v=Math.floor(Math.random()*4)
																		 }
																		 if(location=='Africa'){
																			 v=Math.floor(Math.random()*5)
																		 }
																		 if(location=='Europe'){
																			 v=Math.floor(Math.random()*5)
																		 }
																		 if(location=='Russia'){
																			 v=Math.floor(Math.random()*7)
																		 }
																		 
																		 if(location=='US'){
																			 v=Math.floor(Math.random()*7)
																		 }
																		 if(location=='MOH'){
																			 v=Math.floor(Math.random()*9)
																		 }
																		 if(location=='POK'){
																			 v=Math.floor(Math.random()*10)
																		 }
																  Viruscaught=new Ext.Panel({
																					  floating:true,
																					  modal:true,
																					  centered:true,
																					  hideOnMaskTap:false,
																					  collapsible:true,
																					  height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																					  html:'<span id="vimg"><img src=Graphics/Viruses/v1'+colour+'.png /></span><span id="catchdetailsvirus">You quarantined a virus! It is a <i>'+virusname[v]+'</i> You earned '+virusbytesearn+' bytes! and gained '+expearn+' exp points!</span> You have earned an additional tip from Parry: '+tip[i],
																					  dockedItems:[
																								   new Ext.Button({
																												  ui:'iaegisbutton',
																												  text:'Close',
																												  dock:'bottom',
																												  handler:function(){
																													  havebytes+=virusbytesearn
																													  experience+=expearn
																													  Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																													  if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																													  Viruscaught.hide()
																												  }
																												  })
																							 
																							 ],
																					  listeners:{
																						  afterrender:function(){
																							  
																					

																						  }
																					  }
																					  })
																  
																 Viruscaught.show('fade')
																	 }else if(5<caseofvtm<7){
																		 trojanbytesearn=Math.floor(Math.random()*200+catch_rate)
																		 expearn=Math.floor(Math.random()*100+catch_rate)
																		 colour=Math.floor(Math.random()*3+1)
																		 if(colour==1){
																			 colour="blue"
																		 }else if(colour==2){
																			 colour="orange"
																		 }else if(colour==3){
																			 colour="red"
																		 }else if(colour==4){
																			 colour="purple"
																		 }
																		 i=Math.floor(Math.random()*20)
																		 if(location=='Asia'){
																			 t=Math.floor(Math.random()*4)
																		 }
																		 if(location=='Africa'){
																			 t=Math.floor(Math.random()*5)
																		 }
																		 if(location=='Europe'){
																			 t=Math.floor(Math.random()*5)
																		 }
																		 if(location=='Russia'){
																			 t=Math.floor(Math.random()*7)
																		 }
																		 if(location=='US'){
																			 t=Math.floor(Math.random()*7)
																		 }
																		 if(location=='MOH'){
																			 t=Math.floor(Math.random()*9)
																		 }
																		 if(location=='POK'){
																			 t=Math.floor(Math.random()*10)
																		 }
																		 Trojancaught=new Ext.Panel({
																					  floating:true,
																					  modal:true,
																					  centered:true,
																					  hideOnMaskTap:false,
																					  collapsible:true,
																					  height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																					  html:'<span id="vimg"><img src=Graphics/Viruses/v2'+colour+'.png /></span><span id="catchdetailstrojan">You quarantined a trojan! It is a <i>'+trojanname[t]+'</i> You earned '+trojanbytesearn+' bytes and earned '+expearn+' exp points!</span> Trojans are pesky ones that bring viruses to your doorstep. Much like the Trojan Horse. There are many different kinds of trojans, mainly banking trojans, trojans which transmit malware to your computer.',
																					  dockedItems:[
																								   new Ext.Button({
																												  ui:'iaegisbutton',
																												  text:'Close',
																												  dock:'bottom',
																												  handler:function(){
																													  havebytes+=trojanbytesearn
																													  experience+=expearn
																													  Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																													  if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																													  Trojancaught.hide()
																												  }
																												  })
																							 
																							 ],
																					  listeners:{
																						  afterrender:function(){
																							 
																							  
																							  

																						  }
																					  
																					  }
																					  })
																 Trojancaught.show('fade')
																	 }else if(7<=caseofvtm<10){
																		 malwarebytesearn=Math.floor(Math.random()*25+catch_rate)
																		 expearn=Math.floor(Math.random()*75+catch_rate)
																		 colour=Math.floor(Math.random()*2+1)
																		 if(colour==1){
																			 colour="blue"
																		 }else if(colour==2){
																			 colour="red"
																		 }else if(colour==3){
																			 colour="green"
																		 }
																		 i=Math.floor(Math.random()*10)
																		 Malwarecaught=new Ext.Panel({
																					  floating:true,
																					  modal:true,
																					  centered:true,
																					  collapsible:true,
																					  height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																					  html:'<span id="vimg"><img src=Graphics/Viruses/v1'+colour+'.png /></span><span id="catchdetailsmalware">You quarantined a Malware! You earned '+malwarebytesearn+' bytes and earned '+expearn+'exp points!</span> You have also earned a tip from Parry: '+tip[i],
																					  dockedItems:[
																								   new Ext.Button({
																												  ui:'iaegisbutton',
																												  text:'Close',
																												  dock:'bottom',
																												  handler:function(){
																													  havebytes+=malwarebytesearn
																													  experience+=expearn
																													  Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																													  if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																													  Malwarecaught.hide()
																												  }
																												  })
																							 
																							 ],
																					  listeners:{
																						  afterrender:function(){
																							  
																							  

																						  }
																					  
																					  }
																					  })
																 Malwarecaught.show('fade')
																	 }else if(10<Math.floor(new_randomizer/1200)<15 && location=='POK' && caseofvtm>10){
																		 legendarybytesearn=Math.floor(Math.random()*catch_rate*2)
																		 expearn=Math.floor(Math.random()*catch_rate*5)
																		 legendarycaught=new Ext.Panel({
																									   floating:true,
																									   modal:true,
																									   hideOnMaskTap:false,
																									   centered:true,
																									   height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																									   html:'<span id="vimg"><img src=Graphics/Viruses/v3yellow.png /></span><span id="catchdetailslegend">You have quarantined a LEGENDARY TC Trojan!! You earned '+legendarybytesearn+' bytes and gained '+expearn+' exp points! Share it on Facebook!</span>',
																									   listeners:{
																						  afterrender:function(){
																							  
																							  

																						  }
																					  },
																									   dockedItems:[
																													new Ext.Button({
																																				  dock:'bottom',
																																				  ui:'iaegisbutton',
																																				  text:'Share on Facebook!',
																																				  handler:function(){
																																					  alert('This will bring you out of our webapp-game! Do remember to visit this app again!')
																																					  window.location = "http://www.facebook.com/dialog/feed?app_id=110921289002104&link=http://iaegis.dhs.sg&picture=http://icode.dhs.sg/dhshub/iAegis/Graphics/Viruses/v3yellow.png&name=iAegis%20Webapp%20Game&caption=A%20fun%20filled%20educational%20game!&description=I%20have%20caught%20a%20legendary%20virus%20in%20iAegis!%20Come%20join%20me!&redirect_uri=http://iaegis.dhs.sg&display=touch"
																																				  }
																																				  }),
																													new Ext.Button({
																																   dock:'bottom',
																																   ui:'iaegisbutton',
																																   text:'Close',
																																   handler:function(){
																																	   havebytes+=legendarybytesearn
																																	   experience+=expearn
																																	   Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																																	   if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																																	   legendarycaught.hide('pop')
																																   }
																																   })
																													]
																									   })
																		 legendarycaught.show('pop')
																	 }else if(5<Math.floor(new_randomizer/1200)<10 && location=='POK' && caseofvtm>10){
																		 legendarybytesearn=Math.floor(Math.random()*catch_rate*2)
																		 expearn=Math.floor(Math.random()*catch_rate*3)
																		 legendarycaught=new Ext.Panel({
																									   floating:true,
																									   modal:true,
																									   hideOnMaskTap:false,
																									   centered:true,
																									   height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																									   html:'<span id="vimg"><img src=Graphics/Viruses/v3red.png /></span><span id="catchdetailslegend2">You have quarantined a LEGENDARY QW Malware!! You earned '+legendarybytesearn+' bytes and gained '+expearn+' exp points!  Share it on Facebook!</span>',
																									   listeners:{
																						  afterrender:function(){
																							  
																							  
																						  }
																					  },
																									   dockedItems:[
																													new Ext.Button({
																																				  dock:'bottom',
																																				  ui:'iaegisbutton',
																																				  text:'Share on Facebook!',
																																				  handler:function(){
																																					  alert('This will bring you out of our webapp-game! Do remember to visit this app again!')
																																					  window.location = "http://www.facebook.com/dialog/feed?app_id=110921289002104&link=http://iaegis.dhs.sg&picture=http://icode.dhs.sg/dhshub/iAegis/Graphics/Viruses/v3red.png&name=iAegis%20Webapp%20Game&caption=A%20fun%20filled%20educational%20game!&description=I%20have%20caught%20a%20legendary%20virus%20in%20iAegis!%20Come%20join%20me!&redirect_uri=http://iaegis.dhs.sg&display=touch"
																																				  }
																																				  }),
																													new Ext.Button({
																																   dock:'bottom',
																																   ui:'iaegisbutton',
																																   text:'Close',
																																   handler:function(){
																																	   havebytes+=legendarybytesearn
																																	   experience+=expearn
																																	   Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																																	   if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																																	   legendarycaught.hide('pop')
																																   }
																																   })
																													]
																									   })
																		 legendarycaught.show('pop')
																	 }else if(Math.floor(new_randomizer/1200)>20 && location=='POK' && caseofvtm>10){
																		 legendarybytesearn=Math.floor(Math.random()*catch_rate*3)
																		 expearn=Math.floor(Math.random()*catch_rate*6+upgrades)
																		 legendarycaught=new Ext.Panel({
																									   floating:true,
																									   modal:true,
																									   hideOnMaskTap:false,
																									   centered:true,
																									   height: 280,
																					  width:320,
																					  scroll:true,
																					  overflow:scroll,
																									   html:'<span id="vimg"><img src=Graphics/Viruses/v3pink.png /></span><span id="catchdetailslegend3">You have quarantined a LEGENDARY MC16 Virus Infinus!! You earned '+legendarybytesearn+' bytes and gained '+expearn+' exp points!  Share it on Facebook!</span>',
																									   listeners:{
																						  afterrender:function(){
																							  
																							  

																						  }
																					  },
																									   dockedItems:[
																													new Ext.Button({
																																				  dock:'bottom',
																																				  ui:'iaegisbutton',
																																				  text:'Share on Facebook!',
																																				  handler:function(){
																																					  alert('This will bring you out of our webapp-game! Do remember to visit this app again!')
																																					  window.location = "http://www.facebook.com/dialog/feed?app_id=110921289002104&link=http://iaegis.dhs.sg&picture=http://icode.dhs.sg/dhshub/iAegis/Graphics/Viruses/v3pink.png&name=iAegis%20Webapp%20Game&caption=A%20fun%20filled%20educational%20game!&description=I%20have%20caught%20a%20legendary%20virus%20in%20iAegis!%20Come%20join%20me!&redirect_uri=http://iaegis.dhs.sg&display=touch"
																																				  }
																																				  }),
																													new Ext.Button({
																																   dock:'bottom',
																																   ui:'iaegisbutton',
																																   text:'Close',
																																   handler:function(){
																																	   havebytes+=legendarybytesearn
																																	   experience+=expearn
																																	   Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																																	   if(rank=='Clueless' && experience>=3000){
																														  rank="Virus Veteran"
																														  congratslevelup('Virus Veteran','I redefined the term “target of viruses”')
																													  }else if(rank=='Virus Veteran' && experience>=7500){
																														  rank="Blue Screen Boss"
																														  congratslevelup('Blue Screen Boss','The Blue Screen of Death? That’s my wallpaper! Thanks Mr Virus.')
																													  }else if(rank=='Blue Screen Boss' && experience>=12000){
																														  rank="Virus Prone"
																														  congratslevelup('Virus Prone','I’m a target of viruses.')
																													  }else if(rank=='Virus Prone' && experience>=19000){
																														  rank="Secured"
																														  congratslevelup('Secured','Secured, but still prone to viruses.')
																													  }else if(rank=='Secured' && experience>=28000){
																														  rank="Secured Scammer"
																														  congratslevelup('Secured Scammer','I fool viruses. You can’t fool me.')
																													  }else if(rank=='Secured Scammer' && experience>=50000){
																														  rank="Secured Smasher"
																														  congratslevelup('Secured Smasher','i.Smash Viruses.')
																													  }else if(rank=='Secured Smasher' && experience>=100000){
																														  rank="Secured Slasher"
																														  congratslevelup('Secured Slasher','Thy will cut thou viruses down!')
																													  }else if(rank=='Secured Slasher' && experience>=1000000){
																														  rank="Security Sentinel"
																														  congratslevelup('Security Sentinel','No virus can stand in my way. I will take them all down!')
																													  }
																																	   legendarycaught.hide('pop')
																																   }
																																   })
																													]
																									   })
																		 legendarycaught.show('pop')
																	 }
																 }

																 
																																
															 }else if(75<randomizer<80){
																raa=Math.floor(Math.random()*10)
																if(raa>7){
																i=Math.floor(Math.random()*10)
																tippanel=new Ext.Panel({
																					   floating:true,
																					   modal:true,
																					   centered:true,
																					   hideOnMaskTap:false,
																					   width:220,
																					   height:290,
																					   scroll:true,
																					   overflow:scroll,
																					   html:'<center><i><b>Tip from Parry</b></i></center><p>You have found a tip! '+specialtip[i]+'</p> You have gained an addition 250 exp points!',
																					   dockedItems:[
																									new Ext.Button({
																												   dock:'bottom',
																												   text:'Close',
																												   ui:'iaegisbutton',
																												   handler:function(){
																													   tippanel.hide('fade')
																												   }
																												   
																												   })
																									],
																					   listeners:{
																						   afterrender:function(){
																							   experience+=250
																							   Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																						   }
																					   }
																					   })
																tippanel.show('pop')
																
															 }
														 }
													 }
											
												 
												 }
												 }
												 })
						learnpanel=new Ext.Panel({
												 id:'learnpanel',
												 cls:'learnpanel',
												 layout:'card',
												 items:[
														new Ext.Carousel({
																		 cls:'factstips',
																		 items:[
																				{
																					id:'Facts',
																					
																					html:'<div id="facts">Facts from Parry</div><div class="factsbox"><span id="factstext"></span></div><div id="changefact"></div>',
																					listeners:{
																						afterrender:function(){
																							new Ext.Button({
																										   cls:'factback',
																										   ui:'back',
																										   renderTo:document.getElementById('changefact'),
																										   text:'Back',
																										   handler:function(){
																											   Ext.getCmp('masterpanel').setActiveItem(1,'slide')
																										   }
																										   })
																							new Ext.Button({
																										   cls:'changefact',
																										   ui:'action',
																										   renderTo:document.getElementById('changefact'),
																										   text:'I want more!',
																										   handler:function(){
																											   i=Math.floor(Math.random()*15)
																							document.getElementById('factstext').innerHTML=facts[i]
																										   }
																										   })
																							i=Math.floor(Math.random()*15)
																							document.getElementById('factstext').innerHTML=facts[i]
																						},
																						
																						
																					}
																					
																				},
																				{
																					id:'Tips',
																					
																					html:'<div id="tips">Tips from Parry</div><div class="tipsbox"><span id="tipstext"></span></div><div id="changetip"></div>',
																					listeners:{
																						afterrender:function(){
																							new Ext.Button({
																										   cls:'factback',
																										   ui:'back',
																										   renderTo:document.getElementById('changetip'),
																										   text:'Back',
																										   handler:function(){
																											   Ext.getCmp('masterpanel').setActiveItem(1,'slide')
																										   }
																										   })
																							new Ext.Button({
																										   cls:'changefact',
																										   ui:'action',
																										   renderTo:document.getElementById('changetip'),
																										   text:'I want more!',
																										   handler:function(){
																											   i=Math.floor(Math.random()*20)
																							document.getElementById('tipstext').innerHTML=tip[i]
																										   }
																										   })
																							i=Math.floor(Math.random()*20)
																							document.getElementById('tipstext').innerHTML=tip[i]
																						},
																						
																					}
																				}
																				]
																		 })
														]
												 
												 
												 })
						catchlog=new Ext.Panel({
											   id:'catchlog',
											   cls:'catchlog',
											   layout:'card',
											   scroll:'vertical',
											   
											   
											   })
						 //Model
Ext.regModel('updater',{
			 fields:[
		{name: 'name',        type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'price',       type: 'float'},
		{name: 'instock',     type: 'boolean'}
			 ]
			 })
//store
store=new Ext.data.Store({
						 model:'updater',
						 data:[
							   {name: 'Updates', description:'A necessity for all virus hunters. They provide excellent protection against hackers and increase the chances of catching rare viruses.' , price: 20000, instock:true},
							   {name: 'Upgrades', description:'This provides a stronger protection against hackers and also increase the chances of catching rare viruses.' , price: 45000, instock:false}
							   ]
						 })
// Shoppanel
updatepanel=new Ext.Panel({
						layout:'card',
						id:'updatepanel',
						cls:'updatepanel',
						dockedItems:[
									 new Ext.Toolbar({
													 dock:'top',
													 title:'Updater 3.0',
													 ui:'iaegisblack',
													 items:[
																  new Ext.Button({
																				 text:'Back',
																				 ui:'back',
																				 handler:function(){
																					 Ext.getCmp('masterpanel').setActiveItem(1,{type:'slide',direction:'down'})
																				 }
																				 }),
													 {xtype:'spacer'},
																  new Ext.Button({
																				 text:'?',
																				 handler:function(){
																					 panel1=new Ext.Panel({
																										 floating:true,
																										 centered:true,
																										 scroll:true,
																										 modal:true,
																										 height:280,
																										 width:210,
																										 collapsible:true,
																										 html:'Welcome to the Updater! This is a state of the art updater to help update your virus definitions in order to catch better and stronger viruses. Also, if you update regularly, you may meet boss malwares! Unfortunately we have to pay some bytes as the new server is costly. Do not ask me why, ask the guy in charge.' 
																										 })
																					 panel1.show('fade')
																				 }
																				 })
																  ]
													 })
									 ],
						items:[
							   new Ext.List({
											fullscreen:true,
											itemTpl:'{name}<br /><i><p><font size="1">{description}</font></p></i><p align="right"><font color="red">{price}</font></p>',
											store:store,
											listeners:{
												itemtap:function(record,index){
													currentselected=this.getStore().getAt(index)
													if(currentselected.get('name')=='Updates'){
														
														if(havebytes>20800){
															Ext.Msg.minWidth=300
			                                                Ext.Msg.confirm('Purchase','Are you sure you want to buy this item?',function(btn){
																																		  if(btn=='yes'){
																																			  havebytes-=20000
																																			  updates+=1
																																			  Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																																			  alert('You have purchased 1 update!')
																																		  }else{}
																																		  })
															
														}else{
															alert('You do not have enough bytes. Try catching more viruses.')
														}
													}else if(currentselected.get('name')=='Upgrades'){
														
														if(rank=='Clueless' || rank=="Virus Veteran" || rank=="Blue Screen Boss" || rank=="Virus Prone"){
															alert('A rank of Secured or higher is needed to unlock this item.')
														}else if(havebytes>45800){
															Ext.Msg.minWidth=300
			                                                Ext.Msg.confirm('Purchase','Are you sure you want to buy this item?',function(btn){
															
																																		  if(btn=='yes'){
																																			  havebytes-=45000
																																			  upgrades+=1
																																			  Ajaxrequest(location,rank,havebytes,experience,updates,upgrades)
																																			  alert('You have purchased 1 upgrade!')
																																		  }else{}
																																		  })
															
														
							   
														}else{alert('You do not have enough bytes. Try catching more viruses.')}
													}
												}
											}
											})
							   ],
						
						})
						
						
											 new Ext.Panel({
														   id:'masterpanel',
														   fullscreen:true,
														   layout:'card',
														   monitorOrientation:true,
														   listeners:{
															  body:{
																  taphold:function(){
																	  if(x==0){
																		  x=1
																	   $("#dockicons").addClass("dockicons");
																	   $('.gameicon').fadeIn('400')
																	   $('.settingsicon').fadeIn('400')
																	  }else{
																		  $("#dockicons").removeClass("dockicons");
																		  $('.gameicon').fadeOut('400')
																	   $('.settingsicon').fadeOut('400')
																		  x=0
																	  }
																	  
																	   
															  }
															  },
															 
																 
																
															 
															   orientationchange:function(){
																   if(Ext.Viewport.getOrientation() =='landscape'){
																	   alert('Hello, our webapp is best played on a portrait mode. Try tilting your device again! Thank you for playing iAegis!')
																   }
															   }
														   },
														   items:[loginpanel,maingamepanel,travelpanel,catchpanel,learnpanel,catchlog,settingspanel,updatepanel],
														   html:'<div id="dockicons"><div id="gameicon"><img src="games.png" id="gameimg"  class="gameicon" onClick=javascript:goto("games")></div><div id="settingsicon"><img src="settings.png" id="settingsimg" class="settingsicon" onClick=javascript:goto("settings")></div></div>'
														   
														   })
									  
					}
					})




