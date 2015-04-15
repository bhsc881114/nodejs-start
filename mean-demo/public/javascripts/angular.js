// 第二个参数是依赖的模块列表
angular.module('polls', ['pollServices'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/polls', {templateUrl: 'partials/list.html', controller: PollListCtrl}).
    when('/poll/:pollId', {templateUrl: 'partials/item.html', controller: PollItemCtrl}).
    when('/new', {templateUrl: 'partials/new.html', controller: PollNewCtrl}).
    otherwise({redirectTo: '/polls'});
  }]);
// 绑定模板和controller，模板的数据和controller里的Model双向绑定
