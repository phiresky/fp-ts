MODULE [Unfoldable](https://github.com/gcanti/fp-ts/blob/master/src/Unfoldable.ts)
# Unfoldable
Type class
```ts
interface Unfoldable<F> {
  readonly URI: F
  unfoldr: <A, B>(f: (b: B) => option.Option<[A, B]>, b: B) => HKT<F, A>
}
```
This class identifies data structures which can be _unfolded_, generalizing `unfoldr` on arrays.