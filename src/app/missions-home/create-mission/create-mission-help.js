import {maxMissions} from '../../config';

var Help = {
  message: function (missionsAssigned) {
    const missionsRemaining = maxMissions - missionsAssigned;
    return Help.states.find(function (state) {
      return state.select(missionsAssigned, missionsRemaining);
    }).message(missionsAssigned, missionsRemaining);
  },

  states: [
    {
      name: "no-missions",
      message: function () {
        return "Create a mission";
      },
      select: function (missionsAssigned) {
        return missionsAssigned === 0;
      },
    },
    {
      name: "need-more-missions",
      message: function (missionsAssigned, missionsRemaining) {
        var moreThanOne = missionsRemaining > 1;
        return "Create <count> more mission<s>".replace("<count>", missionsRemaining).replace("<s>", moreThanOne ? "s" : "");
      },
      select: function (missionsAssigned, missionsRemaining) {
        return missionsAssigned > 0 && missionsRemaining > 0;
      },
    },
    {
      name: "send-mission",
      message: function () {
        return "Send Missionaries";
      },
      select: function (missionsAssigned, missionsRemaining) {
        return missionsRemaining === 0;
      },
    }

  ]
};


export default Help;