MODULE [IO](https://github.com/gcanti/fp-ts/blob/master/src/IO.ts)
# IO

```ts
constructor(readonly run: Lazy<A>) {}
```
## Methods

### ap
```ts
<B>(fab: IO<(a: A) => B>): IO<B> 
```
### ap_
```ts
<B, C>(this: IO<(a: B) => C>, fb: IO<B>): IO<C> 
```
### chain
```ts
<B>(f: (a: A) => IO<B>): IO<B> 
```
### inspect
```ts
(): string 
```
### map
```ts
<B>(f: (a: A) => B): IO<B> 
```
### toString
```ts
(): string 
```
# ap
```ts
<A, B>(fab: IO<(a: A)
```

# chain
```ts
<A, B>(f: (a: A)
```

# getMonoid
```ts
<A>(M: Monoid<A>): Monoid<IO<A>>
```

# getSemigroup
```ts
<A>(S: Semigroup<A>): Semigroup<IO<A>>
```

# map
```ts
<A, B>(f: (a: A)
```

# of
```ts
<A>(a: A): IO<A>
```