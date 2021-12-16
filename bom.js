document.getElementById("home").onclick = function () {
    location.href = "index.html";
}

document.getElementById("ballast").onclick = function () {
    location.href = "https://ballastpoint.com/beer/grapefruit-sculpin/";
}

document.getElementById("revolution").onclick = function () {
    location.href = "https://revbrew.com/beer/seasonals/sun-crusher";
}

document.getElementById("bodem").onclick = function () {
    location.href = "https://www.halfacrebeer.com/bodem"
}

document.querySelectorAll('button').forEach(function (e) {
    e.addEventListener('mouseover', function () {
        this.style.backgroundColor = "black";
        this.style.color = "goldenrod";
    })

});

document.querySelectorAll('button').forEach(function (e) {
    e.addEventListener('mouseout', function () {
        this.style.backgroundColor = "goldenrod";
        this.style.color = "black";
    })
});