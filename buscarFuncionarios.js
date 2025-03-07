const searchBar = document.getElementById('search');

    async function buscarFuncionarios() {

        try{
            const resposta = await fetch('http://localhost:3000/employees');
            const func = await resposta.json();
            displayFunc(func);

        } catch (error) {
            console.log('Nenhum resultado encontrado', error);

        }
        
    }


        function displayFunc (func) {
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

        function filtrarFunc(event) {
            
            const termoPesquisa = event.target.value.toLowerCase();

            fetch('http://localhost:3000/employees');
                .then(resposta => resposta.json())
                .then(func => {
                                const funcBuscado = func.filter()
                })
        }