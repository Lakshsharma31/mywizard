let handler = async m => {
    const grouplink = `🍁🍁well in that case sasuke support group https://chat.whatsapp.com/KLRZjtLKa890gO6xsY7l0W`
    m.reply(grouplink, m.sender) 
    m.reply('🧧🍁send you a personal message regarding this🎐🍁')
}
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support$/i

module.exports = handler
