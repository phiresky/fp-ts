MODULE [Monoid](https://github.com/gcanti/fp-ts/blob/master/src/Monoid.ts)
# Monoid
Type class
```ts
interface Monoid<A> extends Semigroup<A> {
  empty: () => A
}
```