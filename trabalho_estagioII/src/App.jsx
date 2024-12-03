import './App.css'
import BtnAgendar from './components/BtnAgendar'

export default function App() {
  return (
    <>
        <div className="container1">
        <h1>Agendamento de Quadra Esportiva</h1>
        <form id="agendForm">
            <fieldset>
                <div className="row">
                    <div className="column">
                        <label htmlFor="nome">Nome:</label>
                        <input className="opções" type="text" id="nome" name="nome" placeholder="Escreva seu nome..." required/>
                    </div>
                    <div className="column">
                        <label htmlFor="esporte">Esportes </label>
                        <select className="opções" id="esporte" name="esporte" required>
                            <option value="Futebol">Futebol</option>
                            <option value="Vôlei">Vôlei</option>
                        </select>
                    </div>
                </div>
                
                <div className="row">
                    <div className="column">
                        <label htmlFor="data">Data:</label>
                        <input className="opções" type="date" id="data" name="data" required/>
                    </div>
                    <div className="column">
                        <label htmlFor="horario">Horários Disponíveis:</label>
                        <select className="opções" id="horario" name="horario" required>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                        </select>
                    </div>
                </div>
            <BtnAgendar/>
            <a href='Page2.html'><button className="botões" type="button">Ver Agendamentos {'>>>'}</button></a>
            </fieldset>
        </form>
        </div>
    </>
  )
}
