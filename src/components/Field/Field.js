import { FieldLayout } from './FieldLayout/FieldLayout';
import { useEffect } from 'react';
import { useCheckWin } from '../../utils/check-win';
import { endGame, setCell } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayer, selectField, selectIsGameEnded } from '../../selectors';

export const Field = () => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();


	const checkDraw = (currentField) => {
		const isDraw = currentField.every(cell => cell !== '');
		return isDraw;
	};

	const isWin = useCheckWin(field);

	useEffect(() => {
		const isDraw = checkDraw(field);

		if (isDraw && !isWin) {
			dispatch(endGame());
		}
	}, [dispatch, field, isWin]);

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			dispatch(setCell(index, currentPlayer));
		}
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}
