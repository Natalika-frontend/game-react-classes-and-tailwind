import styles from './Game.module.css';
import Field from '../Field/Field';
import Information from '../Information/Information';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class GameLayout extends Component {
	render() {
		const { handleClick } = this.props;
		return (
			<div className={styles.container}>
				<Information />
				<Field />
				<button className={styles.btn} onClick={handleClick}>Начать заново</button>
			</div>
	)
	}
};

GameLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	handleClick: PropTypes.func,
};
