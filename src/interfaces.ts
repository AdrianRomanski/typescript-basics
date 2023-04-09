export function interfaces(): void {
    creatingInterfaces();
}

function creatingInterfaces(): void {
    interface Size {
        sizes: string[];
    }

    interface Pizza extends Size {
        name: string;
        toppings?: number;
        dictionary: {
            [key: string]: any;
        }

        getAvailableSize(): string[];

        [key: number]: string;
    }

    type getAvailableSize = () => string[];

    interface Pizzas {
        data: Pizza[];
    }

    let pizza: Pizza;

    function createPizza(name: string, sizes: string[], toppings?: number): Pizza {
        return {
            name,
            sizes,
            toppings,
            dictionary: {},
            getAvailableSize() {
                return this.sizes;
            }
        };
    }

    pizza = createPizza('Pepperoni', ['small', 'medium']);
    pizza[1] = 'xyz';
    pizza.toppings = 1;


}



