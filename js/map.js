const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
        source: new ol.source.TileJSON({
            url: `https://api.maptiler.com/maps/basic-v2/tiles.json?key=jMorm2vagAPeTZsIB7D5`,
            tileSize: 512,
            // crossOrigin: 'anonymous' 
        })
        })
    ],
    target: 'map',
    view: new ol.View({
        constrainResolution: true,
        center: ol.proj.fromLonLat([120.9788161, 14.5358591]),
        zoom: 18
    })
    });