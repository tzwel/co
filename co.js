function co(args, autoSlashes) {
    let result = args.toString().length > 0 ? args : '.'

    if (args.toString().length > 0 && autoSlashes) {
        result = args.join('/')
    } else {
        result = args.join('')
    } 
        
    return result.replaceAll('\\', '/')
    .replace(/\/{2,}/g, '/')
    .replace(/\/+$/g, '')
}

module.exports = co