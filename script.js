let lightOn = false;

function changeColor() {
    if (lightOn) {
        document.getElementById("lightBulb").style.display = "none"
    }
    else {
        document.getElementById("lightBulb").style.display = "block"
    }
    lightOn = !lightOn
    changeLightText()
}

function changeLightText() {
    if (lightOn) {
        document.getElementById("lightSwitch").innerHTML = 'off'
    }
    else {
        document.getElementById("lightSwitch").innerHTML = 'on'
    }
}
