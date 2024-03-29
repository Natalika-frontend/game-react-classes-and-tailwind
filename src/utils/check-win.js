import { WIN_PATTERNS } from '../constants/constants';
import { endGame, setDraw } from '../store/actions';

export const checkWin = (currentField, dispatch) => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (currentField[a] && currentField[a] === currentField[b] && currentField[a] === currentField[c]) {
			dispatch(endGame());
			dispatch(setDraw());
			return true;
		}
	}
	return false;
};
