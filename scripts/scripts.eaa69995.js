!function(){"use strict";angular.module("yeomanApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}])}(),function(){"use strict";angular.module("yeomanApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("todos");a.todos=c||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0),a.addTodo=function(){""!=a.todo?(a.todos.push({text:a.todo,done:!1,priority:!1}),a.todo=""):alert("enter something")},a.removeTodo=function(b){a.todos.splice(b,1)},a.editTodo=function(b){var c=prompt("Edit?");if(c)a.todos[b].text=c;else{if(null===c)return;alert("enter something!")}},a.doneTodo=function(b){a.todos[b].done=!a.todos[b].done},a.priorityTodo=function(b){a.todos[b].priority=!a.todos[b].priority},a.clearTodo=function(){a.todos=[]}}])}(),angular.module("yeomanApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yeomanApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="col-md-8 col-lg-8 col-sm-8 text-center col-md-offset-2 col-lg-offset-2 col-sm-offset-2 main"> <!-- Clear list --> <h2>NoteJS <button class="btn" ng-click="clearTodo()" aria-label="clear">clear all</button></h2> <!-- Todos input --> <form role="form" ng-submit="addTodo()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> </div> </form> <br> <!-- Todos list --> <div class="container-fluid" ui-sortable ng-model="todos"> <div class="row individualchore priority-{{todo.priority}} round" ng-repeat="todo in todos track by $index" style="padding-top:5px; padding-bottom:5px; cursor:move"> <div class="text-left col-md-8 col-sm-6 col-lg-8 col-xs-12 done-{{todo.done}} chore"> {{todo.text}} </div> <div class="col-md-4 col-sm-6 col-lg-4 col-xs-12"> <!-- Complete Item --> <button class="btn btn-done-{{todo.done}}" ng-click="doneTodo($index)" aria-label="Done">D</button> <!-- Important --> <button class="btn btn-priority-{{todo.priority}}" ng-click="priorityTodo($index)" aria-label="Priority">P</button> <!-- Edit Item --> <button class="btn btn-primary" ng-click="editTodo($index)" aria-label="Remove">edit</button> <!-- Remove Item --> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </div> </div> </div> </div>')}]);