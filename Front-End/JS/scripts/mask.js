const options = {
    prefix: 'R$',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    emptyOrInvalid: () => {
        return this.SimpleMaskMoney.args.fixed ? `0${this.SimpleMaskMoney.args.decimalSeparator}00` : `_${this.SimpleMaskMoney.args.decimalSeparator}__`;
    }
};

let input = SimpleMaskMoney.setMask('#input-compra',options)

