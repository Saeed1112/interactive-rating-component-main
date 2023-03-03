const form = document.getElementById('rate-form')
const resultBox = document.getElementById('result-box');
const result = document.getElementById('rate');
let rate;
form.addEventListener('change', onChange)
form.addEventListener('submit', onSubmit)

function onSubmit(ev) {
    ev.preventDefault();
    if (!rate) {
        alert('Select a rate number please!')
        return;
    }
    form.classList.add('hidden');
    resultBox.classList.remove('hidden')
    result.innerText = rate;
}

function onChange() {
    rate && document.querySelector(`input[value="${rate}"]`)
        .closest('label')
        .classList
        .remove('active')
    rate = new FormData(form).get('rate');
    document.querySelector(`input[value="${rate}"]`)
        .closest('label')
        .classList
        .add('active')
}