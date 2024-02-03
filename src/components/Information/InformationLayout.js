import styles from '../Information/information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	let playerClass = isDraw ? '' : (currentPlayer === 'x' ? (isGameEnded ? styles.isO : styles.isX) : (isGameEnded ? styles.isX : styles.isO));
	return <div className={`${styles.information} ${playerClass}`}>
		{isDraw && 'Ничья'}
		{!isDraw && isGameEnded && `Победа: ${currentPlayer === 'x' ? 'o' : 'x'}`}
		{!isDraw && !isGameEnded && `Ходит: ${currentPlayer}`}
	</div>;
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
