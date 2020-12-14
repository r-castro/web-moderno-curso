// middleware chain of responsability

const passo1 = (context, next) => {
    context.value1 = 'mid1'
    next()
}

const passo2 = (context, next) => {
    context.value2 = 'mid2'
    next()
}

const passo3 = context => context.valor3 = 'mid3'

const exec = (context, ...middlewares) => {
    const execPasso = index => {
        if (middlewares && index < middlewares.length ) {
            middlewares[index](context, () => execPasso(index + 1))
        }
        //middlewares && index < middlewares.length && middlewares[index](context, () => execPasso(index + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx);