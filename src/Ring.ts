import { Semiring, getFunctionSemiring } from './Semiring'

// adapted from https://github.com/purescript/purescript-prelude/blob/master/src/Data/Ring.purs

/**
 * The `Ring` class is for types that support addition, multiplication,
 * and subtraction operations.
 *
 * Instances must satisfy the following law in addition to the `Semiring`
 * laws:
 *
 * - Additive inverse: `a - a = (zero - a) + a = zero`
 * @typeclass
 */
export interface Ring<A> extends Semiring<A> {
  sub: (x: A) => (y: A) => A
}

export const getFunctionRing = <A, B>(ring: Ring<B>): Ring<(a: A) => B> => ({
  ...getFunctionSemiring(ring),
  sub: f => g => x => ring.sub(f(x))(g(x))
})

/** `negate x` can be used as a shorthand for `zero - x` */
export const negate = <A>(ring: Ring<A>) => (a: A): A => ring.sub(ring.zero())(a)
