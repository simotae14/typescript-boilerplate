// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo('Max').length);
console.log(echo(27).length);
console.log(echo({ name: 'Max', age: 34}).length);

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Max').length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: 'Max', age: 34}));

// Built-in Generics
const testResultsNew: Array<number> = [1.94, 2.33];
testResultsNew.push(-2.99);
//testResultsNew.push('string');
console.log(testResultsNew);

// Generics with array
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["Apple", "Banana"]);

// Generics Types
let echo2: <T>(data: T) => T;

echo2 = echo;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());