let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa/Gopay [089678391870]
│ • OVO/DANA [089678391870]
│ • Saweria https://saweria.co/Aryagilang
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
