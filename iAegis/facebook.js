var rsvp
var access_token

						if($.jStorage.get('accesstoken')){
						access_token=$.jStorage.get('accesstoken')//Get access_token from localstorage if localstorage has
				         
						Ext.util.JSONP.request({
             url: 'https://graph.facebook.com/me?access_token='+access_token,
            params: {
              
                format: 'json',
                
            },
            callbackKey: 'callback',
			delay:500,
            callback: function(result) {
                  rsvp=result.name
				  
                 alert('Welcome, '+rsvp+'!')
				 return rsvp 
				 return access_token              //Display name
                 if(result.error){
					 alert(result.error)
				 }
                 
                
            }
        })
						}else{
						var url=window.location+''                   //Else, if localstorage doesn't have, take it from locationbar
                  access_token=url.split('#access_token=')[1]
				  if(access_token){                                   //If locationbar doesnt have, skip.
					  $.jStorage.set('accesstoken',access_token) 
					  //If locationbar has accesstoken, save it to localstorage
					     Ext.util.JSONP.request({
             url: 'https://graph.facebook.com/me?access_token='+access_token,
            params: {
              
                format: 'json',
                
            },
            callbackKey: 'callback',
            callback: function(result) {
                  rsvp=result.name  
				                    //Display name
                 alert('Welcome, '+rsvp+'!')
				 return rsvp
				 return access_token
                 if(result.error){
					 alert(result.error)
				 }
                 
                
            }
        })
				  }
						}