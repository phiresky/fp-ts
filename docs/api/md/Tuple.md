MODULE [Tuple](https://github.com/gcanti/fp-ts/blob/master/src/Tuple.ts)
# Tuple

```ts
constructor(readonly value: [L, A]) {}
```
## Methods

### bimap
```ts
<M, B>(f: (l: L) => M, g: (a: A) => B): Tuple<M, B> 
```
### compose
```ts
<B>(ab: Tuple<A, B>): Tuple<L, B> 
```
### extend
```ts
<B>(f: (fa: Tuple<L, A>) => B): Tuple<L, B> 
```
### extract
```ts
(): A 
```
### fst
```ts
(): L 
```
### inspect
```ts
(): string 
```
### map
```ts
<B>(f: (a: A) => B): Tuple<L, B> 
```
### reduce
```ts
<B>(f: (c: B, b: A) => B, c: B): B 
```
### snd
```ts
(): A 
```
### toString
```ts
(): string 
```
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Tuple<L, B>> 
```