export function totalinvoice(props) {
    let QuntitySum = 0.0;
    let PriceSum = 0.0;
    let DiscountSum = 0.0;
    let GSTSum = 0.0;
    let AmountSum = 0.0;
    let priceWithTax = 0;
    let priceWithoutTax = 0;
    let discountWithPercentage = 0;
    let discountWithAmount = 0;
    let taxWithPercentage = 0;
    let taxWithAmount = 0;
    let Quntity = 0;

    props?.map((item, index) => {
        let sum = item.priceWithTax * item.qty;
        item.TotalSum = parseInt(sum)
        // count discount
        if (item?.discountWithAmount) {
            item.TotalDiscount = parseInt(item?.discountWithAmount);
        } else if (item?.discountWithPercentage) {
            item.TotalDiscount = (parseInt(sum) * parseInt(item?.discountWithPercentage)) / 100;
        }
        // Text count
        if (item?.taxWithAmount) {
            let sumtext = item?.taxWithAmount;
            item.TotalTax = parseInt(sumtext)
        } else if (item?.taxWithPercentage) {
            item.TotalTax = (parseInt(sum) * parseInt(item?.taxWithPercentage)) / 100;
        }
        // Total Count
        if (item.TotalDiscount && item.TotalTax) {
            item.TotalAmount = parseInt(sum) - parseInt(item.TotalDiscount) + parseInt(item.TotalTax);
        } else if (item.TotalDiscount) {
            item.TotalAmount = parseInt(sum) - parseInt(item.TotalDiscount);
        } else if (item.TotalTax) {
            item.TotalAmount = parseInt(sum) + parseInt(item.TotalTax);
        } else {
            item.TotalAmount = parseInt(item.TotalSum);
        }

        // QTY sum
        QuntitySum = parseInt(item.qty) ? parseInt(QuntitySum) + parseInt(item.qty) : parseInt(QuntitySum);
        // Price sum
        PriceSum = parseInt(item.priceWithTax) ? parseInt(PriceSum) + parseInt(item.priceWithTax) : parseInt(PriceSum);
        // Discount sum
        DiscountSum = parseInt(item.TotalDiscount)
            ? parseInt(DiscountSum) + parseInt(item.TotalDiscount)
            : parseInt(DiscountSum);
        // Text sum
        GSTSum = parseInt(item.TotalTax) ? parseInt(GSTSum) + parseInt(item.TotalTax) : parseInt(GSTSum);
        // Total amount sum
        AmountSum = parseInt(item.TotalAmount) ? parseInt(AmountSum) + parseInt(item.TotalAmount) : parseInt(AmountSum);
        // setTotal({ ...total, amount: amount })


        // Sub Total

        Quntity = (parseInt(item.qty) ? parseInt(item.qty) : 0) + Quntity;
        priceWithTax =
            (parseInt(item.priceWithTax) ? parseInt(item.priceWithTax) : 0) +
            priceWithTax;

        priceWithoutTax =
            (parseInt(item.priceWithoutTax) ? parseInt(item.priceWithoutTax) : 0) +
            priceWithoutTax;

        discountWithPercentage =
            (parseInt(item.discountWithPercentage)
                ? parseInt(item.discountWithPercentage)
                : 0) + discountWithPercentage;

        discountWithAmount =
            (parseInt(item.discountWithAmount)
                ? parseInt(item.discountWithAmount)
                : 0) + discountWithAmount;

        taxWithPercentage =
            (parseInt(item.taxWithPercentage)
                ? parseInt(item.taxWithPercentage)
                : 0) + taxWithPercentage;

        taxWithAmount =
            (parseInt(item.taxWithAmount) ? parseInt(item.taxWithAmount) : 0) +
            taxWithAmount;


    })
    const total = { QuntitySum, PriceSum, DiscountSum, GSTSum, AmountSum }
    const SubTotal = {
        totalQTY: Quntity,
        price: priceWithTax,
        discountWithPercentage: discountWithPercentage,
        discountWithAmount: discountWithAmount,
        taxWithPercentage: taxWithPercentage,
        taxWithAmount: taxWithAmount
    }

    return { data: props, total, SubTotal }
}