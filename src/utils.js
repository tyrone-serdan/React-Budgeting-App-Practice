
/**
 * formats the currency props given to BudgetCard.js
 * @type {Intl.NumberFormat}
 */
export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "php",
    style: "currency",
    minimumFractionDigits: 0
});