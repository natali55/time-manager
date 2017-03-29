(function(){
    'use strict';

    angular
        .module('app.diary')
        .controller('DiaryController',['utilsService', function(utilsService){
            var vm = this;
            function init(){
                vm.notes = [
                    {
                        id:'4',
                        name:'Meeting with Lindsay',
                        description:'We have to meet near the caffe in the city center center caffe to meet',
                        date:new Date('11/11/2016'),
                        highlightWord:''
                    },
                    {
                        id:'3',
                        name:'Some',
                        description:'We have to meet near the caffe in the city center ',
                        date:new Date('11/11/2016'),
                        highlightWord:''
                    },
                    {
                        id:'2',
                        name:'Event 1',
                        description:'We have to meet near the caffe in the city center ',
                        date:new Date('11/11/2016'),
                        highlightWord:''
                    },
                    {
                        id:'1',
                        name:'Mother',
                        description:'We have to meet near the caffe in the city center ',
                        date:new Date('11/11/2016'),
                        highlightWord:'near'
                    }
                ];
                vm.noteFormOpened = false;
                vm.newNote = '';
            }
            vm.deleteNote = function($index) {
                vm.notes.splice($index,1);
            };
            vm.editNote = function(note){
                note.isEditing = !note.isEditing;
            };
            vm.saveNote = function(note){
                note.isEditing = false;
            };
            vm.addNewNote = function() {
                var newId, newNoteCopy;
                if (!utilsService.validateForm(vm.DiaryForm)) {
                    return;
                }
                newId = utilsService.generateId(vm.notes);
                newNoteCopy = angular.copy(vm.newNote);
                vm.notes.unshift({
                    id:newId,
                    name:newNoteCopy.name,
                    description:newNoteCopy.description,
                    date:new Date()
                });
                vm.newNote = '';
                utilsService.setUntouched(vm.DiaryForm);

            };
            init();
        }]);
})();
