let handler = async m => m.reply(`
🎗 *INFO :* 🎗 \n\n 
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
