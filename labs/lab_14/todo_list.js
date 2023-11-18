"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const displayUsers = async () => {
	let users = await fetch(domain + "/users").then(response => {
		return response.json();
	}).then(json => {
		return json;
	});
	for (let user of users) {
		let option = $("<option>");
		option.text(user.name);
		option.val(user.id);
		$("#users").append(option);
	}
};

const viewList = async () => {
	let selectedId = $("#users :selected").val();

	let todos = await fetch(domain + "/todos/?userId=" + selectedId).then(response => {
		return response.json();
	}).then(json => {
		return json;
	});

	$("#list").empty();

	let table = $("<table>");
	let headerRow = $("<tr>");
	let headerCell1 = $("<th>").text("ToDo Items");
	let headerCell2 = $("<th>").text("Completed");
	headerRow.append(headerCell1, headerCell2);
	table.append(headerRow);

	for (let todo of todos) {
		let row = $("<tr>");
		let cell1 = $("<td>").text(todo.title);
		let cell2 = $("<td>").text(todo.completed);
		row.append(cell1, cell2);
		table.append(row);
	}
	$("#list").append(table);
};

$(document).ready(async () => {
	displayUsers();

	$("#view_list").click(viewList);
});