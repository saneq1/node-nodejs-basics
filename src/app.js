let bb =[
    'C:\\Program Files\\nodejs\\node.exe',
    'D:\\test\\node-nodejs-basics\\src\\cli\\args.js',
    '--dfs',
    'sddf',
    '--sdfa',
    '23'
  ]

  const temp = []
  for (let i = 2; i < bb.length; i=i+2) {
      temp.push(`${bb[i].replace('--','')} is ${bb[i+1]}`)
      console.log(bb[i]);
  }

  temp.join(', ');//?