import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLISHABLE_KEY =
  "pk_test_51LskMUK4YSRIqpJdukndrY2BySVgfTVFPgUU9pBdpYXt4Yde9GvVgIAyw2yN63GWlyve5UnzakaHbjtMkYtSP0pF00iFzvtu48";

const stripePromise = loadStripe(PUBLISHABLE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Elements>
  );
}

export default App;
