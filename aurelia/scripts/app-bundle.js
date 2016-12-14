define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.options.root = '/';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home' },
                { route: 'todos', name: 'todo', moduleId: './todo/todoApp', nav: true, title: 'TODO' },
                { route: 'httpTest', name: 'httpTest', moduleId: './httpTest/httpTest', nav: true, title: 'HttpTest' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('home/home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home() {
            this.welcomeMessage = "Hello Netapsys";
        }
        ;
        return Home;
    }());
    exports.Home = Home;
});

define('httpTest/httpTest',["require", "exports"], function (require, exports) {
    "use strict";
    var HttpTest = (function () {
        function HttpTest() {
            this.welcomeMessage = "Hello Netapsys";
        }
        ;
        return HttpTest;
    }());
    exports.HttpTest = HttpTest;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('todo/todo',["require", "exports"], function (require, exports) {
    "use strict";
    var Todo = (function () {
        function Todo(description) {
            this.description = description;
            this.done = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

define('todo/todoApp',["require", "exports", "./todo"], function (require, exports, todo_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.heading = "Todos toto";
            this.todoDescription = '';
            this.todos = [];
        }
        ;
        App.prototype.addTodo = function () {
            if (this.todoDescription) {
                this.todos.push(new todo_1.Todo(this.todoDescription));
                this.todoDescription = '';
            }
        };
        ;
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);
            }
        };
        ;
        return App;
    }());
    exports.App = App;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <ul>\n        <li repeat.for=\"row of router.navigation\">\n          <a href.bind=\"row.href\">${row.title}</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <router-view></router-view>\n</template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>${welcomeMessage}</h1>\r\n</template>"; });
define('text!httpTest/httpTest.html', ['module'], function(module) { module.exports = "<template>\r\n</template>"; });
define('text!todo/todoApp.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${heading}</h1>\r\n\r\n  <form submit.trigger=\"addTodo()\">\r\n    <input type=\"text\" value.bind=\"todoDescription\" />\r\n    <button type=\"submit\">Add Todo</button>\r\n  </form>\r\n\r\n  <ul>\r\n    <li repeat.for=\"todo of todos\">\r\n      <input type=\"checkbox\" checked.bind=\"todo.done\" />\r\n      <span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">${todo.description}</span>\r\n      <button click.trigger=\"removeTodo(todo)\">Remove</button>\r\n    </li>\r\n  </ul>\r\n\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map