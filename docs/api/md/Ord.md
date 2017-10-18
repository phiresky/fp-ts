MODULE [Ord](https://github.com/gcanti/fp-ts/blob/master/src/Ord.ts)
# Ord
Type class
```ts
interface Ord<A> extends Setoid<A> {
  compare: (x: A) => (y: A) => Ordering
}
```