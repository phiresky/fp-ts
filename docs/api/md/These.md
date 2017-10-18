MODULE [These](https://github.com/gcanti/fp-ts/blob/master/src/These.ts)
# These

```ts
type These<L, A> = This<L, A> | That<L, A> | Both<L, A>
```
## Methods

### bimap
```ts
<M, B>(f: (l: L) => M, g: (a: A) => B): These<M, B> 
```
### fold
```ts
<B>(this_: (l: L) => B, that: (a: A) => B, both: (l: L, a: A) => B): B 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): These<L, B> 
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
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, These<L, B>> 
```