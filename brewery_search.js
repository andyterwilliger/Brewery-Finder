url= ('https://api.openbrewerydb.org/breweries/search?query=')
const $id = $('id');
const $name = $('name');
const $brewery_type = $('brewery type');
const $street = $('street');
const $website_url = $('Website');
const $phone = $('phone');
const $form = $('form');
const $input = $('input[type = "text"]')

$form.on('submit', handleGetData);


function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    if (userInput === '') return;
    $input.val('');

    $.ajax(URL + userInput).then(function (data) {
        render(data);
    }, function (error) {
        console.log('something went awry')
    })
};

function render (specificBrew){
    function search(nameBrew, specificBrew){
        for (var i=0; i <specificBrew.length; i++){
            if (specificBrew[i].name === nameBrew){
                return specificBrew [i];
            }
        }
    }
}

    $('main').html(`
         <div id="brewery">   
            <h3 id = "name"> ${specificBrew[i].name}</h3>
            <p id = "brewery_type">Type: ${specificBrew[i].brewery_type}</p>
            <p id = "street">Address: ${specificBrew[i].street}</p>
            <p id = "website_url">Website: ${specificBrew[i].website_url}</p>
            <p id = "phone">Phone: ${specificBrew[i].phone}</p>
        </div>




`)
