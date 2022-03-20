"use strict";

const formEl = document.querySelector(".todo-form");

const nameEl = document.querySelector('[name="name"]');
const ownerEl = document.querySelector('[name="owner"]');
const statusEl = document.querySelector('[name="status"]');

const tableEl = document.querySelector(".todo-table");
const tableBodyEl = tableEl.querySelector("tbody");

const completedEl = document.getElementById("completed");

const methodsMap = {
    'completed': 0,
};

// FORM LISTENERS

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameEl.value;
    const owner = ownerEl.value;
    const status = statusEl.value;

    const nameFieldIsValid = validateField(nameEl, /^[a-zA-Z]/);
    const ownerFieldIsValid = validateField(
        ownerEl,
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    );
    const statusFieldIsValid = validateField(statusEl, /^[a-zA-Z]/);

    if (nameFieldIsValid && ownerFieldIsValid && statusFieldIsValid) {
        appendToTable({
            name,
            owner,
            status,
        });
        clearForm();
    }
});

formEl.addEventListener("reset", clearForm);

function clearForm() {
    nameEl.value = '';
    ownerEl.value = '';
    statusEl.value = '';
}

function isEmpty(value) {
    return value.trim().length === 0;
}

function validateField(el, regex) {
    const value = el.value;
    const result = regex.test(value);
    if (!result) {
        el.classList.add("error");
    } else {
        el.classList.remove("error");
    }
    return result;
}

nameEl.addEventListener("change", (e) => {
    validateField(e.target, /^[a-zA-Z]/);
});

nameEl.addEventListener("blur", (e) => {
    validateField(e.target, /^[a-zA-Z]/);
});

ownerEl.addEventListener("change", (e) => {
    validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

ownerEl.addEventListener("blur", (e) => {
    validateField(e.target, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});

statusEl.addEventListener("blur", (e) => {
    validateField(e.target, /^[a-zA-Z]/);
});

// TABLE

function createTableItem(obj) {
    const trEl = document.createElement("tr");

    Object.entries(obj).forEach(([key, value]) => {
        const tdEl = document.createElement("td");
        tdEl.innerText = value;
        trEl.appendChild(tdEl);
    });

    const removeButtonEl = createRemoveButton(obj.status);
    trEl.appendChild(removeButtonEl);
    return trEl;
}

function appendToTable(obj) {
    tableBodyEl.prepend(createTableItem(obj));

    countTask(obj.status, methodsMap[obj.status] += 1);
    showRowTask();
}

function createRemoveButton(objStatus) {
    const tdEl = document.createElement("td");
    const buttonEl = document.createElement("button");
    buttonEl.innerText = "Remove";
    tdEl.appendChild(buttonEl);

    function handleClickRemoveButton(e) {
        buttonEl.removeEventListener("click", handleClickRemoveButton);

        let selectRow = buttonEl.closest('tr');
        selectRow.parentElement.removeChild(selectRow);

        countTask(objStatus, methodsMap[objStatus] -= 1);
        showRowTask();
    }

    buttonEl.addEventListener("click", handleClickRemoveButton);

    return tdEl;
}

function countTask(objStatus, index) {
    if (objStatus === 'completed') {
        index;
    }
}

function showRowTask() {
    completedEl.innerHTML = methodsMap.completed;
}