let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `γ€
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), devil, 'cπ\n\ββββββββββββ\n\ββββββββββββ\n\ββββββ β£βββββ\n\ββββββββββββ \n\n\ https://Instagram.com/kakashi_0.3\n\n\ Β© follow karle londeβ©' , 'β€οΈ', '.β€οΈ', 'π', ',π')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
