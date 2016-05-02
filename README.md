# WC-API-JS-Client

Add a reference to your index.html file

`<script src="wcapi.js"></script>`

In your app.js file
```javascript
var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
    url: 'http://your_store_url.com',
    consumerKey: 'ck_YOUR_CONSUMER_KEY',
    consumerSecret: 'cs_YOUR_CONSUMER_SECRET'
  });
  
  Woocommerce.get('products/categories', function(err, data, res){
    if(err)
      console.log(err);
    console.log(JSON.parse(res));
  })```
  
  Works like a Charm in Ionic and AngularJS apps.

