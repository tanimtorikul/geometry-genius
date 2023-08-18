function calculateTriangleArea(params) {
    ;
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = (0.5 * base * height);
    if (isNaN(base ) || isNaN(height)) {
        alert('You are only allowed to insert a number');
        return;
    }
    setElementInnerText('triangle-area', area);
    
}

// rectangle
function calculateRectangleArea(params) {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length')
    const area = width * length;
    if (isNaN(width ) || isNaN(length)) {
        alert('You are only allowed to insert a number');
        return;
    }
    setElementInnerText('rectangle-area', area);
}

// parallelogram
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    if (isNaN(base ) || isNaN(height)) {
        alert('You are only allowed to insert a number');
        return;
    }
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
    const area = (0.5 * base * height);
    if (isNaN(base ) || isNaN(height)) {
        alert('You are only allowed to insert a number');
        return;
    }
    setElementInnerText('pentagon-area', area);
}
// ellipse
function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-radius');
    const area = (3.1416 * major * minor).toFixed(2);
    if (isNaN(major ) || isNaN(minor)) {
        alert('You are only allowed to insert a number');
        return;
    }
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

