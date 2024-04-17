import { InformationLayout} from './InformationLayout/InformationLayout.js';
import styles from './InformationLayout/information.module.css';
import { connect } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';
import { Component } from 'react';

class Information extends Component {
	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		let playerClass = isDraw ? '' : (currentPlayer === 'x' ? (isGameEnded ? styles.isO : styles.isX) : (isGameEnded ? styles.isX : styles.isO));

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

