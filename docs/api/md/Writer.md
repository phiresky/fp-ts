MODULE [Writer](https://github.com/gcanti/fp-ts/blob/master/src/Writer.ts)
# Writer

```ts
constructor(readonly monoid: Monoid<W>, readonly run: Lazy<[A, W]>) {}
```
## Methods

### ap
```ts
<B>(fab: Writer<W, (a: A) => B>): Writer<W, B> 
```
### chain
```ts
<B>(f: (a: A) => Writer<W, B>): Writer<W, B> 
```
### eval
```ts
(): A 
```
### exec
```ts
(): W 
```
### map
```ts
<B>(f: (a: A) => B): Writer<W, B> 
```