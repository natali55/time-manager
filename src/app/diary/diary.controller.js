(function () {
    'use strict';

    angular
        .module('app.diary')
        .controller('DiaryController', ['$localStorage', 'utilsService', 'ModalsService', 'defaultNotes', function ($localStorage, utilsService, ModalsService, defaultNotes) {
            let vm = this;
            let dialog;
            let init = () => {
                vm.notes = $localStorage.notes || defaultNotes;
                $localStorage.notes = vm.notes;
                vm.noteFormOpened = false;
                vm.newNote = '';
            };
            vm.deleteNote = ($index) => {
                if (dialog) {
                    return;
                }
                dialog = ModalsService.confirm({
                    text: 'Are you sure you want to delete this note?',
                    buttons: ['yes', 'no']
                });
                dialog.closePromise.then(function (close) {
                    dialog = false;
                    if (close.value === 'yes') {
                        vm.notes.splice($index, 1);
                    }
                });
            };
            vm.editNote = (note) => {
                note.isEditing = !note.isEditing;
            };
            vm.saveNote = (note) => {
                note.isEditing = false;
            };
            vm.addNewNote = () => {
                let newId;
                let newNoteCopy;
                if (!utilsService.validateForm(vm.DiaryForm)) {
                    return;
                }
                newId = utilsService.generateId(vm.notes);
                newNoteCopy = angular.copy(vm.newNote);
                vm.notes.unshift({
                    id: newId,
                    title: newNoteCopy.title,
                    description: newNoteCopy.description,
                    start: new Date()
                });
                vm.newNote = '';
                vm.noteFormOpened = false;
                utilsService.setUntouched(vm.DiaryForm);

            };
            init();
        }]);
})();
