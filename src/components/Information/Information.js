import { InformationLayout} from './InformationLayout/InformationLayout.js';
import { connect } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import { Component } from 'react';

class Information extends Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		let playerClass = isDraw ? '' : (currentPlayer === 'x' ? (isGameEnded ? "isO" : "isX") : (isGameEnded ? "isX" : "isO"));

		return (
			<InformationLayout playerClass={playerClass} isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: selectIsDraw(state),
	isGameEnded: selectIsGameEnded(state),
	currentPlayer: selectCurrentPlayer(state),
});

export default connect(mapStateToProps)(Information);

