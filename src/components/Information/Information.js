import { InformationLayout} from './InformationLayout/InformationLayout.js';
import styles from './InformationLayout/information.module.css';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';

export const Information = () => {
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	let playerClass = isDraw ? '' : (currentPlayer === 'x' ? (isGameEnded ? styles.isO : styles.isX) : (isGameEnded ? styles.isX : styles.isO));

	return <InformationLayout playerClass={playerClass} isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}  />
}

