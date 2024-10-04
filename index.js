import CurrencyAPI from '@everapi/currencyapi-js';
const currencyApi = new CurrencyAPI('cur_live_bDrDEdZVKsAtiqpnrJFD4nk7ipz4P1x6aG2r3wfk');

// currencyApi.latest({
//     base_currency: 'USD',
//     currencies: 'EUR'
// }).then(response => {
//     console.log(response);
// });

export async function sg_currency_converter(from,to,units) {
    const res=await currencyApi.latest({
        base_currency:from,
        currencies:to
    });
    const multiplier=res.data[to];
    return multiplier*units
    
}