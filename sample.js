'use strict'

const Benchmark = require('benchmark')

const suite = new Benchmark.Suite

const p = {
    get(target, name) {
        return target[name]
    }
}

console.log('-------------------------------------------------------')
console.log('Comparing {}, to new Object(), to new Proxy({}) in node')
console.log('-------------------------------------------------------')

suite.add('{ }.get\t\t', function() {
    const obj = { x: 123 }
    obj.x++
}).add('new Object.get\t', function() {
    const obj = new Object({ x: 123 })
    obj.x++
}).add('new Proxy.get\t', function() {
    const obj = new Proxy({ x: 123 }, p)
    obj.x++
}).on('cycle', function(event) {
    console.log(String(event.target))
}).on('complete', function() {
    const faster = this.filter('fastest')[0]
    const slower = this.filter('slowest')[0]
    console.log('--------------------------------------------------')
    console.log(`${faster.name} by ${Math.round(faster.hz / slower.hz)}x`)
})
// run async
.run({ 'async': true })
