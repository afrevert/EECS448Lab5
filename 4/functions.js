
function changeAttributes() {
    let paragraphTag = document.getElementById("paragraphText")
    let borderRed = document.getElementById("borderRed").value;
    let borderBlue = document.getElementById("borderBlue").value;
    let borderGreen = document.getElementById("borderGreen").value;
    let borderWidth = document.getElementById("borderWidth").value;
    let bgRed = document.getElementById("bgRed").value;
    let bgGreen = document.getElementById("bgGreen").value;
    let bgBlue = document.getElementById("bgBlue").value;
    paragraphTag.style.backgroundColor = "rgb(" + bgRed + ', ' + bgGreen + ', ' + bgBlue + ')';
    console.log("rgb(" + bgRed + ', ' + bgGreen + ', ' + bgBlue + ')');
    paragraphTag.style.border="solid"
    paragraphTag.style.borderColor = "rgb(" + borderRed + ', ' + borderGreen + ', ' + borderBlue + ')';
    console.log("rgb(" + borderRed + ', ' + borderGreen + ', ' + borderBlue + ')')
    paragraphTag.style.borderWidth = borderWidth ? borderWidth + "px" : "2px";
    console.log(borderWidth ? borderWidth + "px" : "2px")
}