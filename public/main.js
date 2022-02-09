const serviceURL = 'http://localhost:8080/api/generate';

const generate = document.querySelector('.generate');
const copy = document.querySelector('.copy');

const norem = document.querySelector('.norem');
const spinner = document.querySelector('.spinner');

const wordCount = document.querySelector('#word-count');

const hideElement = (element) => {
    element.classList.add('d-none');
}

const showElement = (element) => {
    element.classList.remove('d-none');
}

const copyNorem = () => {
    const el = document.createElement('textarea');
    el.value = norem.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

const loadNorem = () => {

    const count = Number(wordCount.value)

    axios.get(serviceURL, { params: { w: count } })
        .then(result => {
            showNorem(result.data.norem)
        })
        .catch(err => {
            console.error(err);
        })
}

const showNorem = (text) => {
    hideElement(spinner)
    showElement(norem)
    showElement(copy)

    norem.innerText = text
}

generate.addEventListener('click', (event) => {
    showElement(spinner);
    loadNorem();
});

copy.addEventListener('click', event => {
    copyNorem();
})

hideElement(spinner);
hideElement(norem);
hideElement(copy);