const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const w = parseFloat(document.querySelector('#weight').value)
    const h = parseFloat(document.querySelector('#height').value)
    let r = document.querySelector('.results')
    r.style.fontSize = '20px'
    r.style.fontFamily = 'calibri'
    r.style.fontWeight = 600;
    r.style.color = 'white';
    r.style.paddingTop = '20px';


    if(h === '' || isNaN(h) || h <0){
        r.innerHTML = "<span>Please enter a Valid height</span>"
    }else if(w === '' || isNaN(w) || w <0){
        r.innerHTML = "<span>Please enter a Valid weight</span>"
    }else{
        const bmi = w / (h * h);
        r.innerHTML = `<span>Your BMI is ${bmi}</span>`
    }
})