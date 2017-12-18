'use strict'

const Benchmark = require('benchmark')

const suite = new Benchmark.Suite

const p = {
    get(target, name) {
        return target[name]
    }
}

const get = () => ({ x: 123 })
const newObj = () => new Object({ x: 123 })
const assign = () => Object.assign({}, { x: 123 })
const invAssign = () => Object.assign({ x: 123 }, {})
// const spread = () => ({ ...{}, ...{ x: 123 } })
// const invSpread = () => ({ ...{ x: 123 }, ...{} })
const proxy = () => new Proxy({ x: 123 }, p)

const cachedGet = get()
const cachedNewObj = newObj()
const cachedAssign = assign()
const cachedInvAssign = invAssign()
// const cachedSpread = spread()
// const cachedInvSpread = invSpread()
const cachedProxy = proxy()

console.log('-------------------------------------------------------')
console.log('Comparing {}, to new Object(), to new Proxy({}) in node')
console.log('-------------------------------------------------------')

suite
    .add('{ }.get\t\t\t', () => {
        get().x++
    })
    .add('{ }.get cached\t\t', () => {
        cachedGet.x++
    })
    .add('new Object.get\t\t', () => {
        newObj().x++
    })
    .add('new Object.get cached\t', () => {
        cachedNewObj.x++
    })
    .add('Object.assign\t\t', () => {
        assign().x++
    })
    .add('Object.assign cached\t', () => {
        cachedAssign.x++
    })
    .add('Object.assign inverted\t', () => {
        invAssign().x++
    })
    .add('Object.assign inv cache\t', () => {
        cachedInvAssign.x++
    })
    // .add('spread\t\t\t', () => {
    //     spread().x++
    // })
    // .add('spread cached\t\t', () => {
    //     invSpread.x++
    // })
    // .add('spread inverted\t\t', () => {
    //     cachedSpread().x++
    // })
    // .add('spread inv cache\t\t', () => {
    //     cachedInvSpread.x++
    // })
    .add('new Proxy.get\t\t', () => {
        proxy().x++
    })
    .add('new Proxy.get cached\t', () => {
        cachedProxy.x++
    })
    .on('cycle', (event) => {
        console.log(String(event.target))
    })
    .on('complete', function () {
        const faster = this.filter('fastest')[0]
        const slower = this.filter('slowest')[0]
        console.log('--------------------------------------------------')
        console.log(`${faster.name} by ${Math.round(faster.hz / slower.hz)}x`)
    })
    // run async
    .run({ 'async': true })
