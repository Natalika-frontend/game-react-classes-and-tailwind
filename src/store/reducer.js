import { END_GAME, RESET_GAME, SET_CELL, SET_DRAW } from './actions';
import { initialState } from './initial-state';

export const gameReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CELL:
			const { index, player } = payload;
			const newField = [...state.field];
			newField[index] = player;
			return {
				...state,
				field: newField,
				currentPlayer: player === 'x' ? 'o' : 'x',
			};
		case END_GAME:
			return { ...state,
				isGameEnded: true,
				isDraw: true,
			};
		case RESET_GAME:
			return { ...initialState };
		case SET_DRAW:
			return {
				...state,
				isDraw: false,
			};
		default:
			return state;
	}
};
