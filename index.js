let red,
    green,
    blue,
    rgb,
    opacity,
    typeColor = 'rgb',
    wrapper = document.getElementById('wrapper'),
    checkboxes = document.querySelectorAll('.box__input'),
    checkboxDefault = document.querySelector('input[value="rgb"]'),
    labelOpacity = document.querySelector('.box__label'),
    opacityInput = document.getElementById('opacityRange'),
    textColor = document.getElementById('colorText'),
    colorBtn = document.getElementById('randomBtn'),
    resetBtn = document.getElementById('resetBtn'),
    randomNum = () => {
        return Math.floor(Math.random() * 255);
    },
    toHex = (num) => {
        return num.toString(16).padStart(2, "0").toUpperCase();
    },
    changeRangeOpacity = () => {
        opacityInput.value = 1;
    },
    checkOpacity = () => {
        if(opacityInput.value > 1) {
            changeRangeOpacity()
            return '1';
        } else {
            return opacityInput.value;
        }
    },
    showOpacity = () => {
        labelOpacity.style.display = 'flex';
    },
    hideOpacity = () => {
        labelOpacity.style.display = 'none';
    },
    addTextColor = (color = "rgb(255,255,255)") => {
        textColor.innerHTML = color;
        wrapper.style.backgroundColor = color;
    };

(() => {
    checkboxes.forEach(element => {
        element.addEventListener('change', () => {
            typeColor = element.checked ? element.value : 'rgb';
            typeColor == 'rgba' ? showOpacity() : hideOpacity();
        });
    });

    opacityInput.addEventListener('change', () => {
        opacity = checkOpacity();
    });

    colorBtn.addEventListener("click", () => {
        red = randomNum();
        green = randomNum();
        blue = randomNum();
        if (typeColor == 'rgb') {
            color = `rgb(${red},${green},${blue})`;
        } else if (typeColor == 'rgba') {
            color = `rgba(${red},${green},${blue},${opacity})`;
        } else {
            red = toHex(red);
            green = toHex(green);
            blue = toHex(blue);
            color = `#${red}${green}${blue}`;
        }
        addTextColor(color);
    });
    resetBtn.addEventListener("click", () => {
        !checkboxDefault.checked ? checkboxDefault.checked = true : false;
        hideOpacity();
        addTextColor();
    });
})();