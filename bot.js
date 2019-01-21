client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("436969637964546118").roles.find("name", "EZ").edit({
            color : "RANDOM"
        });
    }, 60000)
});

client.login(process.env.BOT_TOKEN);
