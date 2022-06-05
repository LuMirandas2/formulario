let Validador = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorALL('input');

        Validador.clearErros();

        for (let i = o; i < inputs.length; i++) {
            let input = inputs[i];
            let check = Validador.checkInput(input);
            if (check !== true) {
                send = false;
                Validador.showError(input, check);

            }
        }

        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');

        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let eDetail = rules[k].split("=");
                switch (rDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';

                        }
                        break;
                    case 'min':
                        if (input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos ' + rDetails[1] + ' caracteres';
                        }
                        break;
                    case 'email':
                        if (input.value !== '') {
                            let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'Email digitado não é valido';
                            }
                        }
                        break;
                }
            }
        }
        return true;
    },
    showError: (input, error) => {
        input.style.borderColor = '#FF0000';

        let errorElement = documente.createElement('div');
        errorElement.clasList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },

    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs. length;i++) {
            inputs[i].style-'';
        }
        let inputs = form.querySelectorAll('.error');
        for(let i=0; i<inputs. length;i++) {
            errorElements[i].remove();
        }
    }
}

let form = document.querySelector('.validador');
form.addEventListener('submit', Validador.handleSubmit);