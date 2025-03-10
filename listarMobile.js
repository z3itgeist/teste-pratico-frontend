document.addEventListener('DOMContentLoaded', async () => {
    try {
        const resposta = await fetch('http://localhost:3000/employees');
        const func = await resposta.json();

        listarMobile(func);
    } catch (error) {
        console.error('Erro ao buscar dados', error);
    }
});

function listarMobile(func) {
    const mbody = document.getElementById('colaboradoresMobile');
    mbody.innerHTML = '';

    func.forEach(colaborador => {
        const mrow = document.createElement('div');
        mrow.classList.add('mColaborador', 'mTable');
        mrow.innerHTML = `
            <div class="colaborador">
                <span class="colaborador-id">${colaborador.id}</span>
                <p class="mNome">${colaborador.name}<img src="../teste-pratico-frontend/images/charm_chevron-down.png"><span class="mais"></p>
            </div>    
            <div class="sobre" style="display:none;">
                <p>${colaborador.job} </p>
                <p>${formatarData(colaborador.admission_date)} </p>
                <p>${formatarTelefone(colaborador.phone)} </p>
            </div>
        `;

        mrow.querySelector('.mNome').classList.add('mNome');

        mrow.querySelector('.sobre').classList.add('sobre');

        mrow.querySelector('.mNome').addEventListener('click', () => {
            const sobre = mrow.querySelector('.sobre');
            sobre.style.display = sobre.style.display === 'none' ? 'block' : 'none';
        });

        mbody.appendChild(mrow);
    });
}

window.onload = listarMobile;