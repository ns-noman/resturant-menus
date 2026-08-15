"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

const EMPTY_CART = [];

export default function Cart() {
  const params = useParams();
  const companySlug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const cartItems = useCartStore(
    (state) => state.carts[companySlug] ?? EMPTY_CART
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore((state) => state.removeFromCart);

const handleRemoveFromCart = (companySlug, itemId) => {
  removeFromCart(companySlug, itemId);
  toast.success("Item removed from cart!");
};

  const totalItems = cartItems.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className="wg-bag">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="17"
        height="19"
        viewBox="0 0 17 19"
      >
      </svg>

      <Image
        id="shopping-bag"
        src="/images/icons/bag.png"
        alt="Shopping bag"
        width={17}
        height={19}
      />

      <span className="number">{totalItems}</span>

      <div className="bag-box">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            Your cart is empty.
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                className={`cart-item ${
                  index === cartItems.length - 1 ? "last" : ""
                }`}
                key={item.id}
              >
                <div
                  className={`image`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </div>

                <div className="content">
                  <div className="price">
                    {item.oldPrice && (
                      <span>
                        BDT{" "}
                        {Number(item.oldPrice).toFixed(2)}
                      </span>
                    )}

                    BDT {Number(item.price).toFixed(2)}
                  </div>

                  <div className="name">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.name}
                    </a>
                  </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "10px",
                    }}
                    >
                    {/* Quantity */}
                    <div
                        style={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        overflow: "hidden",
                        }}
                    >
                        <button
                        type="button"
                        onClick={() =>
                            decreaseQuantity(companySlug, item.id)
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                        style={{
                            width: "32px",
                            height: "32px",
                            padding: 0,
                            border: 0,
                            backgroundColor: "#f8f8f8",
                            cursor: "pointer",
                            fontSize: "18px",
                            lineHeight: "32px",
                            textAlign: "center",
                        }}
                        >
                        −
                        </button>

                        <span
                        style={{
                            width: "36px",
                            height: "32px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderLeft: "1px solid #ddd",
                            borderRight: "1px solid #ddd",
                            fontSize: "14px",
                            fontWeight: 500,
                            backgroundColor: "#fff",
                        }}
                        >
                        {item.quantity}
                        </span>

                        <button
                        type="button"
                        onClick={() =>
                            increaseQuantity(companySlug, item.id)
                        }
                        aria-label={`Increase ${item.name} quantity`}
                        style={{
                            width: "32px",
                            height: "32px",
                            padding: 0,
                            border: 0,
                            backgroundColor: "#f8f8f8",
                            cursor: "pointer",
                            fontSize: "18px",
                            lineHeight: "32px",
                            textAlign: "center",
                        }}
                        >
                        +
                        </button>
                    </div>

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={() =>
                        handleRemoveFromCart(companySlug, item.id)
                        }
                        aria-label={`Remove ${item.name}`}
                        style={{
                        border: 0,
                        background: "none",
                        color: "#dc3545",
                        cursor: "pointer",
                        fontSize: "13px",
                        padding: "4px 0",
                        marginLeft: "15px",
                        }}
                    >
                        Remove
                    </button>
                </div>
                </div>
              </div>
            ))}
            
            <div className="cart-total">
              <div className="total-label">
                Total:
              </div>

              <div className="total-amount">
                BDT {totalAmount.toFixed(2)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}