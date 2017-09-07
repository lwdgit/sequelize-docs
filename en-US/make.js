const fs = require('fs')
const { basename } = require('path')
const content = []
const root = './docs/'
fs.readdir(root, function(err, files) {
  files.forEach(file => {
    if (file.endsWith('.md') && basename(file) !== 'SUMMARY.md') {
      let summary = ' * [' + basename(file.replace(/-/g, ' ')).slice(0, -3) + '](' + root + file + ')'
      content.push(summary) 
    }
  })
  fs.writeFileSync('SUMMARY.md', content.join('\n'), 'utf8')
})
