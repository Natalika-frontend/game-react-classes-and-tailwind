import { WIN_PATTERNS } from '../constants/constants';
import { store } from '../store/store';
import { endGame, setDraw } from '../store/actions';

export const checkWin = (currentField) => {
	for (const pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (currentField[a] && currentField[a] === currentField[b] && currentField[a] === currentField[c]) {
			store.dispatch(endGame());
			store.dispatch(setDraw());
			return true;
		}
	}
	return false;
};
