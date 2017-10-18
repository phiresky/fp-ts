MODULE [Identity](https://github.com/gcanti/fp-ts/blob/master/src/Identity.ts)
# Identity

```ts
constructor(readonly value: A) {}
```
## Methods

### alt
```ts
(fx: Identity<A>): Identity<A> 
```
### ap
```ts
<B>(fab: Identity<(a: A) => B>): Identity<B> 
```
### ap_
```ts
<B, C>(this: Identity<(a: B) => C>, fb: Identity<B>): Identity<C> 
```
### chain
```ts
<B>(f: (a: A) => Identity<B>): Identity<B> 
```
### extend
```ts
<B>(f: (ea: Identity<A>) => B): Identity<B> 
```
### extract
```ts
(): A 
```
### fold
```ts
<B>(f: (a: A) => B): B 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): Identity<B> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### toString
```ts
() 
```
### traverse
```ts
<F>(applicative: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Identity<B>> 
```