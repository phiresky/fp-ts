MODULE [Ring](https://github.com/gcanti/fp-ts/blob/master/src/Ring.ts)
# Ring
Type class
```ts
interface Ring<A> extends Semiring<A> {
  sub: (x: A) => (y: A) => A
}
```
The `Ring` class is for types that support addition, multiplication,
and subtraction operations.

Instances must satisfy the following law in addition to the `Semiring`
laws:

- Additive inverse: `a - a = (zero - a) + a = zero`