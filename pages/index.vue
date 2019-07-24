<template>
  <section class="position">
    <p class="sizetext">Email :</p>
    <div class="padding"></div>
    <form @submit.prevent>

      <form>
        <b-input v-model="account.email"
                 id="nuxtfire-email"
                 class="pass"
                 placeholder="Enter your email"
                 type="email"
                 icon="email">
        </b-input>
      </form>

      <p class="sizetext">Password :</p>
      <div class="padding"></div>

      <form>
        <b-input v-model="account.password"
                 id="nuxtfire-password"
                 class="pass"
                 type="password"
                 placeholder="Enter your password"
                 icon="lock"
                 password-reveal>
        </b-input>
      </form>

      <div class="paddingregister">
        <b-button @click="login" type="submit">Login</b-button>
      </div>
      <div v-if="isError" class="v-alert">
        <p class="mb-0">{{ errMsg }}</p>
      </div>

    </form>
  </section>
</template>

<script>
  export default {
    name: "HomePage",
    data: () => ({
      account: {
        email: "",
        password: ""
      },
      isError: false,
      errMsg: ''
    }),
    methods: {
      login() {
        this.$store.dispatch("users/login",
          this.account).catch(error => {
          this.isError = true;
          this.errMsg = error.code;

          setTimeout(() => {
            this.isError = false;
          }, 5000)
        });

        this.$router.push("/admin");
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
  .paddingregister {

    padding-top: 50px;
    padding-left: 212px;
  }

  .position {

    padding-top: 100px;
    padding-left: 150px;
  }


</style>
