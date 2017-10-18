MODULE [Contravariant](https://github.com/gcanti/fp-ts/blob/master/src/Contravariant.ts)
# Contravariant
Type class
```ts
interface Contravariant<F> {
  readonly URI: F
  contramap<A, B>(f: (b: B) => A, fa: HKT<F, A>): HKT<F, B>
}
```