import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy,releaseBotFromArmy,dischargeBotForever }) {

const botInArmy = (bot) => {
    return true;
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {botArmy.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            releaseBotFromArmy={releaseBotFromArmy}
            dischargeBotForever={dischargeBotForever}
            botInArmy = {botInArmy}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
