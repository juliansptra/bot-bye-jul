let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*[ ~TRUTH~ | DARE ]*\n\n“${pickRandom(global.dare)}”`, m)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.dare = [
"Ajak orang yang tidak kamu kenal untuk selfie berdua dengan mu lalu upload ke snapgram",
"Ambil beberapa nomor dari kontakmu secara acak dan kirim sms *Aku hamil* sama mereka.",
"Ambil minuman apa saja yang ada didekat mu lalu campurkan dengan cabai dan minum!",
"Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang *Aku mencintaimu*",
"Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu *Ini adalah makanan yang paling mahal yang pernah kubeli*",
"pilih 1 orang yang ada disini, terus kamu maki dia\nkatain aja gpp sumpa gpp demi alek",
"confess ke crush kamu sekarang!",
"Berdiri di tengah lapangan basket dan berteriak, *AKU MENCINTAIMU PANGERANKU/PUTRIKU*",
"Beri hormat pada orang yang lewat di depan kamu sekarang*",
"foto pose terkonyol kamu,lalu upload ke story wa/ig",
"Berlutut satu kaki dan bilang *Marry me?* sama orang pertama yang masuk ke ruangan.",
"call mantan kamu, lalu bilang *AKU MASIH SAYANG SAMA KAMU, MAU BALIK KAYA DULU LAGI GA?*",
"Bilang *KAMU CANTIK/GANTENG BANGET NGGAK BOHONG* sama cewek/cowok yang menurutmu paling cantik/ganteng.",
"gombalin orang yang ada disekitar kamu *temen,sahabat,lawanjenis,atau admin grup gc*\n\n(admin gc tempat kamu bermain ToD)",
"menyanyikan lagu balonku dengan huruf vokal diganti menjadi *O*\nVN lalu kirim kesini",
"Cabut bulu kaki mu sendiri sebanyak 3 kali!",
]
