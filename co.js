function co(args, autoSlashes) {
    let result = ''

    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        arg = arg.replaceAll('\\', '/')
                 .replace(/\/{2,}/g, '/')

        if (autoSlashes && i!==0 && !arg.startsWith('/') && !arg.startsWith('.')) arg = '/' + arg

        result += arg
    }

    result = result.replace(/\/+$/g, '').replace(/\/{2,}/g, '/')
    return result
}

module.exports = co