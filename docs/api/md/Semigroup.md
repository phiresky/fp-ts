MODULE [Semigroup](https://github.com/gcanti/fp-ts/blob/master/src/Semigroup.ts)
# Semigroup
Type class
```ts
interface Semigroup<A> {
  concat: (x: A) => (y: A) => A
}
```