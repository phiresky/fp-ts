MODULE [Functor](https://github.com/gcanti/fp-ts/blob/master/src/Functor.ts)
# Functor
Type class
```ts
interface Functor<F> {
  readonly URI: F
  map<A, B>(f: (a: A) => B, fa: HKT<F, A>): HKT<F, B>
}
```