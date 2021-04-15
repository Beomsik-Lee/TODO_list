var app = new Vue({
    el: '#app',
    data: {
        title: 'My TODO List',
        newTodo: '',
        countId: 0,
        todos: []
    },
    methods: {
        addTodo: function() {
            // オブジェクト挿入
            this.todos.push({
                id: this.countId,
                title: this.newTodo,
                done: false
            });

            // TODOのIDを増加
            this.countId = this.countId + 1;

            // TODO入力後、値を消す
            this.newTodo = '';
        },
        removeTodo: function(todo) {
            // 該当インデックスを取得
            var todoIndex = this.todos.indexOf(todo);

            // 該当項目を削除
            this.todos.splice(todoIndex, 1);
        },
        allDone: function() {
            // 全てのTODOチェック状態をOnにする
            for(todo of this.todos) {
                todo.done = true;
            }
        },
        clickItem: function(todo) {
            // 該当項目のチェック状態を反転する
            todo.done = !todo.done;
        }
    },
    computed: {
        checkDone: function() {
            var numberOfDone = 0; // 済の数
            var numberOfYet = 0; // 未完の数

            // チェックされている項目数を取得
            numberOfDone = this.todos.filter(function(todo) {
                return todo.done;
            }).length;

            // 全項目から済みの数だけ引いた分を未完の数とする
            numberOfYet = this.todos.length - numberOfDone;

            return '済: ' + numberOfDone + ' 未: ' + numberOfYet;
        }
    }
});
