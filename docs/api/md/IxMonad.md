MODULE [IxMonad](https://github.com/gcanti/fp-ts/blob/master/src/IxMonad.ts)
# IxMonad
Type class
```ts
interface IxMonad<F> {
  readonly URI: F
  iof<I, A>(a: A): HKT3<F, I, I, A>
  ichain<I, O, Z, A, B>(f: (a: A) => HKT3<F, O, Z, B>, fa: HKT3<F, I, O, A>): HKT3<F, I, Z, B>
}
```