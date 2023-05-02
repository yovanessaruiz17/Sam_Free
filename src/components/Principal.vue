<template>
    <div>
        <header class="header">
        <div class="logo">
            <img src="../assets/bitcoinscamscammerfraudhackercybercrime_95888.png" alt="" >
        </div>
        <nav>
            <ul class="items">
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Transporte</a></li>
                <li><a href="#">Restaurantes</a></li>
                <li><a href="#">Bares</a></li>
            </ul>
        </nav>
    </header>
    </div>    
</template>
<style>
header{
   /* background-repeat: no-repeat;
    background-attachment: fixed;*/
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 15px ;
    background-color: green;
    font-size: 70px;
    width: 100%;
}
.logo{
    display: flex;
    align-items: center;
}
.logo img{
    height: 100px;
    margin-right: 10px;
}
.items{
    display: flex;
    list-style:none;
    color: aliceblue;
    margin-right: 30px;
}
.items li{
    border-radius: 2px;
    margin: 0;
}
.items li a{
    padding: 10px 16px;
    text-decoration: none;
    font-size: 20px;
    color: aliceblue;
}
</style>
