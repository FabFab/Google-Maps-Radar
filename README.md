# GoogleMaps Radar

GoogleMaps Radar is a javascript library which adds a Radar Screen on your Google Maps.

## Include 


      <script type="text/javascript" src="http://maps.google.com/maps/api/js?libraries=geometry&sensor=false"></script>   
  	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>    
		<script type="text/javascript" src="./js/notifier.js"></script>    
		<script type="text/javascript" src="./js/GoogleRadar.js"></script>
		<script type="text/javascript" src="./js/demo.js">

## Usage


  	// init a map
  	var mapOptions = {
  	    zoom : 15,
  	    center : new google.maps.LatLng(oPicto.latitude, oPicto.longitude),        
        mapTypeId : google.maps.MapTypeId.SATELLITE
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

  	// init a GoogleRadar
  	var opts = {
   	   lat : oPicto.latitude,
   	   lng : oPicto.longitude
   	 };
  	myGoogleRadar = new GoogleRadar(map, opts);

  	// init a RadarPolygon
    opts = {
      angle : 5,
      time : 50
    };
    myGoogleRadar.addRadarPolygon(opts);
    
  	// Add a Marker
  	var oPicto0 = {
   	  lat : 35.662872,
   	  lng : 139.700448,
   	  iconUrl : "./img/jack_32.png",
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
  	myGoogleRadar.addMarker(oPicto0);


## Links

See a description and the demo there : [there](http://www.blackspotradish.com/wp/google-maps-radar/)

See the documentation [here](https://github.com/FabFab/Google-Maps-Radar/wiki/Documentation)
