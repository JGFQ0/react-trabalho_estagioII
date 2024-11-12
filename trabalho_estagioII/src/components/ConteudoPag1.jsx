
export default function ConteudoPag1() {
    return (
        <>
        <h1>Agendamento de Quadra Esportiva</h1>
        <form id="agendForm">
            <fieldset>
                <div class="row">
                    <div class="column">
                        <label for="nome">Nome:</label>
                        <input class="opções" type="text" id="nome" name="nome" placeholder="Escreva seu nome..." required/>
                    </div>
                    <div class="column">
                        <label for="esporte">Esportes </label>
                        <select class="opções" id="esporte" name="esporte" required>
                            <option value="Futebol">Futebol</option>
                            <option value="Vôlei">Vôlei</option>
                        </select>
                    </div>
                </div>
                
                <div class="row">
                    <div class="column">
                        <label for="data">Data:</label>
                        <input class="opções" type="date" id="data" name="data" required/>
                    </div>
                    <div class="column">
                        <label for="horario">Horários Disponíveis:</label>
                        <select class="opções" id="horario" name="horario" required>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                        </select>
                    </div>
                </div>
            <button class="botões" type="submit" onClick={Agendar}>Agendar</button>
            <a href="agendamentos.html"><button class="botões" type="button">Ver Agendamentos {'>>>'}</button></a>
            </fieldset>
        </form>
        </>
    );
}

function Agendar() {
document.getElementById('agendForm').addEventListener('submit', async function(event) {
    event.preventDefault()
    
    const nome = document.getElementById('nome').value
    const data = document.getElementById('data').value
    const horario = document.getElementById('horario').value
    const esporte = document.getElementById('esporte').value

    // Atualiza a coluna 'esporte_id' na tabela "agendamentos"
    let esporte_id
    if (esporte === 'Futebol') {
        esporte_id = 1
    } else if (esporte === 'Vôlei') {
        esporte_id = 2
    }

    // Função que usa o método POST para inserir dados na tabela 'agendamentos'
    const response = await fetch('http://localhost:3000/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, data, horario, esporte, esporte_id })
    })

    const result = await response.json()
    
    if (response.ok) {
        alert('Agendamento feito com sucesso.')
    } else {
        alert('Erro ao realizar agendamento.')
    }
})}