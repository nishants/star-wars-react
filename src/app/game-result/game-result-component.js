import React from 'react';
import {connect} from 'react-redux';
import {GAME_RESTARTED} from './game-result-actions';

const GameResult = ({gameResult, restart})=> {
  const
      showResult = gameResult.loading || gameResult.lost|| gameResult.won,
      show    = showResult ? "show " : "",
      loading = gameResult.loading  ? "loading " : "",
      won     = gameResult.won      ? "won "      : "",
      lost    = gameResult.lost     ? "lost "     : "",
      gameResultState =  show + loading + won + lost;

  return (
      <div id='game-result' className={'modal-window ' + gameResultState}>
        <div className='content title-text'>
          <div className='lost message'>
            <h1>You Loose !</h1>
            <h3>Falcone was not found on any of the selected planet.</h3>
          </div>
          <div className='won message'>
            <h1>You Won !</h1>
            <h3>Falcone was found on {gameResult.planetFound}.</h3>
          </div>
          <div className='restart'>
            <button onClick={restart}> Play Again</button>
          </div>
          <div className='h1 loader'>
            <span className='fa fa-circle-o-notch fa-spin'></span>
          </div>
        </div>
      </div>
  )
};

const mapStateToProps= ({gameResult})=> ({gameResult});

const mapDispatchToProps= (dispatch)=> ({restart: ()=> dispatch({type: GAME_RESTARTED})});

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);