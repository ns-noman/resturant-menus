import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      carts: {},

      addToCart: (companyId, product) =>
        set((state) => {
          const companyCart = state.carts[companyId] || [];

          const existingProduct = companyCart.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              carts: {
                ...state.carts,
                [companyId]: companyCart.map((item) =>
                  item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                      }
                    : item
                ),
              },
            };
          }

          return {
            carts: {
              ...state.carts,
              [companyId]: [
                ...companyCart,
                {
                  ...product,
                  price: Number(product.price),
                  oldPrice: product.oldPrice
                    ? Number(product.oldPrice)
                    : undefined,
                  quantity: 1,
                },
              ],
            },
          };
        }),

      increaseQuantity: (companyId, productId) =>
        set((state) => ({
          carts: {
            ...state.carts,
            [companyId]: (state.carts[companyId] || []).map((item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          },
        })),

      decreaseQuantity: (companyId, productId) =>
        set((state) => {
          const companyCart = state.carts[companyId] || [];

          return {
            carts: {
              ...state.carts,
              [companyId]: companyCart
                .map((item) =>
                  item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                      }
                    : item
                )
                .filter((item) => item.quantity > 0),
            },
          };
        }),

      removeFromCart: (companyId, productId) =>
        set((state) => ({
          carts: {
            ...state.carts,
            [companyId]: (state.carts[companyId] || []).filter(
              (item) => item.id !== productId
            ),
          },
        })),

      clearCompanyCart: (companyId) =>
        set((state) => ({
          carts: {
            ...state.carts,
            [companyId]: [],
          },
        })),

      clearCart: () => set({ carts: {} }),
    }),
    {
      name: "restaurant-cart",
    }
  )
);