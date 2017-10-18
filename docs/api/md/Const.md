MODULE [Const](https://github.com/gcanti/fp-ts/blob/master/src/Const.ts)
# Const

```ts
constructor(readonly value: L) {}
```
## Methods

### contramap
```ts
<B, C>(f: (c: C) => B): Const<L, C> 
```
### fold
```ts
<B>(f: (l: L) => B): B 
```
### inspect
```ts
() 
```
### map
```ts
<B, C>(f: (b: B) => C): Const<L, C> 
```
### toString
```ts
() 
```