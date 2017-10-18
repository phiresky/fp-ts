MODULE [TaskEither](https://github.com/gcanti/fp-ts/blob/master/src/TaskEither.ts)
# TaskEither

```ts
constructor(readonly value: task.Task<either.Either<L, A>>) {}
```
## Methods

### ap
```ts
<B>(fab: TaskEither<L, (a: A) => B>): TaskEither<L, B> 
```
### ap_
```ts
<B, C>(this: TaskEither<L, (a: B) => C>, fb: TaskEither<L, B>): TaskEither<L, C> 
```
### chain
```ts
<B>(f: (a: A) => TaskEither<L, B>): TaskEither<L, B> 
```
### fold
```ts
<R>(left: (l: L) => R, right: (a: A) => R): task.Task<R> 
```
### map
```ts
<B>(f: (a: A) => B): TaskEither<L, B> 
```
### mapLeft
```ts
<M>(f: (l: L) => M): TaskEither<M, A> 
```
### toOption
```ts
(): task.Task<Option<A>> 
```