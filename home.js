

const URL = 'https://api.openbrewerydb.org/breweries?by_city='
const $id = $('id');
const $name = $('name');
const $brewery_type = $('brewery type');
const $street = $('street');
const $website_url = $('Website');
const $phone = $('phone');
const $form = $('form');
const $input = $('input[type = "text"]')


$form.on('submit', handleGetData);

document.getElementById("b-o-m").onclick= function(){

    location.href= "bom.html";
};


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


function render(breweryData) {

    let i=Math.floor(Math.random()* breweryData.length);
    let j=Math.floor(Math.random() * breweryData.length);
    let k=Math.floor(Math.random() * breweryData.length);
    let l=Math.floor(Math.random() * breweryData.length);
    let m=Math.floor(Math.random() * breweryData.length);
    let n=Math.floor(Math.random() * breweryData.length);
    let o=Math.floor(Math.random() * breweryData.length);
    let p=Math.floor(Math.random() * breweryData.length);
    let q=Math.floor(Math.random() * breweryData.length);
    let r=Math.floor(Math.random() * breweryData.length);

    $('main').html(`
         <div id="brewery">   
            <h3 id = "name"> ${breweryData[i].name}</h3>
            <p id = "brewery_type">Type: ${breweryData[i].brewery_type}</p>
            <p id = "street">Address: ${breweryData[i].street}</p>
            <p id = "website_url">Website: ${breweryData[i].website_url}</p>
            <p id = "phone">Phone: ${breweryData[i].phone}</p>
        </div>
        
        <div id = "brewery-one">
            <h3 id = "name_one"> ${breweryData[j].name}</h3>
            <p id = "brewery_type_one">Type: ${breweryData[j].brewery_type}</p>
            <p id = "street_one">Address: ${breweryData[j].street}</p>
            <p id = "website_url_one">Website: ${breweryData[j].website_url}</p>
            <p id = "phone_one">Phone: ${breweryData[j].phone}</p>
        </div>
         
        <div id = "brewery-two"
            <h3 id = "name_two"> ${breweryData[k].name}</h3>
            <p id = "brewery_type_two">Type: ${breweryData[k].brewery_type}</p>
            <p id = "street_two">Address: ${breweryData[k].street}</p>
            <p id = "website_url_two">Website: ${breweryData[k].website_url}</p>
            <p id = "phone_two">Phone: ${breweryData[k].phone}</p>      
        </div>
            <div id = "brewery-three"
            <h3 id = "name_three"> ${breweryData[l].name}</h3>
            <p id = "brewery_type_three">Type: ${breweryData[l].brewery_type}</p>
            <p id = "street_three">Address: ${breweryData[l].street}</p>
            <p id = "website_url_three">Website: ${breweryData[l].website_url}</p>
            <p id = "phone_three">Phone: ${breweryData[l].phone}</p>
        </div>
        <div id = "brewery-four">
            <h3 id = "name_four"> ${breweryData[m].name}</h3>
            <p id = "brewery_type_four>Type: ${breweryData[m].brewery_type}</p>
            <p id = "street_four">Address: ${breweryData[m].street}</p>
            <p id = "website_url_four">Website: ${breweryData[m].website_url}</p>
            <p id = "phone_four">Phone: ${breweryData[m].phone}</p>
        </div>
        
        <div id = "brewery-five">
            <h3 id = "name_five"> ${breweryData[n].name}</h3>
            <p id = "brewery_type_five">Type: ${breweryData[n].brewery_type}</p>
            <p id = "street_five">Address: ${breweryData[n].street}</p>
            <p id = "website_url_five">Website: ${breweryData[n].website_url}</p>
            <p id = "phone_five">Phone: ${breweryData[n].phone}</p>
        </div>

        <div id = "brewery-six">
            <h3 id = "name_six"> ${breweryData[o].name}</h3>
            <p id = "brewery_type_six">Type: ${breweryData[o].brewery_type}</p>
            <p id = "street_six">Address: ${breweryData[o].street}</p>
            <p id = "website_url_six">Website: ${breweryData[o].website_url}</p>
            <p id = "phone_six">Phone: ${breweryData[o].phone}</p>
        </div>
        <div id = "brewery-seven">
            <h3 id = "name_seven"> ${breweryData[p].name}</h3>
            <p id = "brewery_type_seven">Type: ${breweryData[p].brewery_type}</p>
            <p id = "street_seven">Address: ${breweryData[p].street}</p>
            <p id = "website_url_seven">Website: ${breweryData[p].website_url}</p>
            <p id = "phone_seven">Phone: ${breweryData[p].phone}</p>
        </div>

        <div id = "brewery-eight">
            <h3 id = "name_eight"> ${breweryData[q].name}</h3>
            <p id = "brewery_type_eight">Type: ${breweryData[q].brewery_type}</p>
            <p id = "street_eight">Address: ${breweryData[q].street}</p>
            <p id = "website_url_eight">Website: ${breweryData[q].website_url}</p>
            <p id = "phone_eight">Phone: ${breweryData[q].phone}</p>
        </div>

        <div id = "brewery-nine">
            <h3 id = "name_nine"> ${breweryData[r].name}</h3>
            <p id = "brewery_type_nine">Type: ${breweryData[r].brewery_type}</p>
            <p id = "street_nine">Address: ${breweryData[r].street}</p>
            <p id = "website_url_nine">Website: ${breweryData[r].website_url}</p>
            <p id = "phone_nine">Phone: ${breweryData[r].phone}</p>
        </div>
        
        
        
    
        
        `)
}