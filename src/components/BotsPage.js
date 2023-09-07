import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import React,{useState, useEffect}  from "react";




function BotsPage() {

  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  const fetchBots = () => {
    return fetch("http://localhost:8002/bots")
    .then((r) => r.json())
    .then((bots) => setBots(bots));
  }

  useEffect(() =>{
    fetchBots()
  },[]);


  // Adding bots to army
  const addBotToArmy = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  // Releasing bot from army
  const releaseBotFromArmy = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  // Permernently discharging bot
  const dischargeBotForever = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        releaseBotFromArmy(bot);
      })
      .catch((error) => {
        console.error('Error discharging bot:', error);
      });
  };


  return (
    <div>
      <YourBotArmy botArmy={botArmy}     releaseBotFromArmy={releaseBotFromArmy}   dischargeBotForever={dischargeBotForever}/>
      <BotCollection bots={bots}      addBotToArmy={addBotToArmy} />
    </div>
  )
}

export default BotsPage;
