function calculateTriangleArea(params) {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    
    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    
    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(params) {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    
    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    // calculate area
    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// reusable function 
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}
// rhombus
function calculateRhombusArea() {
    const diagonal1 = getInputValue('rhombus-d1');
    const diagonal2 = getInputValue('rhombus-d2');
    const area = (0.5 * diagonal1 * diagonal2);
    setElementInnerText('rhombus-area', area)

}
// pentagon
function calculatePentagonArea() {
    const base = getInputValue('base');
    const height = getInputValue('height')
    const area = (0.5 * base * height );
    setElementInnerText('pentagon-area', area);
}
// ellipse
function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-radius');
    const area = (3.1416 * major * minor).toFixed(2);
    setElementInnerText('ellipse-area', area)
}


// reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set text 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

