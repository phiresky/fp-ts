MODULE [Chain](https://github.com/gcanti/fp-ts/blob/master/src/Chain.ts)
# Chain
Type class
```ts
interface Chain<F> extends Apply<F> {
  chain<A, B>(f: (a: A) => HKT<F, B>, fa: HKT<F, A>): HKT<F, B>
}
```