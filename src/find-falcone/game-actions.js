export const GAME_LOST = "GAME_RESULT/GAME_LOST";
export const GAME_WON = "GAME_RESULT/GAME_WON";
export const GAME_RESULT_LOADING = "GAME_RESULT/GAME_RESULT_PENDING";
export const GAME_RESTARTED = "GAME_RESULT/GAME_RESTARTED";

export const restartGame = dispatch => dispatch({type: GAME_RESTARTED});