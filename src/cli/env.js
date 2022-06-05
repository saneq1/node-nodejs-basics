export const parseEnv = () => {
    const temp = []
    for (const key in process.env) {
        if(key.startsWith('RSS_')){
            temp.push(`${key}=${process.env[key]}`)
        }
    }
    console.log(temp.join('; '))
};

parseEnv()