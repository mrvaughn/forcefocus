function ringOnFocus() {
    this.style.setProperty('outline', '4px solid #B32DF0', 'important');
    this.style.setProperty('outline-offset', '1px', 'important');
}

function clearOnBlur() {
    this.style.outline = 'none';
}

var keyboardfocusableElements = document.querySelectorAll(
    'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );

for (var i = 0; i < keyboardfocusableElements.length; i++) {
    keyboardfocusableElements[i].onfocus = ringOnFocus;
    keyboardfocusableElements[i].onblur = clearOnBlur;
}
