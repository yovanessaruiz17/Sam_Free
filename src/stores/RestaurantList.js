import { defineStore } from 'pinia'
import { useLink } from 'vue-router';

export const  useRestaurantlist=defineStore('Restaurantlist',{
  state:()=>({
    restaurant:[
      {id:1,
      nombre:'brasa y barril',
      direccion:'Alto Bosque: Trv. 52 #21a-108. Teléfonos: 672 2497 - 6749571 Tacarigua: Avenida El Bosque sector Tacarigua trv. 54#34-98. Teléfonos: 667 8798 - 667 8959 Cartagena, Colombia',
      Menu: 'http://brasaybarril.com/menu/',
      Sitioweb:'http://brasaybarril.com/'},
      {id:2,
      nombre:'San Valentin',
      direccion:'# 10, Cl. 37 #2886 Cartagena de Indias, Colombia',
      Menu:'http://www.sanvalentinrestaurantebar.com/menudiasemana.html',
      Sitioweb:'http://www.sanvalentinrestaurantebar.com/index.html'},
      {id:3,
        nombre:'ARRABAL',
        direccion:'CALLE SAN JUAN Nº 25 – 56 GETSEMANÍ, CARTAGENA',
        Menu:'https://arrabalgastrobar.com/wp-content/uploads/2022/08/carta-2022.pdf',
        Sitioweb:'https://arrabalgastrobar.com/'},
      {id:4,
        nombre:'SAN NICOLAS',
        direccion:'Centro Calle Larga Cl. 25 #8b-159 Cartagena Colombia',
        Menu:'https://docs.google.com/viewerng/viewer?url=http://sannicolasrestaurantebar.com/wp-content/uploads/2023/04/MENU-NOCHE-FORMATO-DIA-SN-2023-Tamano-Actualizado.pdf',
        Sitioweb:'https://sannicolasrestaurantebar.com/'}
    ],
    imagenes: [
      {id:1,
      imagen:'../assets/brasaybarril.png'},
      {id:1,
        imagen:'../assets/brasaybarril.png'},
      {id:1,
        imagen:'../assets/brasaybarril.png'},
      {id:1,
        imagen:'../assets/brasaybarril.png'}

      
    ],
    restaurante:[],
    cart:[]
  }),
  getters: {
    getrestaurantId: (state) => (restauranteId) => {
      return state.restaurant.find((restaurante) => restaurante.id === restauranteId)
    },
    imagenesId: (state) => (imagenesId) => {
      return state.imagenes.find((restaurante) => restaurante.id === imagenesId)
    }
  },

  actions: {
    addToCart(restaurante) {
      this.cart.push(restaurante);
      localStorage.setItem('producto', restaurante.value)
    },
    removeFromCart(restaurante) {
      const index = this.cart.indexOf(restaurante)
      this.cart.splice(index, 1)
    }
  }
})