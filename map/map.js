
var map = L.map('map');
//    var locator = L.Mapzen.locator();  locator.setPosition('bottomright');locator.addTo(map);

var hash = new L.Hash(map);

var tanlayer = Tangram.leafletLayer({
    scene: 'map/scene.yaml',
    attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
});

tanlayer.addTo(map);
// 48.1759/16.4900

map.setView([48.17053188, 16.459], 5, {animate: true});




var options = {
  bounds: true,
  position: 'topright',
  expanded: true
};

L.control.geocoder('search-vwctHEC', options).addTo(map);

window.addEventListener("hashchange",function(){parent.postMessage(window.location.hash, "*")});

console.log('should be making map')
module.exports = map;
