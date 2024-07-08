const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 15, category: "Electronics" },
  { id: 4, name: "Product D", price: 25, category: "Clothing" },
  { id: 5, name: "Product E", price: 50, category: "Electronics" },
  { id: 6, name: "Product F", price: 40, category: "Electronics" },
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

function App() {
  console.log("here");
  return (
    <div>
      <ul>
        {products.map(function (product) {
          return (<li key={product.id}>{product.id} - {product.category} - {product.price}</li>)
        })}
      </ul>
      <hr />
      <ul>
        {products.filter(function (product) {
          return product.category === 'Electronics'
        }).map(function (product) {
          return (<li key={product.id}>{product.id} - {product.category} - {product.price}</li>)
        })}
      </ul>
      <hr />
      <p>Price: {products.reduce(function(prev, product, ) {
        return prev + product.price;
      }, 0)}</p>
      <hr />
      <ul>
      {products.filter(function (product) {
          return product.price > 20
        }).map(function (product) {
          return (<li key={product.id}>{product.id} - {product.category} - {product.price - (product.price * 0.20)}</li>)
        })}
      </ul>
      <hr />
      <ul>
        {names.filter(function(name, index) {
          return names.indexOf(name) === index
        }).map(function(name) {
          return <li key={name}>{name}</li>
        })}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
