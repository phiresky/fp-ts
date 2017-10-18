MODULE [Profunctor](https://github.com/gcanti/fp-ts/blob/master/src/Profunctor.ts)
# Profunctor
Type class
```ts
interface Profunctor<F> extends Functor<F> {
  promap<A, B, C, D>(f: (a: A) => B, g: (c: C) => D, fbc: HKT2<F, B, C>): HKT2<F, A, D>
}
```