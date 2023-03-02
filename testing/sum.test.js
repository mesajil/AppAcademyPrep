
const sum = require('./sum.js')
// import {sum} from './sum.js'

test('Properly adds two numbers', () => {
    expect(sum(1,2)).toBe(3)
})
test('Properly adds two numbers', () => {
    expect(sum(1,-1)).toBe(0)
})
test('Properly adds two numbers', () => {
    x = 33
    expect(sum(11,22)).toBe(x)
})