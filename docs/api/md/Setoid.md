MODULE [Setoid](https://github.com/gcanti/fp-ts/blob/master/src/Setoid.ts)
# Setoid
Type class
```ts
interface Setoid<A> {
  equals: (x: A) => (y: A) => boolean
}
```