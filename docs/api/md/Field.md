MODULE [Field](https://github.com/gcanti/fp-ts/blob/master/src/Field.ts)
# Field
Type class
```ts
interface Field<A> extends Ring<A> {
  degree: (a: A) => number
  div: (x: A) => (y: A) => A
  mod: (x: A) => (y: A) => A
}
```