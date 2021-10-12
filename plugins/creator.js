let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6289678391870', 'Aryagilangあ', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
