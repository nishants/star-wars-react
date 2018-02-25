import React from 'react';
import {connect} from 'react-redux';
import {maxMissions} from '../../config';

const GameProgress = ({progressState})=> (
    <div className={'game-progress ' + progressState}>
    </div>
);

const mapStateToProps = ({missions})=> {
  const remaining = maxMissions - missions.length;
  return {
    progressState: {
      4: "zero",
      3: "one",
      2: "two",
      1: "three",
      0: "four",
    }[remaining]
  };
}
export default connect(mapStateToProps)(GameProgress);