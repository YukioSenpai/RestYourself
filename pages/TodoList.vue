<template>

  <section class="todoapp">

    <header class="header">

      <h1 class="titlefortodos">Ur brain needs help ?</h1>

      <input type="text" class="new-todo" placeholder="Add task" v-model="newTodo" @keyup.enter="addTodo">

    </header>

    <div class="main">

      <input type="checkbox" class="toggle-all" v-model="allDone">

      <ul class="todo-list">

        <li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo === editing}">

          <div class="view">

            <input type="checkbox" v-model="todo.completed" class="toggle">

            <label @dblclick="editTodo(todo)"> {{ todo.name }}</label>

            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>

          </div>

          <input type="text" class="edit" v-model="todo.name" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" v-focus="todo === editing">

        </li>

      </ul>

    </div>

    <footer class="footer" v-show="hasTodos">

      <span class="todo-count"><strong class="todo-count-prev">{{ remaining }}</strong> Task to do</span>

      <ul class="filters">

        <li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">All</a></li>

        <li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">To Do</a></li>

        <li><a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Done</a></li>

      </ul>

      <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Delete done task</button>

    </footer>

  </section>

</template>

<script>

  import Vue from 'vue'

  export default {

    data () {

      return {

        todos: [],

        newTodo:'',

        filter: 'all',

        editing: null,

        oldTodo: ''

      }

    },

    methods: {

      addTodo () {

        this.todos.push({

          completed: false,

          name: this.newTodo

        })


        this.newTodo = ''

      },

      deleteTodo (todo) {

        this.todos = this.todos.filter(i => i !== todo)

      },

      deleteCompleted () {

        this.todos = this.todos.filter(todo => !todo.completed)

      },

      editTodo(todo) {

        this.editing = todo
        this.oldTodo = todo.name

      },

      doneEdit () {

        this.editing = null

      },

      cancelEdit () {

        this.editing.name = this.oldTodo

        this.doneEdit()

      }

    },

    computed: {

      allDone: {

        get () {

          return this.remaining === 0

        },

        set (value) {

          this.todos.forEach(todo => {

            todo.completed = true

          })

        }

      },

      remaining () {

        return this.todos.filter(todo => !todo.completed).length

      },

      completed () {

        return this.todos.filter(todo => todo.completed).length

      },



      hasTodos () {

        return this.todos.length > 0

      },

      filteredTodos () {

        if (this.filter === 'todo') {

          return this.todos.filter(todo => !todo.completed)

        } else if (this.filter === 'done') {

          return this.todos.filter(todo => todo.completed)

        }

        return this.todos

      }

    },

    directives: {

      focus (el, value) {

        if (value) {

          Vue.nextTick(_ => {

            el.focus()

          })

        }

      }

    }

  }

</script>

<style>

  .todoapp {
    color: #ffffff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
  .titlefortodos {

    color: #ffffff;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }

  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .toggle-all {
    text-align: center;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .todo-list li:last-child {
    border-bottom: none;
  }

  .todo-list li.editing {
    border-bottom: none;
    padding: 0;
  }

  .todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }

  .todo-list li.editing .view {
    display: none;
  }

  .todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
  }

  .todo-list li .toggle {
    opacity: 0;
  }

  .todo-list li .toggle + label {
    /*
          Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
          IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
      */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }

  .todo-list li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }

  .todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }

  .todo-list li .destroy:hover {
    color: #af5b5e;
  }

  .todo-list li .destroy:after {
    content: '×';
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }
  .footer {
    color: #ffffff;
    background-image: url("../assets/stars2.jpg");
    padding: 20px 5px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }



  .todo-count {
    float: left;
    text-align: left;
  }
  .todo-count-prev {
    color: #ffffff;

  }

  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  .filters li {
    display: inline;
  }

  .filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  .info p {
    line-height: 1;
  }

  .info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  .info a:hover {
    text-decoration: underline;
  }

  /*
      Hack to remove background from Mobile Safari.
      Can't use it globally since it destroys checkboxes in Firefox
  */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    .toggle-all,
    .todo-list li .toggle {
      background: none;
    }

    .todo-list li .toggle {
      height: 40px;
    }
  }

  @media (max-width: 430px) {
    .footer {
      height: 50px;
    }

    .filters {
      bottom: 10px;
    }
  }

</style>
