<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <shopping-cart />
  </div>
</template>

<script>
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

export default {
  name: 'cart',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

