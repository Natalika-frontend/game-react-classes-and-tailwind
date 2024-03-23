import styles from './information.module.css';
import PropTypes from 'prop-types';
import { store } from '../../../store/store';
import { useEffect, useState } from 'react';

export const InformationLayout = () => {
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
	return <div className={`${styles.information} ${playerClass}`}>
		{!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
		{isDraw && 'Ничья'}
		{!isDraw && isGameEnded && `Победа: ${currentPlayer === 'x' ? 'o' : 'x'}`}
	</div>;
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
