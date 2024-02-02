let form = document.getElementById('request-form')

form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        event.preventDefault();
    };
    form.submit();
});



