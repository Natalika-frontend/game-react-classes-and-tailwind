import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({playerClass, isDraw, isGameEnded, currentPlayer }) => {

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
