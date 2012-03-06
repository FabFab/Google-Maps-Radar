			var oPicto = {
				latitude : 35.659530,
				longitude : 139.700512
			};

			function initGoogleMaps() {
				var mapOptions = {
					zoom : 15,
					center : new google.maps.LatLng(oPicto.latitude, oPicto.longitude),
					mapTypeId : google.maps.MapTypeId.SATELLITE
				};
				map = new google.maps.Map(document.getElementById("map"), mapOptions);

			};

			function createGoogleRadar() {
				var opts = {
					lat : oPicto.latitude,
					lng : oPicto.longitude
				}
				if( typeof (myGoogleRadar) == 'undefined') {
					if( typeof (map) != 'undefined') {
						myGoogleRadar = new GoogleRadar(map, opts);
					}
				}
			};

			function loadAxis() {
				var opts = {
					circleColor : "#00FF00",
					radius : "100",
					n : 11
				};

				if( typeof (myGoogleRadar) != 'undefined')
					myGoogleRadar.drawAxis(opts);

			};

			function unloadAxis() {
				if( typeof (myGoogleRadar) != 'undefined')
					myGoogleRadar.undrawAxis();
			};

			oPictoInit = {};
			function addMarker() {

				oPictoInit = {
					lat : oPicto.latitude,
					lng : oPicto.longitude,
					iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/multi-agents.png",
					id : "meeting",
					name : "The Meeting Point",
					content : "Hachiko, the most famous meeting point in Tokyo"
				};

				if( typeof (myGoogleRadar) != 'undefined')
					myGoogleRadar.addMarker(oPictoInit);
			};

			function removeMarker() {
				if( typeof (myGoogleRadar) != 'undefined')
					myGoogleRadar.removeMarker(oPictoInit);
			};

			function addRadar() {
				if( typeof (myGoogleRadar) != 'undefined') {
					opts = {
						time : 100,
						zIndex : 5,
					};
					myGoogleRadar.addRadarLine(opts);
				}
			};

			function stopRadar() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.stopLine();
				}
			};

			function hideRadar() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.hideLine();
				}
			};
			
			function showRadar() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.showLine();
				}
			};

			function addRadarPolygon() {
				if( typeof (myGoogleRadar) != 'undefined') {
					opts = {
						angle : 5,
						time : 50
					};
					myGoogleRadar.addRadarPolygon(opts);
				}
			};

			function stopRadarPolygon() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.stopPolygon();
				}
			};
			
			function hideRadarPolygon() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.hidePolygon();
				}
			};
			function showRadarPolygon() {
				if( typeof (myGoogleRadar) != 'undefined') {
					myGoogleRadar.showPolygon();
				}
			};
			
			var oPicto0 = {
				lat : 35.662872,
				lng : 139.700448,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/jack_32.png",
				id : "trump",
				handle : function() {
					Notifier.success("One of the Best Club in Tokyo", "The Trump Room");
					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject = this;

					setTimeout(function() {
						thisObject.setAnimation()
					}, 2000, this);
				}
			};

			
			var oPicto1 = {
				lat : 35.65920,
				lng : 139.70080,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/male-user.png",
				id : "male-user",
				handle : function() {
					Notifier.info("Several Floors of Shopping for him", "Shopping for him");
					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject1 = this;

					setTimeout(function() {
						thisObject1.setAnimation()
					}, 2000, this);
				}
			};

			var oPicto2 = {
				lat : 35.66147,
				lng : 139.70045,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/female-user.png",
				id : "female-user",
				visible : false,
				handle : function() {
					Notifier.info("A lot of shopping for Her", "Shopping for Her");
					this.setVisible(true);
					thisObject4 = this;
					setTimeout(function() {
						thisObject4.setVisible(false);
					}, 2000, this);
				}
			};

			var oPicto3 = {
				lat : 35.66111,
				lng : 139.69786,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/star.png",
				id : "bar",
				handle : function() {
					Notifier.success("Nice DJs, Good drinks, but a bit expensive", "Nice Bar, Rock 'n roll!");
					this.setAnimation(google.maps.Animation.DROP);
					thisObject3 = this;
					/*setTimeout(function() {
					 thisObject3.setAnimation()
					 }, 2000, this);*/
				}
			};

			var oPicto4 = {
				lat : 35.660733,
				lng : 139.698608,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/recycle-full.png",
				id : "stupid",
				handle : function() {
					Notifier.warning("Hey bro, wanna come to my bar and meet my girlz?", "Bar for stupid");
					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject2 = this;
					setTimeout(function() {
						thisObject2.setAnimation()
					}, 2000, this);
				}
			};

			var oPicto5 = {
				lat : 35.65941,
				lng : 139.70800,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/lock.png",
				id : "unknown1",
				visible : false,
				handle : function() {
					Notifier.warning("Never Been there!");
					this.setVisible(true);

					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject5 = this;
					setTimeout(function() {
						thisObject5.setAnimation();
						thisObject5.setVisible(false);
					}, 2000, this);
				}
			};

			var oPicto6 = {
				lat : 35.6485, 
				lng : 139.7045,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/line-globe.png",
				id : "unknown2",
				handle : function() {
					Notifier.info("Too far away to be triggered");
					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject6 = this;
					setTimeout(function() {
						thisObject6.setAnimation();
					}, 2000, this);
				}
			};

			var oPicto7 = {
				lat : 35.6567, 
				lng : 139.6954,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/heart.png",
				id : "love",
				visible : false,
				handle : function() {
					Notifier.info("Love hotel and night clubs over there");
					this.setVisible(true);

					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject7 = this;
					setTimeout(function() {
						thisObject7.setAnimation()
						thisObject7.setVisible(false);
					}, 2000, this);
				}
			};

			var oPicto8 = {
				lat : 35.6564, 
				lng : 139.7009,
				iconUrl : "https://github.com/FabFab/Google-Maps-Radar/raw/master/img/lookup.png",
				id : "unknow3",
				visible : false,
				handle : function() {
					Notifier.info("Never Been there either.");
					this.setVisible(true);

					this.setAnimation(google.maps.Animation.BOUNCE);
					thisObject8 = this;
					setTimeout(function() {
						thisObject8.setAnimation()
						thisObject8.setVisible(false);
					}, 2000, this);
				}
			};
			
			function addSpots() {
				myGoogleRadar.addSetOfMarkersToDetect([oPicto0, oPicto1, oPicto2, oPicto3, oPicto4, oPicto5, oPicto6, oPicto7, oPicto8]);
			};
			
			function removeSpots() {
				myGoogleRadar.removeSetOfMarkersToDetect([oPicto0, oPicto1, oPicto2, oPicto3, oPicto4, oPicto5, oPicto6, oPicto7, oPicto8]);
			};
			
			function initBermudaMap() {
				var mapOptions2 = {
					zoom : 3,
					center : new google.maps.LatLng(26.184456, -70.234968),
					mapTypeId : google.maps.MapTypeId.SATELLITE
				};
				map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);
				var radarOptions2 = {
					lat : 26.184456, 
					lng : -70.234968,
					id: "bermudaRadar"
				}
				myBermudaStuff = new GoogleRadar(map2, radarOptions2);
				var bermudaTriangle= [new google.maps.LatLng(25.774252, -80.190262), new google.maps.LatLng(18.466465, -66.118292), new google.maps.LatLng(32.321384, -64.75737), new google.maps.LatLng(25.774252, -80.190262)];

				var shapeOptions2 = {
						time : 100,
						zIndex : 5,
						shapeCoords: bermudaTriangle,
						id: "bermuda"
				};
				myBermudaStuff.addRadarPolygon(shapeOptions2);

			};