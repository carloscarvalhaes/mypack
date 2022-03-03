var replaceall = require('replaceall')

const command = {
  name: 'mypack',
  run: async (toolbox) => {
    const { print, parameters } = toolbox
    const out = 'Welcome to your CLI CLI CLI askdcsadcnasdc CIL CLI CLI CIL'
    print.info(out)
    const rep = replaceall('CLI', 'CARLOS', out)
    console.log(rep)
  },
}

module.exports = command
