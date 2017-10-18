MODULE [ChainRec](https://github.com/gcanti/fp-ts/blob/master/src/ChainRec.ts)
# ChainRec
Type class
```ts
interface ChainRec<F> extends Chain<F> {
  chainRec<A, B>(f: (a: A) => HKT<F, Either<A, B>>, a: A): HKT<F, B>
}
```