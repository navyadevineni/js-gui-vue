const multiply=(x,y) => {return x * y}
const multiply = new vue({
    e1: '#multiply',
    data: {
        num1: 8,
        num2: 9
    },
    computed: {
    multiplication: function () {
        const i = parseInt(this.num1)
        const j = parseInt(this.num2)
        return `The multiplication is ${multiply(i, j)}.`
    }
}
})