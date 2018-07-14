'use strict';

var _mm = require('util/mm.js');

var _order = {
    // 获取商品信息列表
    getProductList: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        });
    },
}
module.exports = _order;