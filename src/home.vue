<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <h1> <router-link :to="`/show/${user.id}`">  {{user.name}} </router-link> </h1>
      <p> {{user. email}} </p>
    </div>
    <button @click="show()" class="btn btn-secondary btn-block">Show</button>
    
    <router-link to="/add">Go to Form</router-link>
  </div>
</template>

<script>

export default {

  data() {
    return {
      users: [],
      title: "My First Vue App"
    }
  },
  mounted() {
    // this.show()
  },

  methods: {
    show: function() {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      
      this.$http.get(baseURI)
        .then((result) => {
          this.users = result.data
        })
    }
  }
}

</script>
<style>
</style>
