//ES6/7 and TypeScript
export function introduction(): void {
    basics();
    restParameters();
    spreadOperator();
    objectSpreadOperator();

    const pizza = {
        name: 'Pepperoni',
        toppings: ['pepperoni']
    }

    function order({name: pizzaName, toppings: pizzaToppings}) {
        return {pizzaName, pizzaToppings};
    }

    const justPizza: { pizzaName, pizzaToppings } = order(pizza);

    // console.log(justPizza);

    const toppings = ['pepperoni', 'bacon', 'chilli'];

    const [first, second, third] = toppings;

    // console.log(first);
    // console.log(second);
    // console.log(third);

    function logToppings([first, second, third]: any) {
        // console.log(first, second, third);
    }

    logToppings(toppings);
    logToppings([third, second, first]);
}

function basics() {
    const pizzas = [
        {name: 'Pepperoni', toppings: ['pepperoni']}
    ]

    const mappedPizzas = pizzas.map((pizza, index) => {
        return pizza.name.toUpperCase();
    });

    const pizza = {
        name: 'Blazing Inferno',
        getName: function () {
            // arrow is ignoring scope, that's why we have values from pizza
            // object using this keyword
            setTimeout(() => {
                console.log(this.name);
            }, 100);
        },
    };

    const pizza2 = {
        name: 'Blazing Inferno',
        getName: () => pizza2.name
    };

    function multiply(a: number, b = 25) {
        return a * b;
    }

    const singlePizza = {
        name: 'Pepperoni',
        price: 15,
        getName() {
            return this.name;
        }
    }

    const toppings = ['pepperoni'];

    const order = {singlePizza, toppings}

    function createOrder(pizza: any, toppings: string[]) {
        return {pizza, toppings}
    }
}

function objectSpreadOperator() {
    const anotherPizza = {
        name: 'Pepperoni'
    };

    const anotherToppings = ['pepperoni'];

    const anotherOrder = {
        ...anotherPizza,
        anotherToppings
    }

    const finalOrder = {...anotherOrder};
}

function spreadOperator() {
    const toppings1 = ['bacon', 'chilli'];

    const newToppings = ['pepperoni'];

    const allToppings = [...toppings1, ...newToppings];
}

function restParameters() {
    function sumAll(message: string, ...arr: number[]) {
        // console.log(arguments);
        return arr.reduce((prev, next) => prev + next);
    }

    let number = sumAll('Hello Number: ',
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}
