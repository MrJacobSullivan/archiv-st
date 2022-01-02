import { formatUnits } from '@ethersproject/units'

/**
 * @name parseBalance
 *
 * @param {import("@ethersproject/bignumber").BigNumberish} balance
 * @param {number} decimals
 * @param {number} decimalsToDisplay
 *
 * @returns {string}
 */
export const parseBalance = (balance, decimals = 18, decimalsToDisplay = 3) => {
  return Number(formatUnits(balance, decimals)).toFixed(decimalsToDisplay)
}
