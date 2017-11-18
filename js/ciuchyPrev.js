      var zoomValue = 18;

      var dodajSklep = function(nazwa, latt, lngg){
      sklepy.push(
        {
          nazwa: nazwa,
          lat: latt,
          lng: lngg
        }
      )}

            var sklepy = [];
      dodajSklep("Elsnera",50.0841,19.9092);
      dodajSklep("Długa",50.0718,19.9355);
      dodajSklep("Lilli",50.01853,20.006);
      dodajSklep("Zlotej Jesieni",50.09015,20.0262);
      dodajSklep("Na Lotnisku",50.0870181,20.0145038);
      dodajSklep("6",50.0822979,20.02265);

        var map;
        $(document).ready(function(){
          map = new GMaps({
            div: '#map',
            lat: 50.084,
            lng: 19.909,
            zoom: zoomValue,
            scrollwheel: false
          });

                map.addMarker({lat: sklepy[0].lat,lng: sklepy[0].lng,title: 'Elsnera'});

          
              $("#elsnera").click(function(){
                map.addMarker({lat: sklepy[0].lat,lng: sklepy[0].lng,title: 'Elsnera'});
                map.setCenter(sklepy[0].lat,sklepy[0].lng);
                map.setZoom(zoomValue);            
              });

              $("#dluga").click(function(){
                map.addMarker({lat: sklepy[1].lat,lng: sklepy[1].lng,title: 'Elsnera'});
                map.setCenter(sklepy[1].lat,sklepy[1].lng);            
                map.setZoom(zoomValue);            
              });

              $("#lilli").click(function(){
                map.addMarker({lat: sklepy[2].lat,lng: sklepy[2].lng,title: 'Elsnera'});
                map.setCenter(sklepy[2].lat,sklepy[2].lng);
                map.setZoom(zoomValue);            
              });

              $("#zlotej").click(function(){
                map.addMarker({lat: sklepy[3].lat,lng: sklepy[3].lng,title: 'Elsnera'});
                map.setCenter(sklepy[3].lat,sklepy[3].lng);            
                map.setZoom(zoomValue);            
              });

              $("#lotnisko").click(function(){
                map.addMarker({lat: sklepy[4].lat,lng: sklepy[4].lng,title: 'Elsnera'});
                map.setCenter(sklepy[4].lat,sklepy[4].lng);            
                map.setZoom(zoomValue);            
              });

              $("#niepodleglosci").click(function(){
                map.addMarker({lat: sklepy[5].lat,lng: sklepy[5].lng,title: 'Elsnera'});
                map.setCenter(sklepy[5].lat,sklepy[5].lng);            
                map.setZoom(zoomValue);            
              });
            });
