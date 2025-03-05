async function buscarFuncionarios(params) {
    try {

        const resposta = await fetch('http://localhost:3000/employees');
        const func = await resposta.json();

        listarDesktop(func);

        listarMobile(func);

    } catch (error) {
        console.error('Erro ao buscar dados', error);

    }

}

function listarDesktop(func) {

    const tbody = document.querySelector('#colaboradores tbody');
    tbody.innerHTML = '';

    func.forEach(colaborador => {
        const row = document.createElement('tr');
        row.innerHTML = ` 
                                        <td>${colaborador.id}</td>
                                        <td>${colaborador.name}</td>
                                        <td>${colaborador.job}</td>
                                        <td>${colaborador.admission_date}</td>
                                        <td>${colaborador.phone}</td>
    
                                    `;
        tbody.appendChild(row);
    });

}

function listarMobile(func) {
    const mbody = document.getElementById('colaboradoresMobile');
    mbody.innerHTML = '';

    func.forEach(colaborador => {
        const mrow = document.createElement('div');
        mrow.classList.add('mColaborador');
        mrow.innerHTML = `
                                    <p class = "mNome">${colaborador.name}<span class = "mais">+<span>
                                    <div class = "sobre" style = "display:none;">
                                        <p>${colaborador.job} </p>
                                        <p>${colaborador.admission_date} </p>
                                        <p>${colaborador.phone} </p>
                                    </div>
                                 `;

        mrow.querySelector('.mNome').addEventListener('click', 
            () => {const sobre = mrow.querySelector('.sobre');
                    sobre.style.display = sobre.style.display === 'none' ? 'block' : 'none';
        });

        mbody.appendChild(mrow);
    });
}


window.onload = buscarFuncionarios;