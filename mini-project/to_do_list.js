"use strict";

//Abstracted query selector to be used to find HTML elements.
const $ = selector => document.querySelector(selector);

//The to-do list HTML element that holds the to-do items.
var list = $("#taskList");

//ID to be used and incremented as the number of to-do items increase.
var id = 1;

/**
 * Represents a To-Do item in the To-Do list.
 */
class ToDoItem {
    /**
     * Constructs the To-Do item object and creates its required HTML elements.
     * 
     * @param {String} startingTaskText The starting text that will be in the task input element.
     * @param {String} startingDateText The starting date that will be in the due date input element.
     * @param {Number} id The ID of the to-do item.
     */
    constructor(startingTaskText, startingDateText, id) {
        //Construct object using passed parameters.
        this.startingTaskText = startingTaskText;
        this.startingDateText = startingDateText;
        this.id = id;

        //Create HTML elements for the To-do Item.
        this.entry = document.createElement('li'); //New list entry for the new task.
        this.taskText = document.createElement('span'); //New Text span for the task portion.
        this.taskEntry = document.createElement('input'); //Input to store the task text.
        this.dateText = document.createElement('span'); //New Text span for the due date portion.
        this.dateEntry = document.createElement('input'); //Input to store the date text.
        this.deleteButton = document.createElement("button"); //New Button element for deleting the task.
        this.list = document.createElement("ol")
    }

    /**
     * Builds the to-do item by setting up its associated HTML elements.
     */
    buildItem(){
        this.taskText.textContent = "Task #" + this.id + ": "; //Hardcoded text for each task.
        this.dateText.textContent = " Due Date: "; //Hardcoded text for each due date.
        this.taskEntry.value = this.startingTaskText; //Set the text of the task to the startingTaskText member.
        this.dateEntry.value = this.startingDateText; //Set the due date field to the startingDateText member.
        this.deleteButton.textContent = "X"; //Button text

        //Set attributes for HTML elements.
        this.deleteButton.className = "delete"
        this.taskEntry.disabled = true;
        this.dateEntry.disabled = true;
        this.dateEntry.setAttribute("type", "date");

        //Click event on the delete button to remove the item.
        this.deleteButton.addEventListener("click", () => {
            this.entry.remove();
        });

        //DblClick event for the task text so that it can be edited.
        this.taskEntry.addEventListener("dblclick", () => {
            this.taskEntry.disabled = false;
            if(this.taskEntry.value == "Double Click to Edit"){
                this.taskEntry.value = "";
            }
            this.taskEntry.focus();
        });
    
        //Focusout event to restrict editing privileges for the task text (to "save" the text).
        this.taskEntry.addEventListener("focusout", () => {
            this.taskEntry.disabled = true;
            if(this.taskEntry.value.length == 0){
                this.taskEntry.value = "Double Click to Edit"
            }
        });
    
        //DblClick event for the due date so that it can be edited.
        this.dateEntry.addEventListener("dblclick", () => {
            this.dateEntry.disabled = false;
            this.dateEntry.focus();
        });
    
        //Focusout event to restrict editing privileges for the due date (to "save" the date).
        this.dateEntry.addEventListener("focusout", () => {
            this.dateEntry.disabled = true;
        });
    
        //Associate child HTML elements with the li parent element (to fully build the to-do item).
        this.entry.appendChild(this.taskText);
        this.entry.appendChild(this.taskEntry);
        this.entry.appendChild(this.dateText);
        this.entry.appendChild(this.dateEntry);
        this.entry.appendChild(this.deleteButton);
    }

    /**
     * Adds the list HTML element that represents the to-do item to the HTML list
     * 
     * @param {HTMLOListElement} list The HTML list to add the entry to.
     */
    addItemToList(list){
        list.appendChild(this.entry);
    }
}

/**
 * Loads 5 example to-do items.
 */
function initialItems(){
    let tasks = ["Do Homework", "Do Laundry", "Clean Dishes", "Watch TV", "Update Computer"];
    let dueDates = ["2023-10-23", "2023-10-25", "2023-10-24", "2023-10-27", "2023-10-30"];
    for(let i = 0; i < 5; i++){
        addItem(tasks[i], dueDates[i]);
    }
}

/**
 * Adds a to-do item to the to-do list.
 * 
 * @param {String} taskExample The starting text for the task.
 * @param {String} dateExample The starting date for the due date.
 */
function addItem(taskExample, dateExample) {
    let toDoItem = new ToDoItem(taskExample, dateExample, id);
    toDoItem.buildItem();
    toDoItem.addItemToList(list);
    id++;
}

/**
 * Adds a blank item to the to-do list
 */
function addBlankItem(){
    addItem("Double Click to Edit","");
}

/*
 * Event listener that is activated when the website loads. Used to load initial items and set up
 * the add button event handler.
 */
document.addEventListener("DOMContentLoaded", () => {
    initialItems("","");
    $("#add").addEventListener("click", addBlankItem);
});