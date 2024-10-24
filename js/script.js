
/* ============================================ FALA COMIGO ========================================= */

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('loading').style.display = 'block';

    // ********************* Enviar o formulário ********************************************

    fetch(event.target.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: new FormData(event.target)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('success-message').style.display = 'block';
            event.target.reset(); 
            setTimeout(() => {
                document.getElementById('success-message').style.display = 'none'; // Oculta a mensagem após 5 segundos
            }, 5000);
        } else {
            alert('Oops! Ocorreu um erro. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        alert('Oops! Ocorreu um erro. Tente novamente mais tarde.');
    })
    .finally(() => {
        document.getElementById('loading').style.display = 'none'; 
    });
});

// *************************************** Formatação do telefone **************************************** 

document.getElementById('phone').addEventListener('input', function(event) {
    let value = this.value.replace(/\D/g, ''); 
    if (value.length > 10) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2'); 
    } else if (value.length > 0) {
        value = value.replace(/(\d{2})/, '($1) '); 
    }
    this.value = value; 

    const maxLength = 15; 
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength); 
    }
});
