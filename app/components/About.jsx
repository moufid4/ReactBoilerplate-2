var React = require('react');

// var About = React.createClass({
// 	render: function() {
// 		return (
// 			<h3>About Component</h3>
// 		)
// 	}
// });

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p className="text-center">This is a weather application buit on React.</p>
		</div>
	)
};

module.exports = About;