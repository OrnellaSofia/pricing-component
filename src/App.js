import './App.css';
import PricingComponent from './components/PricingComponent/PricingComponent';

function App() {
  const plans = [{
    title: "Basic",
    price: "4.99",
  },
  {
    title: "Pro",
    price: "9.99"
  },
  {
    title: "Premium",
    price: "24.99"
  }
  ]
  return (
    <div className="App">
      <PricingComponent plans={plans}/>
    </div>
  );
}

export default App;
