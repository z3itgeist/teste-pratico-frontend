function formatarData(data) {
    if (!data) return '';  
    const date = new Date(data);
    const dia = String(date.getUTCDate()).padStart(2, '0');
    const mes = String(date.getUTCMonth() + 1).padStart(2, '0');
    const ano = date.getUTCFullYear();
    return `${dia}/${mes}/${ano}`;
}

function formatarTelefone(telefone) {
    if (!telefone) return '';  
    return telefone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');
}