MODULE [Apply](https://github.com/gcanti/fp-ts/blob/master/src/Apply.ts)
# Apply
Type class
```ts
interface Apply<F> extends Functor<F> {
  ap<A, B>(fab: HKT<F, (a: A) => B>, fa: HKT<F, A>): HKT<F, B>
}
```