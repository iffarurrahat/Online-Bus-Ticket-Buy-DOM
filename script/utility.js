function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}

function removeAttributeText(elementId) {
  document.getElementById(elementId).removeAttribute("disabled", true);
}

function setAttributeText(elementId) {
  document.getElementById(elementId).setAttribute("disabled", true);
}
