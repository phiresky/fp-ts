MODULE [Extend](https://github.com/gcanti/fp-ts/blob/master/src/Extend.ts)
# Extend
Type class
```ts
interface Extend<F> extends Functor<F> {
  extend<A, B>(f: (fa: HKT<F, A>) => B, ea: HKT<F, A>): HKT<F, B>
}
```