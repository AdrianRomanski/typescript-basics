export function classes(): void {
    understandingClassesAndConstructors();
    staticPropertiesAndMethods();
}

interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    protected constructor(protected sizes: string[]) {
    }

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

function understandingClassesAndConstructors(): void {

    interface PizzaInterface extends SizesInterface {
        readonly name: string;
        toppings: string[];

        updateSizes(sizes: string[]): void;

        addTopping(topping: string): void;
    }

    // const size = new Sizes(['small', 'medium']);
    //
    // // invoke getter
    // console.log(size.availableSizes);
    // // invoke setter
    // size.availableSizes = ['medium', 'large'];
    //
    // console.log(size.availableSizes);

    class Pizza extends Sizes implements PizzaInterface {
        toppings: string[] = [];

        constructor(readonly name: string, sizes: string[]) {
            super(sizes);
        }

        addTopping(topping: string) {
            this.toppings.push(topping);
        }

        public updateSizes(sizes: string[]) {
            this.sizes = sizes;
        }
    }

    function Pizza2(name: string): void {
        this.name = name;
        this.toppings = [];
    }

    Pizza2.prototype.addTopping = function addTopping(topping: string) {
        this.toppings.push(topping)
    };

    const pizza = new Pizza2('Pepperoni');

    const anotherPizza = new Pizza('Meat Lovers', ['small', 'medium'])

    pizza.addTopping('pepperoni');

    anotherPizza.updateSizes(['large']);
    anotherPizza.addTopping('chicken');
    anotherPizza.addTopping('beef');

    // console.log(anotherPizza.name);
    // console.log(anotherPizza.availableSizes);
    // console.log(anotherPizza);
}

function staticPropertiesAndMethods(): void {
    const date = Date.now();
    console.log(date);

    class Coupon {
        static allowed = ['Pepperoni', 'Blazing Inferno'];

        static create(percentage: number) {
            return `PIZZA_RESTAURANT_${percentage}`;
        }
    }

    console.log(Coupon.allowed);
    console.log(Coupon.create(25));
}
