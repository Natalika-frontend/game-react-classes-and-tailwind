export const SET_CELL = 'SET_CELL';
export const END_GAME = 'END_GAME';
export const RESET_GAME = 'RESET_GAME';
export const SET_DRAW = 'SET_DRAW';

export const setCell = (index, player) => ({
	type: SET_CELL,
	payload: { index, player },
});


export const endGame = (isDraw) => ({
	type: END_GAME,
	isDraw: isDraw,
});

export const resetGame = () => ({
	type: RESET_GAME,
});

export const setDraw = () => ({
	type: SET_DRAW,
});
