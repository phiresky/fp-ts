MODULE [Traversable](https://github.com/gcanti/fp-ts/blob/master/src/Traversable.ts)
# Traversable
Type class
```ts
interface Traversable<T> extends Functor<T>, Foldable<T> {
  traverse: <F>(F: Applicative<F>) => <A, B>(f: (a: A) => HKT<F, B>, ta: HKT<T, A>) => HKT<F, HKT<T, B>>
}
```