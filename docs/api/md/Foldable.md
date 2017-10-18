MODULE [Foldable](https://github.com/gcanti/fp-ts/blob/master/src/Foldable.ts)
# Foldable
Type class
```ts
interface Foldable<F> {
  readonly URI: F
  reduce<A, B>(f: (b: B, a: A) => B, b: B, fa: HKT<F, A>): B
}
```