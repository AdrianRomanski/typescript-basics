export function primitiveTypes(): void {
    numberTypesArgumentsFunctions();
    stringTypeStringLiterals();
    booleanType();
}

function numberTypesArgumentsFunctions() {
    const pizzaCost: number = 10;
    const pizzaToppings: number = 5;

    function calculatePrice(cost: number, toppings: number): number {
        return cost + 1.5 * toppings;
    }

    const cost: number = calculatePrice(pizzaCost, pizzaToppings);
}

function stringTypeStringLiterals() {
    const coupon: string = 'pizza25';

    function normalizeCoupon(code: string): string {
        return code.toUpperCase();
    }

    const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`
}

function booleanType() {
    const pizzas: number = 5;

    function offerDiscount(orders: number): boolean {
        return orders > 3;
    }

    if (offerDiscount(pizzas)) {
        // console.log(`You're entitle to a discount!`);
    } else {
        // console.log(`Order more than 3 pizzas for a discount!`);
    }
}

