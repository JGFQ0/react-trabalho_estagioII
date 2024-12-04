export default function BtnAgendar({nome, esporte, horario, data}) {
    async function agendar(event) {
        event.preventDefault()
        event.stopPropagation()
        
        // const nome = document.getElementById('nome').value
        // const data = document.getElementById('data').value
        // const horario = document.getElementById('horario').value
        // const esporte = document.getElementById('esporte').value
    
        // Função que usa o método POST para inserir dados na tabela 'agendamentos'
        const response = await fetch('http://localhost:3000/agendamento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, data, horario, esporte})
        })
        
        if (response.ok) {
            console.log('deu certo')
            alert('Agendamento feito com sucesso.')
        } else {
            alert('Erro ao realizar agendamento.')
        }
    }

    return (
        <>
            <button className="botões" onClick={agendar}>Agendar</button>
        </>
    )
}
