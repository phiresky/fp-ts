MODULE [Task](https://github.com/gcanti/fp-ts/blob/master/src/Task.ts)
# Task

```ts
constructor(readonly run: Lazy<Promise<A>>) {}
```
## Methods

### ap
```ts
<B>(fab: Task<(a: A) => B>): Task<B> 
```
### ap_
```ts
<B, C>(this: Task<(a: B) => C>, fb: Task<B>): Task<C> 
```
### chain
```ts
<B>(f: (a: A) => Task<B>): Task<B> 
```
### concat
```ts
(fy: Task<A>): Task<A> 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): Task<B> 
```
### toString
```ts
() 
```