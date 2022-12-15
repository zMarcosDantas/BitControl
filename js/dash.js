const fechado = document.querySelector(".fa-eye-slash");
const aberto  = document.querySelector(".fa-eye");
var saldo = document.querySelector("#saldoTitle");
const saldoValue = saldo.innerText;
function changeEye(el) {
    if(el.ariaLabel == 'aberto') {
        aberto.classList.add("d-none");
        aberto.classList.remove("d-inline");
        fechado.classList.add("d-inline");
        fechado.classList.remove("d-none");
        saldo.innerText = "***********";
    } else {
        fechado.classList.add("d-none");
        fechado.classList.remove("d-inline");
        aberto.classList.add("d-inline");
        aberto.classList.remove("d-none");
        saldo.innerText = saldoValue;
    }
}

const ctx = document.getElementById('chart');

setTimeout(() => {
    //const labels = Utils.months({count: 7});
    new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["Entradas", "Saidas"],
        datasets: [{
            label: 'Dataset',
            data: [4, 2],
            fill: true,
            borderColor: '#fff',
            backgroundColor: [
                '#1cd1fd67',
                '#A12EE067',
            ] 
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        }
    }
});
}, 2000);