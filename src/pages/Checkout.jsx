import React from "react";
import { useStateContext } from "../contexts/CartProvider";
import { useNavigate } from "react-router-dom";
import Currency from "react-currency-formatter";
import { HiChevronDown } from "react-icons/hi";
import CheckoutProduct from "../components/CheckoutProduct";
import { BASE_URL } from "../constants";
import { useEffect } from "react";

const Checkout = () => {
  const { cart } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = async () => {
    const res = await fetch(BASE_URL + "/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart.map((c) => {
          return {
            id: c.product._id,
            title: c.product.title,
            price: c.product.price * 100,
            amount: c.amount,
          };
        }),
      }),
    });
    const data = await res.json();

    if (data) {
      window.location = data.url;
    } else {
      console.log("error");
    }
  };

  return (
    <div className="min-h-screen bg-wpBg">
      <main className="mx-auto max-w-5xl pb-24">
        <div className="p-8">
          <h1 className="text-3xl font-semibold lg:text-4xl">
            {cart.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>
          <p className="my-4">Free delivery and free returns</p>
          <button
            className="mt-2 bg-wpSecondary py-2 px-4 hover:bg-wpSecondary/75"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

          {cart.length === 0 && (
            <button
              title="Continue Shopping"
              onClick={() => navigate("/")}
            ></button>
          )}
        </div>

        {cart.length > 0 && (
          <div className="mx-5 md:mx-8">
            {cart.map((group, idx) => (
              <CheckoutProduct
                key={idx}
                items={group.product}
                amount={group.amount}
              />
            ))}

            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>subtotal</p>
                    <p>
                      <Currency
                        quantity={cart.reduce(
                          (total, item) =>
                            total + item.product.price * item.amount,
                          0
                        )}
                        currency="USD"
                      />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:{" "}
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Enter zip code
                        <HiChevronDown className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$ ~</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                    <Currency
                      quantity={cart.reduce(
                        (total, item) =>
                          total + item.product.price * item.amount,
                        0
                      )}
                      currency="USD"
                    />
                  </h4>
                </div>
              </div>

              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to check out?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  {/* <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-wpGray p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      <span>Pay Monthly</span>
                      <span>with Apple Card</span>
                      <span>
                        $283.16/mo. at 0% APR<sup className="-top-1">`</sup>
                      </span>
                    </h4>
                    <button className="w-full rounded-sm bg-wpSecondary py-2 font-semibold">
                      Check Out with Apple Card Monthly Installments
                    </button>
                    <p className="mt-2 max-w-[240px] text-[13px]">
                      $0.00 due today, which includes aplicable full-price
                      items, down payments, shipping and taxes.
                    </p>
                  </div> */}

                  <div
                    className="flex flex-1 flex-col items-center space-y-8 
                  rounded-xl bg-wpGray p-8 py-12 md:order-2"
                  >
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in full
                      <span>
                        <Currency
                          quantity={cart.reduce(
                            (total, item) =>
                              total + item.product.price * item.amount,
                            0
                          )}
                          currency="USD"
                        />
                      </span>
                    </h4>

                    <button
                      className="w-full rounded-sm bg-wpSecondary py-2 font-semibold hover:bg-wpSecondary/75"
                      onClick={handleCheckout}
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
