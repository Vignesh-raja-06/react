import './App.css';

function App() {
  const first = [1, 2, 3];
  const second = [...first, 4, 5, 6];

  const fruit = ['apple', 'banana', 'orange'];

  class Person {
    constructor(Name, Age) {
      this.name = Name;
      this.age = Age;
    }
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
  }

  const p = new Person("Vicky", 20);
  const [a, b, c] = first;

  return (
    <div>
      <ul>
        {fruit.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>First array: {first.join(', ')}</p>
      <p>Person: {p.name}, Age: {p.age}</p>
      <p>{p.greet()}</p>
      <p>Destructured values: a={a}, b={b}, c={c}</p>
    </div>
  );
}

export default App;
