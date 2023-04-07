export function typescriptTypes(): void {
    anyType();
    implicitTypeExplicitType();
    voidType();
    neverType();
    nullUndefinedStrictNull();
    unionAndLiteral();
    functionTypes();
    objectTypes();
    arrayTypeAndGeneric();
}

function anyType(): void {
    let coupon;

    coupon = 25;
    coupon = 'pizza25';
    coupon = true;
}

function implicitTypeExplicitType() {
    let implicitCoupon = 'pizza25';
    let explicitCoupon: string;
    explicitCoupon = 'pizza25';
}

// void mean that there is nothing returned from the function
function voidType(): void {
    let selectedTopping: string = 'pepperoni';

    // impure function
    function selectTopping(topping: string) {
        selectedTopping = topping;
    }

    // pure function will not mutate any value outside of function

    selectTopping('bacon');

    // console.log(selectedTopping);
}

function neverType(): void {
    function orderError(error: string): never {
        throw new Error(error);
        // never going to return a value;
    }

    // orderError('Something went wrong');
}

function nullUndefinedStrictNull(): void {
    let coupon: string | null = 'pizza25';

    function removeCoupon(): void {
        coupon = null;
    }

    // console.log(coupon);

    removeCoupon();

    // console.log(coupon);
}

function unionAndLiteral(): void {
    let pizzaSize: string = 'small';

    function selectSize(size: 'small' | 'medium' | 'large'): void {
        pizzaSize = size;
    }

    selectSize('medium');
    selectSize('small');

    // console.log(`Pizza size: ${pizzaSize}`);
}

function functionTypes(): void {
    let sumOrder: (price: number, quantity?: number) => number;

    sumOrder = (x, y = 1) => x * y;

    const addFunction = (x, y) => x + y;

    const sum = sumOrder(2, 4);

    // console.log(`Total sum: ${sum}`);

    let addedResult = addFunction(2, 4);

    // console.log(`Added result: ${addedResult}`);
}

function objectTypes(): void {
    let pizza: { name: string; price: number; getName(): string };

    pizza = {
        name: 'Plain Old Pepperoni',
        price: 20,
        getName(): string {
            return pizza.name;
        }
    };
}

function arrayTypeAndGeneric(): void {
    let sizes: string[];
    sizes = ['small', 'medium', 'large'];

    // generic type
    let toppings: Array<string>;

    toppings = ['pepperoni', 'tomato', 'bacon'];
}

function tupleTypesForArrays(): void {
    let pizza: [string, number, boolean];
    pizza = ['Pepperoni', 20, true];
}
