function removeCartItem(button) {
           // Get the parent div of the clicked button (cart-item)
           var cartItem = button.parentNode;

           // Remove the cart item from the cart
           cartItem.parentNode.removeChild(cartItem);
       }
       function removeCartItem(button) {
                  // Get the parent div of the clicked button (cart-item)
                  var cartItem = button.parentNode;

                  // Remove the cart item from the cart
                  cartItem.parentNode.removeChild(cartItem);
              }

              function checkout() {
                  // Display a notification
                  alert('Thank you for your purchase!');

                  // You can add additional logic for handling the checkout process
              }
              function removeCartItem(button) {
                          // Get the parent div of the clicked button (cart-item)
                          var cartItem = button.parentNode;

                          // Remove the cart item from the cart
                          cartItem.parentNode.removeChild(cartItem);

                          // Recalculate total price after removing an item
                          calculateTotal();
                      }

                      function calculateTotal() {
                          var cartItems = document.querySelectorAll(".cart-item");
                          var total = 0;

                          // Iterate through each cart item and sum the prices
                          cartItems.forEach(function (item) {
                              var priceElement = item.querySelector(".item-price");
                              var price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));
                              total += price;
                          });

                          // Display the total in the totalPrice span
                          document.getElementById("totalPrice").textContent = "₱" + total.toFixed(2);
                      }

                      function checkout() {
                          // Display a notification
                          alert('Thank you for your purchase!');

                          // You can add additional logic for handling the checkout process
                      }

                      // Initial calculation of total when the page loads
                      calculateTotal();
