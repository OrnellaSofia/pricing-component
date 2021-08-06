import './App.css';
import PricingComponent from './components/PricingComponent/PricingComponent';

function App() {
  const plans = [{
    title: "Basic",
    price: "4.99",
    features: ['No ads', '1 User', 'Basic Assets']
  },
  {
    title: "Pro",
    price: "9.99",
    features: ['All Basic Features', '10 Users', 'Full Library']
  },
  {
    title: "Premium",
    price: "24.99",
    features: ['Premium Support', '30 Users', 'Design Tools']
  }
  ]
  return (
    <div className="App">
      <PricingComponent plans={plans}/>
    </div>
  );
}

export default App;
