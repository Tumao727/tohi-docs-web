const fs = require('fs')

const setup = () => {
  // copy sidebar file
  fs.copyFileSync('towhee/docs/sidebar.js', './sidebar.js')
}

setup()