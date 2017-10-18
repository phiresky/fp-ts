MODULE [NonEmptyArray](https://github.com/gcanti/fp-ts/blob/master/src/NonEmptyArray.ts)
# NonEmptyArray

```ts
constructor(readonly head: A, readonly tail: Array<A>) {}
```
## Methods

### ap
```ts
<B>(fab: NonEmptyArray<(a: A) => B>): NonEmptyArray<B> 
```
### ap_
```ts
<B, C>(this: NonEmptyArray<(a: B) => C>, fb: NonEmptyArray<B>): NonEmptyArray<C> 
```
### chain
```ts
<B>(f: (a: A) => NonEmptyArray<B>): NonEmptyArray<B> 
```
### concat
```ts
(y: NonEmptyArray<A>): NonEmptyArray<A> 
```
### concatArray
```ts
(as: Array<A>): NonEmptyArray<A> 
```
### extend
```ts
<B>(f: (fa: NonEmptyArray<A>) => B): NonEmptyArray<B> 
```
### extract
```ts
(): A 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): NonEmptyArray<B> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### toArray
```ts
(): Array<A> 
```
### toString
```ts
() 
```
### traverse
```ts
<F>(applicative: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, NonEmptyArray<B>> 
```