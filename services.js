angular.module('starter.services',[])
.service('WC', function(){
    return {
        WC: function(){
            var Woocommerce = new WooCommerceAPI.WooCommerceAPI({
                url: 'http[s]://Your-Site-Url.com',
                consumerKey: 'ck_your_consumer_key_here',
                consumerSecret: 'cs_your_consumer_secret_here'
            });
            return Woocommerce;
        }
}});