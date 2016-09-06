



var React = require('react');


var ReactDOM = require('react-dom');
var DestinationTable = require('./jsxes/destinationlist.jsx');


/* Fields I want in cities:
    -country
    -dateArrive
    -dateLeave
    -name
    -latlon: []
*/

var CITIES = [
  {country: 'Germany', latlon: [52.5209,13.4214], visited: true, name: 'Berlin', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Germany', latlon: [50.1042,8.7398], visited: true, name: 'Frankfurt', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Germany', latlon: [49.4403, 11.0848], visited: false, name: 'Nuremburg', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Germany', latlon: [48.1371, 11.5859], visited: false, name: 'Munich', dateArrive: '9/29/2016', dateLeave:null},

  {country: 'Austria', latlon: [48.3061, 14.3076], visited: true, name: 'Linz', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Austria', latlon: [48.2298, 15.3290], visited: false, name: 'Melk', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Austria', latlon: [48.2267,16.4564], visited: true, name: 'Vienna', dateArrive: '9/29/2016', dateLeave:null},
// 48.1422/17.1085
{country: 'Slovakia', latlon: [48.1422, 17.1085], visited: false, name: 'Bratislava', dateArrive: '9/29/2016', dateLeave:null},
  {country: 'Hungary', latlon: [47.4945,19.0563], visited: false, name: 'Budapest', dateArrive: '9/29/2016', dateLeave:null},
];



ReactDOM.render(
  <DestinationTable cities={CITIES} />,
  document.getElementById('app')
);
