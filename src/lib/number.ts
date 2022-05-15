/**
 * Raise the value of the first parameter to the power of the second using the
 * es7 exponentiation operator (`**`).
 *
 * ### Example 
 * ```js
 * import { power } from 'typescript-starter'
 * console.log(power(2,3))
 * // => 8
 * ```
 * @param base - the base to exponentiate
 * @param exponent - the power to which to raise the base by
 */
export const power = (base: number, exponent: number) => {
  /**
   * This es7 exponentiation operator is transpiled by TypeScript
   */
  return base ** exponent;
};
