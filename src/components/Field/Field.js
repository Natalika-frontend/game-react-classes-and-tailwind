import { FieldLayout } from './FieldLayout/FieldLayout';
import { checkWin } from '../../utils/check-win';
import { endGame, setCell } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayer, selectField, selectIsGameEnded } from '../../selectors';
import { useEffect } from 'react';

export const Field = () => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();


	const checkDraw = (currentField) => {
		const isDraw = currentField.every(cell => cell !== '');
		return isDraw;
	};

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			dispatch(setCell(index, currentPlayer));
		}
	};

	useEffect(() => {
		const isDraw = checkDraw(field);
		const isWin = checkWin(field, dispatch);
		if (isDraw && !isWin) {
			dispatch(endGame());
		}
	}, [dispatch, field]);

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}
