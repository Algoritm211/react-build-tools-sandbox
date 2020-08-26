

export default class Calc {
    add(...args){
        return args.reduce((a, b) => {
            return a + b
        }, 0)
    }
}