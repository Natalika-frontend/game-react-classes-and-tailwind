import { GameLayout } from './components/GameLayout/GameLayout.js';
import { resetGame } from './store/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(resetGame());
	};

	return (
			<GameLayout	handleClick={handleClick} />
	);
};
