MODULE [Store](https://github.com/gcanti/fp-ts/blob/master/src/Store.ts)
# Store

```ts
constructor(readonly peek: (s: S) => A, readonly pos: S) {}
```
## Methods

### extend
```ts
<B>(f: (sa: Store<S, A>) => B): Store<S, B> 
```
### extract
```ts
(): A 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): Store<S, B> 
```
### seek
```ts
(s: S): Store<S, A> 
```
Reposition the focus at the specified position
### toString
```ts
() 
```