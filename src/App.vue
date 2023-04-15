<template>
  <div>
    <CartHeader></CartHeader>
    <div class="box">
      <CartItem v-for="item in list" :key="item.id" :item="item"></CartItem>
    </div>
    <CartFooter></CartFooter>
  </div>
</template>

<script>
import CartHeader from './components/cart-header.vue'
import CartItem from './components/cart-item.vue'
import CartFooter from './components/cart-footer.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CartHeader,
    CartItem,
    CartFooter
  },
  created () {
    this.$store.dispatch('cart/getList')
  },
  computed: {
    ...mapState('cart', ['list'])
  }
}
</script>

<style>
.box {
  margin-top: 50px;
}
</style>
