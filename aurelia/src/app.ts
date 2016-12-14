import * as router from 'aurelia-router';

export class App {
  private router: router.RouteConfig;

  configureRouter(config, router: router.RouteConfig) {
    this.router = router;
    config.title = 'Aurelia';
    config.options.root = '/';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home' },
      { route: 'todos', name: 'todo', moduleId: './todo/todoApp', nav: true, title: 'TODO' },
      { route: 'httpTest', name: 'httpTest', moduleId: './httpTest/httpTest', nav: true, title: 'HttpTest'}
    ]);
  }
}
