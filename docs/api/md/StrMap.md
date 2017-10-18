MODULE [StrMap](https://github.com/gcanti/fp-ts/blob/master/src/StrMap.ts)
# StrMap

```ts
constructor(readonly value: { [key: string]: A }) {}
```
## Methods

### map
```ts
<B>(f: (a: A) => B): StrMap<B> 
```
### mapWithKey
```ts
<B>(f: (k: string, a: A) => B): StrMap<B> 
```
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, StrMap<B>> 
```
### traverseWithKey
```ts
<F>(F: Applicative<F>): <B>(f: (k: string, a: A) => HKT<F, B>) => HKT<F, StrMap<B>> 
```