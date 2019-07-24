<template>
  <div class="lol">
    <nav
      class="navbar header is-primary"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item spacenavbar"
          href="/"
        >
          <img
            class="imglogo"
            src="~assets/nuxt.png"
            alt="Buefy"
            height="15"
          >
        </a>

        <a
          class="navbar"
        >
          <p id="whitepadding2"> Get some rest, i'm here for you</p>
        </a>
      </div>
      <div class="coucou">
        <b-button tag="router-link"
                  to="/Register"
                  type="is-light">
          Sign up
        </b-button>
      </div>
      <div class="coucou2">
        <b-button tag="router-link"
                  to="/login"
                  type="is-light">
          Sign in
        </b-button>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p id="white" class="menu-label">
          Parcourir
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
              class="idk"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
        <p id="whitepadding" class="menu-label">
          Playlist
        </p>
        <ul class="menu-list">
          <li
            v-for="(object, key) of objects"
            :key="key"
          >
            <nuxt-link
              :to="object.to"
              exact-active-class="is-active"
              class="idk"
            >
              <b-icon :icon="object.icon" /> {{ object.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>

    <section class="xd">

    </section>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { VueTypedJs } from 'vue-typed-js'

  Vue.use(VueTypedJs)

  export default {
    data() {
      return {
        items: [
          {
            title: 'Home',
            icon: 'hamburger',
            to: { name: 'index' }
          },
          {
            title: 'Inspire',
            icon: 'folder-open',
            to: { name: 'inspire' }
          }
        ],
        objects: [
          {
            title: 'Register',
            icon: 'hamburger',
            to: { name: 'Register'}
          },
          {
            title: 'Calculator',
            icon: 'hamburger',
            to: { name: 'Calculator'}
          },
          {
            title: 'TodoList',
            icon: 'hamburger',
            to: { name: 'TodoList'}
          }
        ],
        name: '',
        selected: null
      }
    },
    computed: {
      filteredDataArray() {
        return this.data.filter((option) => {
          return option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        })
      }
    }
}
</script>

<style>

  .coucou {

    padding-left: 700px;
    padding-top: 10px;
  }

  .coucou2 {

    padding-top: 10px;
    padding-left: 20px;
  }

  .imglogo {

    transform: scale(2.5);
    padding-left: 15px;
    padding-top: 2px;
  }

  .lol {

    background-color: #ffffff!important;
    height: 2000px;
    background-image: url("../assets/stars2.jpg");

  }
  .navbar {

    background-image: url("../assets/stars.jpg");

  }
  .main-content {

  padding-bottom: 45px;
  }
  .xd {

    background-color: #ffffff !important;

  }
  /*.navbar-item {

    background-image: url("../assets/stars.jpg");

  }*/
  .idk {

    background-image: url("../assets/stars.jpg");
  }
  p {
    font-weight: bold;
  }
  #white {

    color: #F7F8FB;

  }
  #whitepadding {

    color: #F7F8FB;
    padding-top: 10px;

  }
  #whitepadding2 {

     color: #F7F8FB;
     padding-left: 220px;
    padding-top: 8px;
    font-size: 1.75rem;

   }
  .spacenavbar{
    margin-right: 500px;
  }

</style>
