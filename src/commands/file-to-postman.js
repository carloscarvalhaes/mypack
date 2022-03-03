var replaceall = require('replaceall')

const fileToPostman = {
  name: 'file-to-postman',
  run: async (toolbox) => {
    const { print, parameters, filesystem } = toolbox

    print.info('Welcome to your CLI')
    const path = parameters.first
    if (!path) return
    console.log(`PATH -> ${path}`)
    var data = filesystem.read(path)
    data = replaceall('"', '\\"', data)
    data = replaceall('\n', '', data)
    console.log(data)
  },
}

module.exports = fileToPostman
