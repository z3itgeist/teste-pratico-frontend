document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch('http://localhost:3000/employees');
        const func = await resposta.json();

        listarDesktop(func);
    } catch (error) {
        console.error('Erro ao buscar dados', error);
    }
});

function listarDesktop(func) {

    const tbody = document.querySelector('#colaboradores tbody');
    tbody.innerHTML = '';

    func.forEach(colaborador => {
        const row = document.createElement('tr');
        row.innerHTML = ` 
                                        <td>${colaborador.id}</td>
                                        <td>${colaborador.name}</td>
                                        <td>${colaborador.job}</td>
                                        <td>${formatarData(colaborador.admission_date)}</td>
                                        <td>${formatarTelefone(colaborador.phone)}</td>
    
                                    `;
        tbody.appendChild(row);
    });

}

window.onload = carregarFuncionarios;