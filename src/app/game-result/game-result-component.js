import React from 'react';
import {connect} from 'react-redux';

const GameResult = ({gameResult})=> {
  const
      showResult = gameResult.loading || gameResult.lost|| gameResult.won,
      show    = showResult ? "show " : "",
      loading = gameResult.loading  ? "loading " : "",
      won     = gameResult.won      ? "won "      : "",
      lost    = gameResult.lost     ? "lost "     : "",
      gameResultState =  show + loading + won + lost;

  return (
      <div id='game-result' className={gameResultState}>
        <div className='lost message'>
          <h1>You Loose !</h1>
          <h3>Falcone was not found on any of the selected planet.</h3>
        </div>
        <div className='lost message'>
          <h1>You Won !</h1>
          <h3>Falcone was found on {gameResult.planetFound}.</h3>
        </div>

      </div>
  )
};

const mapStateToProps= ({gameResult})=> ({gameResult});

const mapDispatchToProps= ()=> {};

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);