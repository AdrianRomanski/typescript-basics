export function typeAliasesAssertions(): void {
    typeAliases();
    typeAssertions();
}

function typeAliases(): void {
    type Size = 'small' | 'medium' | 'large';

    type Callback = (size: Size) => void;

    let pizzaSize: Size = 'small';

    const selectSize: Callback = (x) => {
        pizzaSize = x;
    };

    selectSize('small');
}

function typeAssertions(): void {
    type Pizza = { name: string, toppings: number };

    const pizza: Pizza = {name: 'Blazing Inferno', toppings: 5};

    const serialized = JSON.stringify(pizza);

    function getNameFromJson(obj: string): string {
        return (<Pizza>JSON.parse(obj)).name;
    }

    const nameFromJson: string = getNameFromJson(serialized);
}
