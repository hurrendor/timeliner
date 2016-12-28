import React from 'react'
import { render } from ('react-dom')
// import EventCard from './Event'
var div = React.DOM.div
var h1 = React.DOM.h1

var EventCard = require('./EventCard')
var Timeline = React.createClass({
  render: function () {
    return (
      <div class="col-xs-10 col-sm-11 timeline active-timeline">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLaoHSOkY5o2IcsHF3tbvAN6ESfHpMg8ErcWyYDkgs-NV3oIxa3Z2xiU" />
      </div>
    )
  }
})

render(React.createElement(Timeline), document.getElementById('container'))
// export default Timeline
