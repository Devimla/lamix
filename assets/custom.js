/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
document.addEventListener("DOMContentLoaded", function() {
    // Atrasa a execução por 2 segundos (ajuste conforme necessário)
    setTimeout(function() {
        // Adicione o código para carregar o script da CDN aqui
        var script = document.createElement('script');
        script.src = 'https://cdn.shopify.com/extensions/505ce933-6eff-47ee-a32f-dee5ae134593/0.0.0/assets/air-reviews-main.min.js?v=1700619998978';
        document.head.appendChild(script);

        // Adicione o código para carregar o segundo script da CDN aqui
        var script2 = document.createElement('script');
        script2.src = 'https://cdn.shopify.com/extensions/505ce933-6eff-47ee-a32f-dee5ae134593/0.0.0/assets/air-reviews-main.min.js?v=1700620249572';
        document.head.appendChild(script2);

        // Adicione o código para carregar o terceiro script da CDN aqui
        var script3 = document.createElement('script');
        script3.src = 'https://cdn.shopify.com/shopifycloud/shopify_chat/storefront/shopifyChatV1.js?api_env=production&c=%23d30404&i=chat_bubble&p=bottom_right&s=icon&shop_id=Q-H2eZYVL2LPZhqg9dYQLnzyl-pyfjlJJoABsTk60kM&t=no_text&v=1&vp=lowest&shop=ef8afd.myshopify.com';
        document.head.appendChild(script3);

        // Adicione o código para carregar o terceiro script da CDN aqui
        var script4 = document.createElement('script');
        script4.src = 'https://cdn.shopify.com/extensions/505ce933-6eff-47ee-a32f-dee5ae134593/0.0.0/assets/air-reviews-main.min.js?v=1700620557099';
        document.head.appendChild(script3);
    }, 5000);
});
