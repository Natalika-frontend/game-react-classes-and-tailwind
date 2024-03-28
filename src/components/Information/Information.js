import { InformationLayout} from './InformationLayout/InformationLayout.js';
import { useEffect, useState } from 'react';
import { store } from '../../store/store';
import styles from './InformationLayout/information.module.css';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const { isDraw, currentPlayer, isGameEnded } = state;
	let playerClass = isDraw ? '' : (currentPlayer === 'x' ? (isGameEnded ? styles.isO : styles.isX) : (isGameEnded ? styles.isX : styles.isO));

	return <InformationLayout playerClass={playerClass} isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}  />
}

