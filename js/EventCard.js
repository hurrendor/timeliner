import React from 'react'

const EventCard = React.createClass({
  render: function() {
    const { src, header, year, description } = this.props
  	return (<div className="timeline-event">
    	<article>
      	<img src={src} />
      	<h2>{header}</h2>
        <h3>{year}</h3>
        <p>{description}</p>
      </article>
    </div>
    )
  }
})

module.exports = EventCard
export default EventCard
