angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WoocommerceAPI({
                url: 'http://www.your_website.com',
                consumerKey: 'ck_your_consumer_key_here',
                consumerSecret: 'cs_your_consumer_secret_here',
		wpAPI: true, //or false if you want to use the legacy API v3
  		version: 'wc/v2' //or wc/v1
            })
            return Woocommerce;
        }
}});
