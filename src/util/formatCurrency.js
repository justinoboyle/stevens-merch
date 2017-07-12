export default function formatCurrency(c2) {
    let c = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    return c.format(c2/100.0);
}