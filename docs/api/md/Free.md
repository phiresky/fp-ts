MODULE [Free](https://github.com/gcanti/fp-ts/blob/master/src/Free.ts)
# Free

```ts
type Free<F, A> = Pure<F, A> | Impure<F, A, any>
```
## Methods

### ap
```ts
<B>(fab: Free<F, (a: A) => B>): Free<F, B> 
```
### ap_
```ts
<B, C>(this: Free<F, (a: B) => C>, fb: Free<F, B>): Free<F, C> 
```
### chain
```ts
<B>(f: (a: A) => Free<F, B>): Free<F, B> 
```
### foldFree
```ts
<M>(M: Monad<M>): (f: NaturalTransformation<F, M>) => HKT<M, A> 
```
### inspect
```ts
() 
```
### map
```ts
<B>(f: (a: A) => B): Free<F, B> 
```
### toString
```ts
() 
```