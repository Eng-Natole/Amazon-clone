import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("test suite: add to cart", () => {
  spyOn(localStorage, "getItem").and.callFake(() => {
    return JSON.stringify([]);
  });
  console.log(localStorage.getItem("cart"));
  loadFromStorage();

  it("adds an existing product to the cart", () => {
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
  });
});
