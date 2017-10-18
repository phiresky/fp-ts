MODULE [Either](https://github.com/gcanti/fp-ts/blob/master/src/Either.ts)
# Either

```ts
type Either<L, A> = Left<L, A> | Right<L, A>
```
## Methods

### alt
```ts
(fy: Either<L, A>): Either<L, A> 
```
### ap
```ts
<B>(fab: Either<L, (a: A) => B>): Either<L, B> 
```
### ap_
```ts
<B, C>(this: Either<L, (a: B) => C>, fb: Either<L, B>): Either<L, C> 
```
### bimap
```ts
<V, B>(f: (l: L) => V, g: (a: A) => B): Either<V, B> 
```
### chain
```ts
<B>(f: (a: A) => Either<L, B>): Either<L, B> 
```
### extend
```ts
<B>(f: (ea: Either<L, A>) => B): Either<L, B> 
```
### fold
```ts
<B>(left: (l: L) => B, right: (a: A) => B): B 
```
### getOrElse
```ts
(f: (l: L) => A): A 
```
Returns the value from this `Right` or the given argument if this is a `Left`
### getOrElseValue
```ts
(a: A): A 
```
### inspect
```ts
(): string 
```
### map
```ts
<B>(f: (a: A) => B): Either<L, B> 
```
### mapLeft
```ts
<M>(f: (l: L) => M): Either<M, A> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### toOption
```ts
(): Option<A> 
```
### toString
```ts
(): string 
```
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Either<L, B>> 
```