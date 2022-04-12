class TodoApp {
    constructor() {
        this.todoList = [];
    }

    add(item) {
        if (item instanceof TodoItem) {
            this.todoList.push(item);

            if (item.isPinned === true) {
                this.todoList.unshift(item);
            }

            if (item.canExpire === true) {
                let index = this.todoList.findIndex((element) => element.id === item.id);

                setTimeout(() => {
                    this.todoList.splice(index, 1);
                }, item.delay);
            }
        } else throw 'Does not belong to class TodoItem';
    }

    remove(id) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                this.todoList.splice(i, 1);
            }
        }
    }

    clear() {
        this.todoList.splice(0, this.todoList.length);
    }

}

class TodoItem {
    constructor({ name, id, createdDate }) {
        this.name = name;
        this.id = id;
        this.createdDate = createdDate;
    }

    updateName(name) {
        this.name = name;
    }

    static getRandomId() {
        return Math.floor(Math.random() * 1000) + 1;
    }
}

class PinnedTodoItem extends TodoItem {
    isPinned = true;
}

class ExpireTodoItem extends TodoItem {
    canExpire = true;

    constructor(obj, delay) {
        super(obj);
        this.delay = delay;
    }
}

let date = new Date();
let todoApp = new TodoApp();

todoApp.add(new TodoItem({
    name: 'Task_1',
    id: TodoItem.getRandomId(),
    createdDate: date,
}));

todoApp.add(new TodoItem({
    name: 'Task_2',
    id: TodoItem.getRandomId(),
    createdDate: date,
}));

todoApp.add(new PinnedTodoItem({
    name: 'Task_3',
    id: TodoItem.getRandomId(),
    createdDate: date,
}));

todoApp.add(new ExpireTodoItem({
    name: 'Task_4',
    id: TodoItem.getRandomId(),
    createdDate: date,
}, 1000));

todoApp.add(new TodoItem({
    name: 'Task_5',
    id: TodoItem.getRandomId(),
    createdDate: date,
}));

todoApp.add(new ExpireTodoItem({
    name: 'Task_6',
    id: TodoItem.getRandomId(),
    createdDate: date,
}, 2000));

console.log(todoApp.todoList);