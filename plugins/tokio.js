let handler = async m => m.reply(`
๐ *INFO :* ๐ \n\n ๐ groups :- 168 \n\n ๐ chats 1390 \n\n ๐ Clan Kakashi bot.inc 
๐ฎUsers :- 11976
`.trim()) // repository
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
