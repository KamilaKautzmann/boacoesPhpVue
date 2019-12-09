<template>
  <div class="hello">
    <form>
      Nome<input type="text" v-model="instituicao.nome"/>
      Descrição<input type="text" v-model="instituicao.descricao"/>
      Cep<input type="text" v-model="instituicao.cep" @change="buscaCep"/>
      Endereço<input type="text" v-model="instituicao.endereco"/>
      Especialidade<input type="text" v-model="instituicao.especialidade"/>
      Telefone<input type="text" v-model="instituicao.telefone"/>
      <button type="button" v-on:click="cadastrar()">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InstituicaoFormulario',
  data () {
    return {
      instituicao: { 
        nome: '',
        descricao: '',
        cep: '',
        endereco: '',
        especialidade: '',
        telefone: ''
      }
    }
  },
  methods: {
    cadastrar: function(){
      axios
        .post('http://localhost:8000/instituicao',this.instituicao)
        .then(response => {
            this.$emit('refresh');
        });
    },
    buscaCep: function() {
      axios
        .get('https://viacep.com.br/ws/'+this.instituicao.cep+'/json/')
        .then(response=>{
            this.instituicao.endereco = response.data.logradouro;
        });
    }
  },
  created: function(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
