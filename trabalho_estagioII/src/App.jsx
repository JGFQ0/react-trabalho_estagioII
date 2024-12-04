import { useState } from 'react'
import './App.css'
import BtnAgendar from './components/BtnAgendar'

export default function App() {
    const [nome, setNome] = useState('')
    const [esporte, setEsporte] = useState('')
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')

    return (
        <>
            <div className="container1">
                <h1>Agendamento de Quadra Esportiva</h1>
                <form id="agendForm">
                    <fieldset>
                        <div className="row">
                            <div className="column">
                                <label htmlFor="nome">Nome:</label>
                                <input 
                                    onChange={(e) => setNome(e.target.value)}
                                    className="opções" 
                                    type="text" 
                                    id="nome" 
                                    value={nome} 
                                    name="nome" 
                                    placeholder="Escreva seu nome..." 
                                    required 
                                />
                            </div>
                            <div className="column">
                                <label htmlFor="esporte">Esportes </label>
                                <select 
                                onChange={(e) => setEsporte(e.target.value)}
                                value={esporte}
                                className="opções" 
                                id="esporte" 
                                name="esporte" 
                                required>
                                    <option value = "Futebol">Futebol</option>
                                    <option value = "Vôlei">Vôlei</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column">
                                <label htmlFor="data">Data:</label>
                                <input 
                                onChange={(e) => setData(e.target.value)}
                                value={data}
                                className="opções" 
                                type="date" 
                                id="data" 
                                name="data" 
                                required />
                            </div>
                            <div className="column">
                                <label htmlFor="horario">Horários Disponíveis:</label>
                                <select 
                                onChange={(e) => setHorario(e.target.value)}
                                value={horario}
                                className="opções" 
                                id="horario" 
                                name="horario" 
                                required>
                                    <option value="08:00:00">08:00</option>
                                    <option value="09:00:00">09:00</option>
                                    <option value="16:00:00">16:00</option>
                                    <option value="17:00:00">17:00</option>
                                </select>
                            </div>
                        </div>
                        <BtnAgendar nome={nome} esporte={esporte} horario={horario} data={data}/>
                        <a href='Page2.html'><button className="botões" type="button">Ver Agendamentos {'>>>'}</button></a>
                    </fieldset>
                </form>
            </div>
        </>
    )
}
