import { FieldLayout } from './FieldLayout/FieldLayout';
import { checkWin } from '../../utils/check-win';
import { endGame, setCell } from '../../store/actions';
import { selectCurrentPlayer, selectField, selectIsGameEnded } from '../../selectors';
import { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
	constructor(props) {
		super(props);
		this.handleCellClick = this.handleCellClick.bind(this);
	}

	handleCellClick(index) {
		const { field, isGameEnded, currentPlayer, dispatch } = this.props;
		if (!field[index] && !isGameEnded) {
			dispatch(setCell(index, currentPlayer));
		}
	}

	componentDidUpdate(prevProps) {
		const { field, dispatch } = this.props;
		const { field: prevField } = prevProps;
		const isDraw = field.every(cell => cell !== '');
		const isWin = checkWin(field, dispatch);
		if (isDraw && !isWin && field !== prevField) {
			dispatch(endGame());
		}
	}

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} handleCellClick={this.handleCellClick} />
	}
}

const mapStateToProps = state => ({
	field: selectField(state),
	isGameEnded: selectIsGameEnded(state),
	currentPlayer: selectCurrentPlayer(state),
});

export default connect(mapStateToProps)(Field);
