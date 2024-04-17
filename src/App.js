import { GameLayout } from './components/GameLayout/GameLayout.js';
import { resetGame } from './store/actions';
import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { dispatchResetGame } = this.props;
		dispatchResetGame();
	};

	render() {
		return (
			<GameLayout handleClick={this.handleClick} />
		);
	}
};

const mapDispatchToProps = dispatch => ({
	dispatchResetGame: () => dispatch(resetGame())
});

export default connect(null, mapDispatchToProps)(App);
