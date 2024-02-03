import { StrictMode, useState } from 'react';
import { GameLayout } from './components/Game/GameLayout.js';

export const App = () => {
	const [field, setField] = useState(Array(9).fill(''));
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);


	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	];

	const checkWin = (currentField) => {
		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (currentField[a] && currentField[a] === currentField[b] && currentField[a] === currentField[c]) {
				setIsGameEnded(true);
				return;
			}
		}
	};

	const handleClick = () => {
		setCurrentPlayer('x');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);
			checkWin(newField);
			setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
			const isDraw = newField.every(cell => cell !== '');
			if (isDraw) {
				setIsDraw(true);
			}
		}
	};

	return (
		<StrictMode>
			<GameLayout field={field} handleCellClick={handleCellClick} currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} handleClick={handleClick} checkWin={checkWin} />
		</StrictMode>

	);
};
