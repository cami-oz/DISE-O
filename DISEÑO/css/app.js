mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsaGVybmFuZGV6IiwiYSI6ImNsZWF2Njl1MzA1eDIzb2xleGlvcmJhbTcifQ.n73GaassRRECFJ7Q61lW8Q'; // Reemplaza TU_ACCESS_TOKEN con tu propio token de acceso de Mapbox
        
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [-97.3846395, 18.4769673], // Coordenadas del centro del mapa
            zoom: 15.5, // Nivel de zoom inicial
            pitch: 45, // Inclinación del mapa
            bearing: -17.6 // Rotación del mapa
        }); 
         // Agregar el botón de ubicación
        var geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });

        map.addControl(geolocate);

        // Mostrar la ubicación del usuario en el mapa
        map.on('load', function() {
            geolocate.on('geolocate', function(e) {
                var lon = e.coords.longitude;
                var lat = e.coords.latitude;
            });
        });
           map.on('load', function() {
            map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': {
                        'type': 'identity',
                        'property': 'height'
                    },
                    'fill-extrusion-base': {
                        'type': 'identity',
                        'property': 'min_height'
                    },
                    'fill-extrusion-opacity': .6
                }
            });
        });
        
        map.on('mousemove', function(e) {
            var features = map.queryRenderedFeatures(e.point, { layers: ['3d-buildings'] });
            if (features.length) {
                map.getCanvas().style.cursor = 'pointer';
            } else {
                map.getCanvas().style.cursor = '';
            }
        });


       
        
       
           // Agregar el control de navegación al mapa
        map.addControl(new mapboxgl.NavigationControl());
        
        // Agregar un evento de clic al botón "Marcar ruta"
        document.getElementById('marcar_ruta').addEventListener('click', function() {
          
            
          
  
          var marker = new mapboxgl.Marker({
            color: '#FF0000',
            draggable: true
          }).setLngLat([-97.3876237, 18.4885936]).addTo(map);
          marker.setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML("<h3>BASE DE LA RUTA </h3>"))
            // Agregar la capa de ruta al mapa
            map.addLayer({
                'id': 'ruta',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                              [ -97.3876237, 18.4885936],
                              [ -97.387392,18.4884012 ],
                              [ -97.3863941,18.4877901 ],
                              [ -97.3854499, 18.4871928],
                              [ -97.384665, 18.4866579],
                              [ -97.3845998,18.4866086],
                              [ -97.3845926,18.4859596],
                              [-97.3845677,18.4823508 ],
                              [ -97.3845613,18.4802247],
                                [ -97.3845575,18.4793621],
                              [-97.3845578,18.4785998 ],
                              [ -97.3846028,18.4779713],
                             [-97.3846222,18.4772235 ],


                             [ -97.3846395,18.4769673],
                             [ -97.3865199,18.4756781],
                             [-97.3910388,18.4725144 ],
                             [ -97.3911256,18.4724497],
                             [ -97.3911985,18.4724435],
                             [ -97.3913216,18.4725136],
                             [ -97.3914521,18.4724887],
                             [ -97.3915134,18.4723577],
                             [ -97.3914674,18.4722286],
                             [ -97.3913672,18.4721766],
                             [ -97.3912806,18.4721874],
                             [ -97.3912376,18.4722083],
                             [-97.3911369,18.4721159 ],
                             [ -97.3903963,18.471325],
                             [ -97.3893596,18.4701604],
                             [ -97.3893389,18.4699806],
                             [ -97.3893503,18.4668705],
                             [ -97.3893541,18.4650012],
                             [ -97.389397,18.4627643],
                             [ -97.3894597,18.458758],

                             [-97.3894828,18.4586699 ],
                             [-97.385162,18.4584913 ],
                             [-97.3852489,18.4573549 ],
                             [-97.3853994,18.4573269 ],
                             [ -97.38715,18.4573801],
                             [ -97.3871996,18.4574169],
                             [ -97.3871723,18.4585392],
                             [-97.3870339,18.4647734 ],
                             [ -97.3870028,18.4693627],
                             [ -97.3871657,18.4693932],
                             [-97.3881979,18.4693899 ],
                             [ -97.3882698,18.4694379],
                             [ -97.3882744,18.4702094],
                             [ -97.388294,18.4713073],
                             [ -97.3884424,18.471326],
                             [ -97.3902071,18.4713307],
                             [ -97.3903268,18.4713274],
                             [ -97.3903008,18.4729239],
                             [ -97.3903243,18.4729849],
                             [ -97.3832429,18.4779484],
                             [ -97.3830887,18.4780755],
                             [ -97.3830645,18.4781502],
                             [ -97.3830545,18.4783027],
                             [ -97.3831227,18.4786858],
                             [-97.3836899,18.4802257 ],
                             [-97.3837892,18.4881059 ],
                             [ -97.3837902,18.4901589],
                             [ -97.3837967,18.4904512],
                             [ -97.3845348,18.4900768],
                             [ -97.3845997,18.4900958],
                             [ -97.3846145,18.4927506],
                             [ -97.3845842,18.4928463],
                             [ -97.3853967,18.4928424],
                             [-97.3854808,18.4927574 ],
                             [-97.3871789,18.4896236 ],
                             [-97.3865526,18.4891093 ],
                             [ -97.3865006,18.4890456],
                             [-97.3875471,18.4885468 ],
                             [ -97.3894405,18.4897547],
                             [ -97.3895326,18.4898047],
                             [-97.3893498,18.4936876 ],
                             [ -97.3893596,18.4938539],
                             [ -97.387959,18.4938092],
                             [ -97.3879165,18.4938817],
                             [ -97.3888172,18.4939084],
                             [ -97.3892514,18.493915],
                             [ -97.38936,18.4938367]
                    
                              
                            ]
                        }
                    }
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#1875BF',
                    'line-width': 8
                }
                
            });
            
        });
        
        
            



        


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
        document.getElementById('ruta').addEventListener('click', function() {
            var marker = new mapboxgl.Marker({
                color: '#FF0000',
                draggable: true
              }).setLngLat([-97.3955849, 18.48431]).addTo(map);
              marker.setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML("<h3>BASE DE LA RUTA </h3>"))
            // Agregar la capa de ruta al mapa
            map.addLayer({
                'id': 'ruta',
                'type': 'line',
                'source': {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': [
                                [ -97.3955849, 18.48431],
                                [-97.3846439, 18.4899903],
                                [-97.384595, 18.4900129],
                                [-97.3846161, 18.4893908],
                                [-97.3845953, 18.4869012],
                                [-97.3845875, 18.4867943],
                                [-97.3846844, 18.486799],
                                [-97.3864226, 18.487876],
                                [-97.3864393, 18.4877037],
                                [-97.3872631, 18.4840436],
                                [-97.3873737, 18.484114],
                                [-97.3881097, 18.4847817],
                                [-97.3881833,18.4848287  ],
                                [-97.3882305,18.4848094],
                                [-97.3883424,18.4848653],
                                [-97.3884982,18.4849741],
                                [-97.3888811, 18.4853438],
                                [-97.3889386, 18.4854948],
                                [-97.3888613, 18.4855667],
                                [-97.3876557, 18.4866757],
                                [-97.3876564, 18.4867805],
                                [-97.3877204, 18.4868322],
                                [-97.3885694, 18.4878203],
                                [-97.3886698, 18.4878997],
                                [-97.3887361, 18.4879231],
                                [-97.4000071, 18.4820622],
                               [-97.4001721, 18.4819707],
                               [-97.4003367, 18.4819066],
                               [-97.400184, 18.481664],
                               [-97.4000557, 18.4814141],
                               
                               [-97.399731, 18.4808544],
                               [-97.3988205, 18.4795857],
                               [-97.3982892, 18.4786571],
                               [-97.397033, 18.476784],
                              


                               
                             

                                
                            ]
                        }
                    }
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#1875BF',
                    'line-width': 8
                }
            });
        });