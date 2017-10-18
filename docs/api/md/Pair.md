MODULE [Pair](https://github.com/gcanti/fp-ts/blob/master/src/Pair.ts)
# Pair

```ts
constructor(readonly value: [A, A]) {}
```
## Methods

### ap
```ts
<B>(fab: Pair<(a: A) => B>): Pair<B> 
```
### ap_
```ts
<B, C>(this: Pair<(a: B) => C>, fb: Pair<B>): Pair<C> 
```
### extend
```ts
<B>(f: (fb: Pair<A>) => B): Pair<B> 
```
### extract
```ts
(): A 
```
### first
```ts
(f: Endomorphism<A>): Pair<A> 
```
Map a function over the first field of a pair
### fst
```ts
(): A 
```
### map
```ts
<B>(f: (a: A) => B): Pair<B> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### second
```ts
(f: Endomorphism<A>): Pair<A> 
```
Map a function over the second field of a pair
### snd
```ts
(): A 
```
### swap
```ts
(): Pair<A> 
```
Swaps the elements in a pair
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Pair<B>> 
```