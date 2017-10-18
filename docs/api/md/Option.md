MODULE [Option](https://github.com/gcanti/fp-ts/blob/master/src/Option.ts)
# Option

```ts
type Option<A> = None<A> | Some<A>
```
## Methods

### alt
```ts
(fa: Option<A>): Option<A> 
```
### ap
```ts
<B>(fab: Option<(a: A) => B>): Option<B> 
```
### ap_
```ts
<B, C>(this: Option<(a: B) => C>, fb: Option<B>): Option<C> 
```
### chain
```ts
<B>(f: (a: A) => Option<B>): Option<B> 
```
### contains
```ts
(S: Setoid<A>, a: A): boolean 
```
Returns `true` if the option has an element that is equal (as determined by `S`) to `a`, `false` otherwise
### exists
```ts
(p: (a: A) => boolean): boolean 
```
Returns `true` if this option is non empty and the predicate `p` returns `true` when applied to this Option's value
### extend
```ts
<B>(f: (ea: Option<A>) => B): Option<B> 
```
### filter
```ts
(p: Predicate<A>): Option<A> 
```
Returns this option if it is non empty and the predicate `p` return `true` when applied to this Option's value. Otherwise returns `None`
### fold
```ts
<B>(n: Lazy<B>, s: (a: A) => B): B 
```
### getOrElse
```ts
(f: Lazy<A>): A 
```
### getOrElseValue
```ts
(a: A): A 
```
### inspect
```ts
(): string 
```
### isNone
```ts
(): boolean 
```
Returns `true` if the option is `None`, false otherwise.
### isSome
```ts
(): boolean 
```
Returns `true` if the option is an instance of `Some`, `false` otherwise
### map
```ts
<B>(f: (a: A) => B): Option<B> 
```
### mapNullable
```ts
<B>(f: (a: A) => B | null | undefined): Option<B> 
```
Maps `f` over this Option's value. If the value returned from `f` is null or undefined, returns `None`
### reduce
```ts
<B>(f: (b: B, a: A) => B, b: B): B 
```
### toNullable
```ts
(): A | null 
```
### toString
```ts
(): string 
```
### toUndefined
```ts
(): A | undefined 
```
### traverse
```ts
<F>(F: Applicative<F>): <B>(f: (a: A) => HKT<F, B>) => HKT<F, Option<B>> 
```
# alt
```ts
<A>(fx: Option<A>, fy: Option<A>): Option<A>
```

# empty
Alias of
```ts
zero
```

# extend
```ts
<A, B>(f: (ea: Option<A>)
```

# filter
```ts
<A>(p: Predicate<A>)
```
Returns this option if it is non empty and the predicate `p` return `true` when applied to this Option's value. Otherwise returns none

# fold
```ts
<A, B>(n: Lazy<B>, s: (a: A)
```

# fromNullable
```ts
<A>(a: A | null | undefined): Option<A>
```

# fromPredicate
```ts
<A>(predicate: Predicate<A>)
```

# getFirstMonoid
```ts
<A>(): Monoid<Option<A>>
```
Option monoid returning the left-most non-None value

# getLastMonoid
```ts
<A>(): Monoid<Option<A>>
```
Option monoid returning the right-most non-None value

# getMonoid
```ts
<A>(S: Semigroup<A>): Monoid<Option<A>>
```

# getOrElse
```ts
<A>(f: Lazy<A>)
```

# getOrElseValue
```ts
<A>(a: A)
```
Takes a default value, and a `Option` value. If the `Option` value is
`None` the default value is returned, otherwise the value inside the
`Some` is returned

# getSemigroup
```ts
<A>(S: Semigroup<A>): Semigroup<Option<A>>
```

# getSetoid
```ts
<A>(S: Setoid<A>): Setoid<Option<A>>
```

# isNone
```ts
<A>(fa: Option<A>): fa is None<A>
```

# isSome
```ts
<A>(fa: Option<A>): fa is Some<A>
```

# map
```ts
<A, B>(f: (a: A)
```

# mapNullable
```ts
<A, B>(f: (a: A)
```
Maps `f` over this Option's value. If the value returned from `f` is null or undefined, returns `None`

# of
```ts
<A>(a: A): Option<A>
```

# reduce
```ts
<A, B>(f: (b: B, a: A)
```

# some
Alias of
```ts
of
```

# toNullable
```ts
<A>(fa: Option<A>): A | null
```

# toUndefined
```ts
<A>(fa: Option<A>): A | undefined
```

# traverse
```ts
traverse<F>(F: Applicative<F>): <A, B>(f: (a: A) => HKT<F, B>, ta: Option<A>) => HKT<F, Option<B>> 
```

# zero
```ts
<A>(): Option<A>
```