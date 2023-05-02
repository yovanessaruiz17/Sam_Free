<template>
    
    <div class="restaurantes">
        <h1>RESTAURANTES EN CARTAGENA</h1>
        <h3>Da click al boton ver mas para encontrar ubicacion y menu del restaurante</h3>
        <div class="contenido-cards">
            <div class="card" v-for="restaurante in products" :key="restaurante.id">
                <div class="imagenes">
                    {{ restaurante.imagen }}
                </div>
                <h2>{{ restaurante.nombre }}</h2>
                <p>{{ restaurante.description }}</p>
                <div class="content-button-card">
                    <button @click="goToDetails(restaurante)">Veer más</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useRestaurantList } from '../stores/RestaurantList'

export default defineComponent({
  name: 'ProductsList',
  setup() {
    const RestaurantList = useRestaurantList();
    const router = useRouter();

    const goToDetails = (restaurante) => {
        RestaurantList.restaurante = [];
        RestaurantList.restaurante.push(restaurante);
      router.push({
        path: '/restaurante',
        query: {
          restaurante: JSON.stringify(RestaurantList.restaurante)
        }
      })
    }

    return {
      restaurant: RestaurantList.restaurant,
      addToCart(restaurante) {
        RestaurantList.addToCart(restaurante);
      },
      goToDetails
    }
  }
})
</script>
<style>
.restaurantes{
    display: flex;
    flex-wrap: row wrap;
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: repeat(4, 250px);
    grid-gap: 100px;
    grid-row-gap: -100px;
    height: 100rem;
    justify-content:space-between;
    align-content:space-evenly;
    gap:3px;

}
.restaurantes.contenido-card.card{
    border: 1px solid rgba(210, 200, 200, 0.447);
    padding: -5px;
    margin: -2px;
    width: 302px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: antiquewhite;
    border-radius: 7px;
}
.content-button-card.button{
    display: inline-flexbox;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: 700;
    color: #000;
    padding: 9px 70px;
    background: whitesmoke;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;

}
.button:hover{
    background-color:rgb(238, 238, 99);
    transform: scale(1.1);
}
</style>