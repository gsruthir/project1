
function ToDoController($scope){
	var vm = this;
  // initialize an empty array to hold table date
  vm.tableRow = [];
  // initialize an empty object for default values (a carbon copy)
  //vm.master = {};
  // initialize the actual object
  vm.todoForm = {
  	//id: (Math.floor(Math.random()*100000)+1),
    id: 0,
    subject: '',
    isCompleted: false
  };
  
  /*$scope.$watch(
  	// this is the object on which the watch looks upon
    function(){
    	return vm.todoForm.id;
    },
    // this is the new object
    function(newId){
      if(vm.tableRow.length !== 0){
        for(var i = 0; i < vm.tableRow.length; i++){
          if(id === vm.tableRow[i].id){
            vm.todoForm.id = (Math.floor(Math.random()*1000));
          }
        }
      }
    },
    // this tells the watch to happen all the time
    true
  );*/
  
  // copy the actual object to the carbon copy object
  //vm.master = angular.copy(vm.todoForm);
  
  // this gets executed after the button is clicked
  vm.submitForm = function(todoForm){
  	var tempObj = {};
    tempObj = angular.copy(todoForm);
    
  	// add the form object to the array
    vm.tableRow.unshift(tempObj);
    // initialize back the actual to its original state
    //vm.todoForm = angular.copy(vm.master);
    vm.todoForm.id++;
    vm.todoForm.subject = '';
    vm.todoForm.isCompleted = false;
  };
  
  vm.removeCurrent = function($event,index){
  	$event.preventDefault();
    vm.tableRow.splice(index,1);
  };
}

ToDoController.$inject = ['$scope'];
angular.module('toDoListApp',[]).controller('toDoController',ToDoController);

