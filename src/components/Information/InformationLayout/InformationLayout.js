import PropTypes from 'prop-types';
import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		const { playerClass, isDraw, isGameEnded, currentPlayer } = this.props;

		return (
			<div className={`information ${playerClass}`}>
				{!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
				{isDraw && 'Ничья'}
				{!isDraw && isGameEnded && `Победа: ${currentPlayer === 'x' ? 'o' : 'x'}`}
			</div>
		);
	}
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
