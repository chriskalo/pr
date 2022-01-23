// code for the dropdown on mobile

var flag = false;
var element = document.getElementById("xaxa");
var footer = document.getElementById("footer");
var desktop = document.getElementById("desktop");
function myFunction() {

    if (flag === false) {
        element.classList.add("hide-logo");
        document.getElementsByClassName("navbar-toggler-icon")[0].style.backgroundImage = "url('../images/toggletwo.png')";
        desktop.style.display = "none";
        footer.style.display = "block";
        footer.classList.add("mobile-footer");
        flag = true;
    } else {
        footer.classList.remove("mobile-footer");
        footer.style.display = "none";
        element.classList.remove("hide-logo");
        document.getElementsByClassName("navbar-toggler-icon")[0].style.backgroundImage = "url('../images/menu.png')";
        desktop.style.display = "block";
        flag = false;
    }

}


// code for the form validation
let emailFlag;
let nameFlag;
let phoneFlag;
let checkBoxFlag;
let letters;

function validateForm() {

    if (document.contactForm.option1.checked || document.contactForm.option2.checked) {
        checkBoxFlag = true;
        document.getElementById("checkboxText").classList.remove("invalid-checkbox");
    } else {
        checkBoxFlag = false;
        document.getElementById("checkboxText").classList.add("invalid-checkbox");
    }

    console.log('name: ' + nameFlag + ', email: ' + emailFlag + ', phone: ' + phoneFlag + ', checkbox: ' + checkBoxFlag);

    if (nameFlag && emailFlag && phoneFlag && checkBoxFlag) {
        return true;
    } else {
        return false;
    }

}



document.querySelectorAll('input').forEach(item => {
    item.addEventListener('change', event => {
        if (event.target.id === 'fullName') {
            let fullName = document.getElementById("fullName").value
            letters = /^[a-zA-Z]+ [a-zA-Z]+$/;

            if (fullName.match(letters)) {
                nameFlag = true;
                document.getElementById("fullName").classList.remove("invalid-input");
            } else {
                nameFlag = false;
                document.getElementById("fullName").classList.add("invalid-input");
                document.getElementById("fullName").value = '';
                document.getElementById("fullName").setAttribute("placeholder", "ex: Giannis Papadopoulos");

            }
        } else if (event.target.id === 'email') {
            let email = document.getElementById("email").value;
            letters = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email.match(letters) && email.substring(email.indexOf('@')) === "@spitogatos.gr") {
                emailFlag = true;
                document.getElementById("email").classList.remove("invalid-input");
            } else {
                emailFlag = false;
                document.getElementById("email").classList.add("invalid-input");
                document.getElementById("email").value = '';
                document.getElementById("email").setAttribute("placeholder", "ex: giannis@spitogatos.gr");

            }
        } else if (event.target.id === 'tel') {
            letters = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
            let tel = document.getElementById("tel").value;
            if (tel.match(letters)) {
                phoneFlag = true;
                document.getElementById("tel").classList.remove("invalid-input");
            } else {
                phoneFlag = false;
                document.getElementById("tel").classList.add("invalid-input");
                document.getElementById("tel").value = '';
                document.getElementById("tel").setAttribute("placeholder", "ex: 123-123-1234");

            }
        } else if (event.target.id === 'inlineCheckbox1' || event.target.id === 'inlineCheckbox2') {
            if (document.contactForm.option1.checked || document.contactForm.option2.checked) {
                document.getElementById("checkboxText").classList.remove("invalid-checkbox");
            } else {
                document.getElementById("checkboxText").classList.add("invalid-checkbox");
            }
        }

    });
});


document.getElementById('message').addEventListener('input', function () {
    document.getElementById('charactersCounter').innerText = document.getElementById('message').value.length;
});



let categories;

function populateForm() {
    $.ajax(
        {
            type: "GET",
            url: "https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b",
            success: function (data) {
                categories = data;
                var _select = document.getElementById("category1");
                data.forEach(function (category) {
                    _select.options[_select.options.length] = new Option(category.name);
                });


            }
        });
}

document.getElementById('category1').addEventListener('input', function () {
    var _select = document.getElementById("subcategory1");
    _select.innerHTML = '<option disabled selected>Subcategory</option>';
    let index = categories.findIndex(element => element.name == this.value);

    if (categories[index].hasOwnProperty('subCategories')) {
        categories[index].subCategories.forEach(function (subcategory) {
            _select.options[_select.options.length] = new Option(subcategory.name);
        });

    } else {
        console.log('mpa');
    }
});


// document.getElementById('spot').addEventListener('mouseover', function () {
//     document.getElementById('spot').style.width = '300px';
//     document.getElementById('spot').style.height = '300px';
//     document.getElementById('test').innerText = 'chris@spitogatos.gr';
// });