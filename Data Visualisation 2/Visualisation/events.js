// Function declearations
function viewOverview() {
    var chartImage1 = document.getElementById("financialaid")
    var chartImage2 = document.getElementById("natoaid")
    var chartImage3 = document.getElementById("natoaiddetailed");
    chartImage1.style.display = "block"
    chartImage2.style.display = "none"
    chartImage3.style.display = "none"
}

function viewAlliance() {
    var chartImage1 = document.getElementById("financialaid")
    var chartImage2 = document.getElementById("natoaid")
    var chartImage3 = document.getElementById("natoaiddetailed");
    chartImage1.style.display = "none"
    chartImage2.style.display = "block"
    chartImage3.style.display = "none"
}

function viewCountry() {
    var chartImage1 = document.getElementById("financialaid")
    var chartImage2 = document.getElementById("natoaid")
    var chartImage3 = document.getElementById("natoaiddetailed");
    chartImage1.style.display = "none"
    chartImage2.style.display = "none"
    chartImage3.style.display = "block"
}

function viewAll() {
    var chartImage1 = document.getElementById("nukeoverall")
    var chartImage2 = document.getElementById("nukeyear");
    chartImage1.style.display = "block"
    chartImage2.style.display = "none"
}

function viewYearly() {
    var chartImage1 = document.getElementById("nukeoverall")
    var chartImage2 = document.getElementById("nukeyear");
    chartImage1.style.display = "none"
    chartImage2.style.display = "block"
}



// Script calls
document.getElementById('OverviewButton').addEventListener('click', viewOverview)
document.getElementById('AllianceButton').addEventListener('click', viewAlliance)
document.getElementById('PerCountryButton').addEventListener('click', viewCountry)
document.getElementById('AllButton').addEventListener('click', viewAll)
document.getElementById('YearlyButton').addEventListener('click', viewYearly)