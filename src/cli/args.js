export const parseArgs = () => {
    let args =process.argv
    const temp = []
  for (let i = 2; i < args.length; i=i+2) {
      temp.push(`${args[i].replace('--','')} is ${args[i+1]}`)
  }
  console.log(temp.join(', '));
};

parseArgs()