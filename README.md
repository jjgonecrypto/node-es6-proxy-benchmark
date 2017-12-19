# Sample runs

On a MBP 13" Retina (early 2015), with 3.1GHz Core i7 and 16GB DDR3 RAM.

![image](https://cloud.githubusercontent.com/assets/799038/19325299/7eab4bec-9093-11e6-96df-b08d637202bf.png)

On the HP EliteBook 8570p, 15" 1600x900, Intel® Core™ i7-3540M CPU @ 3.00GHz × 4, 16G RAM.

```bash
$ npm start

> node-es6-proxy-benchmark@1.0.0 start /projects/node-es6-proxy-benchmark
> node sample

============================================================
Comparing getting prop from {}, new Object(), Object.assign,
Object.assign inverted, new Proxy({}) in node
------------------------------------------------------------
{ }.get			 x 80,127,065 ops/sec ±1.08% (90 runs sampled)
{ }.get cached		 x 80,346,242 ops/sec ±0.99% (90 runs sampled)
new Object.get		 x 25,315,963 ops/sec ±1.29% (85 runs sampled)
new Object.get cached	 x 79,761,986 ops/sec ±1.25% (87 runs sampled)
Object.assign		 x 5,161,764 ops/sec ±1.25% (90 runs sampled)
Object.assign cached	 x 79,561,529 ops/sec ±1.36% (88 runs sampled)
Object.assign inverted	 x 18,389,425 ops/sec ±1.09% (87 runs sampled)
Object.assign inv cache	 x 80,417,695 ops/sec ±0.88% (92 runs sampled)
new Proxy.get		 x 961,816 ops/sec ±1.20% (90 runs sampled)
new Proxy.get cached	 x 1,202,629 ops/sec ±1.36% (86 runs sampled)
-------------------------------------------------------
Object.assign inv cache	 by 84x
=======================================================
```
