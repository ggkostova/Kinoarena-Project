let delayFunction = (func, args) => {
    if (args.length === 2) {
        setTimeout(() => {
            func(...args);
        }, 500)
    } else {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(func(...args))
            }, 500)
        })
    }
}

export default delayFunction;