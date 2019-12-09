<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <formulario v-on:refresh="refresh"></formulario>
    <table>
      <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Telefone</th>
            <th>Especialidade</th>
            <th>Cep</th>           
            <th>Endereço</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item of itens">
            <td>{{ item.nome }} </td>
            <td>{{ item.descricao }}</td>
            <td>{{ item.telefone }}</td>
            <td>{{ item.especialidade }}</td>
            <td>{{ item.cep }}</td>
            <td>{{ item.endereco }}</td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>

<script>
import axios from 'axios';
import formulario from './InstituicaoFormulario';

export default {
  name: 'InstituicaoLista',
  data () {
    return {
      title: 'Lista de Instituiçõess',
      itens: []
    }
  },
  components: { formulario },
  methods: {
    refresh: function(){
      axios
        .get('http://localhost:8000/instituicao')
        .then(response=>{
          this.itens = response.data;
        });
    }
  },
  created: function(){
    this.refresh();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
