let categories;

function populateForm() {
    $.ajax(
        {
            type: "GET",
            url: "https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b",
            success: function (data) {
                categories = data;
                // console.log(data[1].subCategories[0].name);
                // var _select = document.createElement("select");
                var _select = document.getElementById("category1");
                data.forEach(function (category) {
                    _select.options[_select.options.length] = new Option(category.name);
                });

                // document.body.appendChild(_select);
                // var _select2 = document.createElement("select");
                // document.getElementById.appendChild(_select);


            }
        })
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