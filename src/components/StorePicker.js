import React from 'react';

class StorePicker extends React.Component {
	render() {
		// return React.createElement('p', {className: 'Testing'}, 'I love you');
		return (
			<form className="store-collector">
				{/* comment */}
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store</button>

			</form>
		)
	}
}

export default StorePicker;