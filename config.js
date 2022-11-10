const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6289603732786'] //ur owner number
global.ownername = "🜲⁩•︻ཉོ༙ཬ❰❰𝘽𝙖𝙣𝙝 𝘿𝙞𝙢𝙨❱❱❱章브๏❨𝙓𝙔𝙕❩๏ຼົะ»•🜲⁩" //ur owner name
global.ytname = "Grup: https://chat.whatsapp.com/KI0v2RruYCUKllCfhyKWP3" //ur yt chanel name
global.socialm = "IG: http://instagram.com/banh_dims0?utm_source=qr"//ur github or insta name
global.location = "Indonesia, Jawa Tengah, Boyolali" //ur location

//bot bomdy 
global.owner = ['6289603732786'] //ur number
global.ownernomer = "6289603732786" //ur number
global.ownertag = '6289603732786' //ur tag number
global.premium = ['6289603732786'] //ur premium number
global.botname = '🜲•^•𝘿𝙞𝙢𝙖𝙨 𝘽𝙤𝙩𝙯𝙯•^•🜲⁩' //ur bot name
global.ownername = "🜲⁩•︻ཉོ༙ཬ❰❰𝘽𝙖𝙣𝙝 𝘿𝙞𝙢𝙨❱❱❱章브๏❨𝙓𝙔𝙕❩๏ຼົะ»•🜲⁩"
global.linkz = "https://chat.whatsapp.com/KI0v2RruYCUKllCfhyKWP3" //your theme url which will be displayed on whatsapp
global.websitex = "http://instagram.com/banh_dims0?utm_source=qr" //ur website to be displayed
global.botscript = '🜲⁩ Beli Ke Sini🗿 wa.me/6289603732786 🜲⁩' //script link
global.themeemoji = "🇲🇨" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "🜲•^•𝘿𝙞𝙢𝙖𝙨 𝘽𝙤𝙩𝙯𝙯•^•🜲⁩" //ur sticker watermark author
global.wm = "🜲•^•𝘿𝙞𝙢𝙖𝙨 𝘽𝙤𝙩𝙯𝙯•^•🜲⁩" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Selesai Kak✓',
    admin: 'Fitur Khusu Untuk Admin Kak🐶',
    botAdmin: 'Dimas Bot Harus Menjadi Admin Dlu Kak😞',
    premime: 'Fitur Spesial Premium Jika Anda Ingin Mendaftar Premium Chat Owner',
    owner: 'Fitur Ini Hanya Dapat Di Gunakan Oleh Pemilik Bot',
    group: 'Fitur Ini Hanya Dapat Di Gunakan Di Dalam Grup',
    private: 'Fitur Ini Hanya Dapat Di Gunakan Di Chat Pribadi',
    bot: 'Fitur Ini Hanya Dapat Di Gunakan Oleh Bot',
    wait: 'Sedang Di Proses Kak.....🧐',
    linkm: 'Link Nya Mana Asw?🤓',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap 12 Jam',
    nsfw: 'Fitur Nsfw Belum Diaktifkan, Silahkan Hubungi Admin Untuk Mengaktifkan',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
