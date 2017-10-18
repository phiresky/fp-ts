MODULE [Reader](https://github.com/gcanti/fp-ts/blob/master/src/Reader.ts)
# Reader

```ts
constructor(readonly run: (e: E) => A) {}
```
## Methods

### ap
```ts
<B>(fab: Reader<E, (a: A) => B>): Reader<E, B> 
```
### chain
```ts
<B>(f: (a: A) => Reader<E, B>): Reader<E, B> 
```
### map
```ts
<B>(f: (a: A) => B): Reader<E, B> 
```