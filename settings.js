global.nomerOwner = "79967791440"
global.ownerName = "Omen"
global.botName = "Katya chann"
global.sessionName = "session" 
global.runWith = "Termux"
global.setmenu = "document"
global.docType = "pdf"
global.Qoted = "mek"
global.textMenu = "menu2"
global.textFitur = "fitur3"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = "Reteam.id" 
global.publik = true
global.Console = false
global.textreply = "𝑯𝒚%20𝑲𝒂𝒌,%20𝑺𝒚𝒂%20𝑴𝒂𝒖%20𝑵𝒈𝒐𝒎𝒐𝒏𝒈%20𝑲𝒂𝒍𝒐%20𝑺𝒂𝒚𝒂%20𝑳𝒂𝒈𝒊%20𝑮𝒂𝒚"
global.On = "On"
global.Off = "Off"
global.setwelcome = "type3"
global.setintro = "Welcome Kak Jangan Lupa Intro \nDan Baca Rules Group"
global.setoutro = "Leave message\nNitip seblak"
global.packName = "immortal"
global.authorName = "Crew"
global.replyType = "web2"
global.autoblockcmd = false
global.autoblockcmd = false
global.autoReport = false
global.autoLevel = true
global.autoSticker = false
global.autovn = true
global.orquoted = false
global.chatBot = false
global.autorespon = false
global.antiSpam = true
global.gamewaktu = 60
global.waktu = 60000,
global.monayawal = 1000,
global.limitawal = 20,
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}






const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






