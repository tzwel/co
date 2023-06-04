function co(args, autoSlashes) {
    let result = args.toString().length > 0 ? args : '.'

    if (args.toString().length > 0) {
        if (autoSlashes) {
            result = args.join('/')
        } else {
            result = args.join('')
        } 
    }
        
    result = result.replaceAll('\\', '/')
    .replace(/\/{2,}/g, '/')
    .replace(/\/+$/g, '')

    return result
}

module.exports = co