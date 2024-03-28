import { FieldLayout } from './FieldLayout/FieldLayout';
import { useEffect, useState } from 'react';
import { store } from '../../store/store';
import { checkWin } from '../../utils/check-win';
import { endGame, setCell } from '../../store/actions';

export const Field = () => {
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

	return <FieldLayout state={state} handleCellClick={handleCellClick} />;
}
