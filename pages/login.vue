<template>
  <section class="position">
    <p class="sizetext">Email :</p>
    <div class="padding"></div>
    <b-field>
      <b-input class="pass"
               placeholder="Enter your email"
               type="email"
               icon="email">
      </b-input>
    </b-field>
    <p class="sizetext">Password :</p>
    <div class="padding"></div>
    <b-field>
      <b-input class="pass"
               type="password"
               placeholder="Enter your password"
               icon="lock"
               password-reveal>
      </b-input>
    </b-field>
    <div class="paddinglogin">
      <b-button @click="login">Login</b-button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "login",
    data: function () {
      return {};
    },
    methods: {
      login() {
        this.$notification.open('Hello again')
      }
    }
  }
</script>

<style scoped>

  .pass {

    width: 500px;
  }

  .sizetext {

    color: white;
    font-size: large;
    padding-top: 15px;

  }

  .padding {

    padding-top: 15px;
  }
  .paddinglogin {

    padding-top: 50px;
    padding-left: 212px;
  }

  .position {

    padding-top: 100px;
    padding-left: 150px;
  }


</style>
