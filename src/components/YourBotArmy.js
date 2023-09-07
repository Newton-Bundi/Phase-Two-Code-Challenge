import React from "react";

function YourBotArmy({botArmy,releaseBotFromArmy,dischargeBotForever }) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {botArmy.map((bot) => (
          <Bot
            key={bot.id}
            bot={bot}
            releaseBotFromArmy={releaseBotFromArmy}
            dischargeBotForever={dischargeBotForever}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
