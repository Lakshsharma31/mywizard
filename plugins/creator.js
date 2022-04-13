function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '919389379221', 'ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜× ʜᴀᴛᴀᴋᴇ', m) 
  this.sendContact(m.chat, '923106212799', 'Umar baloch❤🥰', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
