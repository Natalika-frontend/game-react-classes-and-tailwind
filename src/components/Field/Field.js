import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({ field, handleCellClick }) => {

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}

Field.propTypes = {
	find: PropTypes.array,
	handleCellClicksDraw: PropTypes.func
};
