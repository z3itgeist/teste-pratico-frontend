async function buscarFuncionarios(params) {
        try {

            const resposta = await fetch('http://localhost:3000/employees');
            const func = await resposta.json();

                const tbody = document.querySelector('#colaboradores tbody');
                tbody.innerHTML = '';

                    func.forEach(colaborador => {const row = document.createElement('tr');
                                                    row.innerHTML = ` 
                                                        <td>${colaborador.id}</td>
                                                        <td>${colaborador.name}</td>
                                                        <td>${colaborador.job}</td>
                                                        <td>${colaborador.admission_date}</td>
                                                        <td>${colaborador.phone}</td>

                                                    `;
                                                    tbody.appendChild(row);
                    });
        } catch (error){
            console.error('Erro ao buscar dados',error);

        }
    
}

window.onload = buscarFuncionarios;