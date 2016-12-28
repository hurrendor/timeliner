  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('react')
  );
//add click handler to the timeliner button
  // var clickTimelineHandler = function clickTimelineHandler() {
    var reactNodeLi = React.createElement('li', {id:'li1'}, 'one');
    ReactDOM.render( reactNodeLi, document.getElementById('react') );
// }
