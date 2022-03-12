let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `🎐🤍ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜×🎐🤍
%readmore`.trimStart(),
  header: '🤍✨ %category✨🤍 ',
  body: '├ %cmd',
  footer: '└────\n',
   
  after: `𝙘𝙤𝙢𝙚 𝙖𝙜𝙖𝙞𝙣 𝙗𝙮𝙚 𝙗𝙮𝙚 𝙗𝙧𝙤
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['git', 'game', 'xp', 'stiker','quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools','anime','videomaker', 'fun', 'database', 'audio','info','owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Main',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'anime': 'Anime',
    'sticker': 'Stiker',
    'shell': 'Magic Shells',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Disabled)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'Video Maker':'videomaker',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'audio': 'Voice Changer',
    'info': 'Info',
    '': 'No Category',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'shell') tags = {
    'shell': 'Magic Shells'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Disabled)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'videomaker') tags = {
    'videomaker': 'Video Maker'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'audio') tags = {
    'audio': 'Voice Changer'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `🤍🧧 *KONNICHIWA* 🧧🤍,


  🎐🎐  ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜× here🎐🎐 

    ❲ .•♫•Your About•♫•. ❳
    
   ${ucapan()}
🧧 *NAME* : ${name}
🧧 *TIME* : ${time},
🧧 *WEEK* : ${week},
🧧 *DATE* : ${date},
🧧 *OWNER* : ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜× 
🧧 *PREFIX* : ᴍᴜʟᴛɪ ᴘʀᴇғɪx 
🧧 *BOT NAME* : ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜×
└─────────────────⸙ \n\ ______`
          
           .trim(),
           "description": "*use #support to join our group*",
          "buttonText": "Click  Here",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `*COMMAND LIST*`,
                  "description": "ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜× Instagram link",
                  "rowId": ".git"
                }, {
                  "title": "🎐Game menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? game"

                }, {
                  "title": "🧧XP menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? xp"

                },  {
                  "title": "🎐Video Maker Menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? .videomaker"

                },{
                  "title": "🧧Sticker side🧧",
                  "description": "Features for making stickers",
                  "rowId": ".? stiker"
                }, { 
                "title": "🎐Anime Menu🎐",
                "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                "rowId": ".? anime"
              },  {
                  "title": "Quotes",
                  "description": "Gives You random quotes",
                  "rowId": ".? quote"
                }, {
                  "title": "🧧Admin Side🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? admin"
                }, {
                  "title": "🎐Group Menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? grup"
                }, {
                  "title": "🧧Premium Menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? premium"
                }, {
                  "title": "🎐Media side🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? internet"
                }, {
                  "title": "🧧Anonymous chat menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? anonymous"
                }, {
                  "title": "🎐Random answer Menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": `.? magicshell`
                }, {
                  "title": "🧧Nulis & Logo Menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? nulis"
                }, {
                  "title": "🎐Downloader Menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? downloader"
                }, {
                  "title": "🧧Tools Menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? tools"
                }, {
                  "title": "🎐Voice Changer Menu🎐",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": `.? audio`
                }, {
                  "title": "🧧Fun menu🧧",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? fun"
                }, {
                  "title": "🎐Database Menu🎐",
                  "description": "ـہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? database"
                },{
                  "title": "Owner menu",
                  "description": "ــہہـــــــــــــــــــــ٨ــــــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــہـــــــــــــــــــــ❥ــ٨ــــــــــــــــــــــــــــ",
                  "rowId": ".? owner"
                }
              ]
            }
          ], "contextInfo": {
            "stanzaId": m.key.id,
            "participant": m.sender,
            "quotedMessage": m.message
          }
        }
      }, {}), { waitForAck: true })
    }
    // use this if you use business whatsapp
    //   throw `
    // ┌〔 LIST MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://telegra.ph/file/399e895d9896a2cef5fd5.jpg")).buffer(), text.trim(), '© nezuko ©', 'Owner Bot', ',owner', 'All Commands', '.? all', m)
  } catch (e) {
    conn.reply(m.chat, 'Sorry, Try Again', m)
    throw e
  }
}
handler.help = ['h', 'help','cmd','sax', '?']
handler.tags = ['main']
handler.command = /^(help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "Good Morning ❤"
  if (time >= 4) {
    res = "Good Morning ❤"
  }
  if (time > 10) {
    res = "Good afternoon 🤍"
  }
  if (time >= 15) {
    res = "Good Evening 💘"
  }
  if (time >= 18) {
    res = "Good Night 🌌"
  }
  return res
}
