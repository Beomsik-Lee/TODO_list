var app = new Vue({
    el: '#app',
    data: {
        title: 'My TODO List',
        newTodo: '',
        todos: [
            {title: 'This is a sample1', done: false},
            {title: 'This is a sample2', done: false},
            {title: 'This is a sample3', done: false}
        ]
    },
    methods: {
        addTodo: function() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo: function(todo) {
            var todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone: function() {
            for(todo of this.todos) {
                todo.done = true;
            }
        },
        clickItem: function(todo) {
            todo.done = !todo.done;
        }
    }
});