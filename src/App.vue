<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
input {
    width: 100%;
    padding: 8px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

#botoes {
    display:flex;
    justify-content: space-around;

}

button {
    width:30%;
    margin:3% 0;
    padding: 8px 8px; 
    margin: 8px 0;    
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px; 
    box-sizing: border-box;
}

#form {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
</style>
