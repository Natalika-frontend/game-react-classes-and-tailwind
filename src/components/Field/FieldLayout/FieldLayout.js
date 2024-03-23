import styles from './Field.module.css';
import PropTypes from 'prop-types';
import { store } from '../../../store/store';
import { endGame, setCell } from '../../../store/actions';
import { useEffect, useState } from 'react';
import { checkWin } from '../../../utils/check-win';

export const FieldLayout = () => {
	const [state, setState] = useState(store.getState());

	const updateState = () => {
		setState(store.getState());
	};

	const checkDraw = (currentField) => {
		const isDraw = currentField.every(cell => cell !== '');
		return isDraw;
	};

	useEffect(() => {
		const unsubscribe = store.subscribe(updateState);

		updateState();

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		const isDraw = checkDraw(state.field);
		const isWinner = checkWin(state.field);

		if (isDraw && !isWinner) {
			store.dispatch(endGame());
		}
	}, [state.field]);

	const handleCellClick = (index) => {
		const { field, isGameEnded, currentPlayer } = state;
		if (!field[index] && !isGameEnded) {
			store.dispatch(setCell(index, currentPlayer));
		}
	};

	return <div className={styles.field}>
		{state.field.map((value, index) => (
			<button key={index}
					className={`${styles.cell} ${value === 'x' ? styles['isX'] : value === 'o' ? styles['isO'] : ''}`}
					onClick={() => handleCellClick(index)}>{value}</button>
		))}
	</div>;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClicksDraw: PropTypes.func,
};
