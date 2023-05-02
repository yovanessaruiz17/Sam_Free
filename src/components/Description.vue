<template>
    <div>
        <h1>{{ restaurante.nombre }}</h1>
        <p>Direccion: </p>
        <p>{{ restaurante.direccion }}</p>
        <p>Link de menu: </p>
        <p>{{ restaurante.menu }}</p>
        <p>Link de sitio web: </p>
        <p>{{ restaurante.sitioweb }}</p>
        <button @click=" goToList()">Volver</button>
    </div>
  </template>

  <script>
  import { defineComponent } from 'vue'
  import { useStore } from '../stores/RestaurantList'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'Description',
    setup() {
      const RestaurantList = useStore();
      const restaurante = RestaurantList.restaurante[0];
      const router = useRouter();

      const goToList = ()=> {
      router.push({
        path: '/',
        query: {
          cart: JSON.stringify(RestaurantList.cart)
        }
      })
    }

      return {
        restaurante,
        addToCart(restaurante) {
          RestaurantList.addToCart(restaurante)
        },
        goToList
      }
    }
  })
  </script>