import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Region extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  getLocation=()=> {
    const x = document.getElementById("demo");
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  
  showPosition=(position) =>{
    var x = document.getElementById("demo");
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
  }
 
  render() {
    return (
      <div>
      <div>
        <button onClick={this.getLocation()}>Try It</button>
        

        <p id="demo"></p>
        <p id="mapholder" style={{width:'20rem'}}></p>
        </div>
      <div style={{ height: '100vh', width: '100%' }}>
        
      </div>
      </div>
    );
  }
}
 
export default Region;










//     return !this.props.isGeolocationAvailable
//       ? <div>Your browser does not support Geolocation</div>
//       : !this.props.isGeolocationEnabled
//         ? <div>Geolocation is not enabled</div>
//         : this.props.coords
//           ? <table>
//             <tbody>
//               <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
//               <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
//               <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
//             </tbody>
//           </table>
//           : <div>Getting the location data&hellip; </div>;
//   }
// }

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(Region);