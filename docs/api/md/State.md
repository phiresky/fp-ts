MODULE [State](https://github.com/gcanti/fp-ts/blob/master/src/State.ts)
# State

```ts
constructor(readonly run: (s: S) => [A, S]) {}
```
## Methods

### ap
```ts
<B>(fab: State<S, (a: A) => B>): State<S, B> 
```
### chain
```ts
<B>(f: (a: A) => State<S, B>): State<S, B> 
```
### eval
```ts
(s: S): A 
```
### exec
```ts
(s: S): S 
```
### map
```ts
<B>(f: (a: A) => B): State<S, B> 
```