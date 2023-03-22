var allData = [];
var isUpdateSelected = false;
var updateIndex = null;

function validateForm() {
    let isValid = true;
    var username = document.getElementById("username")
    var fullname = document.getElementById("fullname")
    var address = document.getElementById("address")
    var password = document.getElementById("password")

    if (!username.value) {
        username.style.border = '2px solid red'
        isValid = false
    } else {
        username.style.border = ''
    }

    if (!fullname.value) {
        fullname.style.border = '2px solid red'
        isValid = false
    } else {
        fullname.style.border = ''
    }

    if (!address.value) {
        address.style.border = '2px solid red'
        isValid = false
    } else {
        address.style.border = ''
    }

    if (!password.value) {
        password.style.border = '2px solid red'
        isValid = false
    } else {
        password.style.border = ''
    }

    return {
        isValid
    }
}
function handleData() {
    const { isValid } = validateForm();
    if (!isValid) {
        return
    }
    var username = document.getElementById("username")
    var fullname = document.getElementById("fullname")
    var address = document.getElementById("address")
    var password = document.getElementById("password")


    if (isUpdateSelected) {
        return updateData();
    }
    var formData = {
        username: username.value,
        fullname: fullname.value,
        address: address.value,
        password: password.value
    };
    allData.push(formData);
    username.value = ""
    fullname.value = ""
    address.value = ""
    password.value = ""
    showData();

};

function showData() {
    let tableData = allData.map((el, index) => {
        let str = `<tr><th scope="row">${index + 1}</th><td>${el.username}</td><td>${el.fullname}</td><td>${el.address}</td><td>${el.password}</td><td><button class="btn btn-danger" onclick="deleteData(${index})">Delete</button><button class="btn btn-success" onclick="selectForUpdate(${index})">Update</button></td></tr>`
        return str;
    });

    document.getElementById("table-data").innerHTML = tableData.join("");
};

function deleteData(index) {
    allData.splice(Number(index), 1);
    showData();
};

function selectForUpdate(index) {
    let selectedObject = allData[Number(index)];
    document.getElementById("username").value = selectedObject.username;
    document.getElementById("fullname").value = selectedObject.fullname;
    document.getElementById("address").value = selectedObject.address;
    document.getElementById("password").value = selectedObject.password;
    isUpdateSelected = true;
    updateIndex = Number(index);
};

function updateData() {
    var username = document.getElementById("username")
    var fullname = document.getElementById("fullname")
    var address = document.getElementById("address")
    var password = document.getElementById("password");
    allData[updateIndex].username = username.value
    allData[updateIndex].fullname = fullname.value
    allData[updateIndex].address = address.value
    allData[updateIndex].password = password.value
    showData();
    isUpdateSelected = false;
    updateIndex = null;
    username.value = ""
    fullname.value = ""
    address.value = ""
    password.value = ""
}

