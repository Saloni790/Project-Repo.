document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxForm');
    const modal = document.getElementById('myModal');
    const button = document.getElementsByClassName('close')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const income = parseFloat(document.getElementById('income').value) || 0;
        const age = document.getElementById('age').value;

        // Validate inputs
        let isValid = true;
        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.nextElementSibling.style.display = 'inline';
            } else {
                input.nextElementSibling.style.display = 'none';
            }
        });

        if (isValid) {
            const tax = calculateTax(income, age);
            document.getElementById('taxResult').textContent = ` ${tax} `;
            modal.style.display = 'block';
        }
    });

    button.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

function calculateTax(income, extraIncome, deductions, age) {
    let tax=0;
    const totalIncome = income + extraIncome - deductions;
  

    if (totalIncome < 800000) {
         tax=0;
    }else if(totalIncome>800000 && age==='<40'){
        tax=(totalIncome-800000)*.3;
    }else if(totalIncome>800000 && age==='>=40<60'){
        tax=(totalIncome-800000)*.4;
    }else if(totalIncome>800000 && age==='>=60'){
        tax=(totalIncome-800000)*.1;
    }           
     return tax;
        };