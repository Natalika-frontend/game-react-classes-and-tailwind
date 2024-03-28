import { StrictMode } from 'react';
import { GameLayout } from './components/GameLayout/GameLayout.js';
import { store } from './store/store';
import { resetGame } from './store/actions';

export const App = () => {
	const handleClick = () => {
		store.dispatch(resetGame());
	};
	return (
		<StrictMode>
			<GameLayout	handleClick={handleClick} />
		</StrictMode>

	);
};
