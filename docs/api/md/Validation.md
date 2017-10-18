MODULE [Validation](https://github.com/gcanti/fp-ts/blob/master/src/Validation.ts)
# Validation

```ts
type Validation<L, A> = Failure<L, A> | Success<L, A>
```
A data-type like Either but with an accumulating `Applicative`
## Methods

### alt
```ts
(fy: Validation<L, A>): Validation<L, A> 
```
### ap
```ts
<B>(fab: Validation<L, (a: A) => B>): Validation<L, B> 
```
### ap_
```ts
<B, C>(this: Validation<L, (a: B) => C>, fb: Validation<L, B>): Validation<L, C> 
```
### bimap
```ts
<M>(S: Semigroup<M>): <B>(f: (l: L) => M, g: (a: A) => B) => Validation<M, B> 
```
### concat
```ts
(fy: Validation<L, A>): Validation<L, A> 
```
### equals
```ts
(SL: Setoid<L>, SA: Setoid<A>): (fy: Validation<L, A>) => boolean 
```
### fold
```ts
<B>(failure: (l: L) => B, success: (a: A) => B): B 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): Validation<L, B> 
```
### mapFailure
```ts
<M>(S: Semigroup<M>): (f: (l: L) => M) => Validation<M, A> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### swap
```ts
(S: Semigroup<A>): Validation<A, L> 
```
### toEither
```ts
(): Either<L, A> 
```
### toOption
```ts
(): Option<A> 
```
### toString
```ts
() 
```
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Validation<L, B>> 
```