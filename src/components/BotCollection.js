import BotCard from "./BotCard";

function BotCollection({bots,addBotToArmy}) {

  return (
    <div className="ui four column grid">
      <div className="row">
      Collection of all bots
      <ul class="bot-list">
      {bots.map((bot) => {
        return (
      <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy}/>
      );
    })}
    </ul>

      </div>
    </div>
  );
}

export default BotCollection;
