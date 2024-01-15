
function swapToThis(object) {
    document.getElementById(object).style.display = "block";
}

function hideThisObject(itemToHide) {
    document.getElementById(itemToHide).style.display = "none";
}

function changeDisplay(objectName, option) {
    document.getElementById(objectName).style.display = option;
}

function changeBgColor(divName, color) {
    document.getElementById(divName).style.backgroundColor = color;
}

function changeDisplayState(itemName, choice) {
    if (document.getElementById(itemName).style.display === choice) {
        document.getElementById(itemName).style.display = "none";
    }
    else {
        document.getElementById(itemName).style.display = choice;
    }
}

function borderBottomShow(objectId) {
    if (window.innerWidth > 700) {
        document.getElementById(objectId).style.borderBottom = "2px solid #165daf";
    }
}

function borderBottomHide(objectId) {
    if (window.innerWidth > 700) {
        document.getElementById(objectId).style.borderBottom = "transparent";
    }
}