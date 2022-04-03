let handler = async m => m.reply(`
🎗 *INFO :* 🎗 \n\n 🍀 groups :- 168 \n\n 🍁 chats 1390 \n\n 🎗 Clan Kakashi bot.inc 
🏮Users :- 11976
`.trim()) // repository
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
