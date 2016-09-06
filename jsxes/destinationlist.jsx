var React = require('react')
var ReactDOM = require('react-dom')

var map = require('../map/map.js');


 const DestinationTable = React.createClass({
  getInitialState(){
    return {
      filterText: '',
      unvisitedOnly: false
    }
  },
  handleUserInput: function(filterText, unvisitedOnly){
    this.setState({
      filterText: filterText,
      unvisitedOnly, unvisitedOnly
    })
  },
  render() {

      const cities = this.props.cities;

        return (
            <div className="destinationsTable">
            <SearchBar
              filterText={this.state.filterText}
              unvisitedOnly={this.state.unvisitedOnly}
              onUserInput={this.handleUserInput}/>
            <CityTable
              cities={this.props.cities}
              filterText={this.state.filterText}
              unvisitedOnly={this.state.unvisitedOnly}
            />
            </div>
          )
    }

})


 const SearchBar = React.createClass({
    handleChange(){
      const filterText = ReactDOM.findDOMNode(this.refs.filterText).value;
      const unvisitedOnly = ReactDOM.findDOMNode(this.refs.unvisitedOnly).checked;

      this.props.onUserInput(filterText, unvisitedOnly);

    },
    render(){

      const { filterText, unvisitedOnly } = this.props;

      return (
        <form>
            <input
                ref="filterText"
                type="search"
                placeholder="Search..."
                value={filterText}
                onChange={this.handleChange}
            />
            <label>
                <input
                    ref="unvisitedOnly"
                    type="checkbox"
                    checked={unvisitedOnly}
                    onChange={this.handleChange}
                />
                Only show cities not yet visited.
            </label>
        </form>
      );
    },

})




 const CityTable = React.createClass({

  render(){
    const cities = this.props.cities;

    const rows = [];

    let currentCountry;
    var lastCategory = null;
// I should filter cities based on if it's in stock and the search text

    cities.forEach(function(city){

      if (city.name.indexOf(this.props.filterText) === -1 || (!city.stocked && this.props.unvisitedOnly)) {
         return;
       }
      if(city.country  !== currentCountry){

        currentCountry = city.country;

        rows.push((
          <CountryRow key={city.country}
            country={city.country} />
        ))
      }

      rows.push((
        <CityRow key={city.name} city={city} latlon={city.latlon} />
      ))

    }.bind(this))


    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Arrive</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
})



 const CityRow = React.createClass({
   pantocity(){

console.log(map)

     map.setView(this.props.latlon, 11, { animate: true, pan:{duration:10, easeLinearity:.2}, reset:false});
     console.log('clicked on a city')


   },
  render(){

    const city = this.props.city;

    return(
    <tr>
    <td onClick={this.pantocity}>
      {this.props.city.name}
    </td>
    <td>
      {this.props.city.dateArrive}
    </td>
    </tr>

  )
  }
})


 const CountryRow = React.createClass({

  render(){
    return(
    <tr>
      <th> {this.props.country} </th>
    </tr>
  )
  }
})

module.exports = DestinationTable;
