// Function declearations
function viewAlliance() {
    var chartImage1 = document.getElementById("natoaid")
    var chartImage2 = document.getElementById("aidcountry");
    chartImage1.style.display = "block"
    chartImage2.style.display = "none"
}

function viewCountry() {
    var chartImage1 = document.getElementById("natoaid")
    var chartImage2 = document.getElementById("aidcountry");
    chartImage1.style.display = "none"
    chartImage2.style.display = "block"
}

// Script calls
document.getElementById('AllianceButton').addEventListener('click', viewAlliance)
document.getElementById('PerCountryButton').addEventListener('click', viewCountry)