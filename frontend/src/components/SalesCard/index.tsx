import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotficationButton from "../NotificationButton"

import './styles.css'

function SalesCard() {
    return (
        <div className="dsmetas-card">
            <h2 className="dsmetas-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-sales-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmetas-sales-control "
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-sales-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmetas-sales-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <table className="dsmetas-sales-table">
                <thead>
                    <tr>
                        <th className="Show992">Id</th>
                        <th className="Show576">Data</th>
                        <th>Vendedor</th>
                        <th className="Show992">Visitante</th>
                        <th className="Show992">Vendas</th>
                        <th>total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="Show992">#341</td>
                        <td className="Show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="Show992">15</td>
                        <td className="Show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmetas-red-container">
                                <div className="dsmetas-red-btn">
                                    <NotficationButton />
                                </div>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="Show992">#341</td>
                        <td className="Show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="Show992">15</td>
                        <td className="Show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmetas-red-container">
                                <div className="dsmetas-red-btn">
                                    <NotficationButton />
                                </div>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="Show992">#341</td>
                        <td className="Show576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="Show992">15</td>
                        <td className="Show992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmetas-red-container">
                                <div className="dsmetas-red-btn">
                                    <NotficationButton />
                                </div>
                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default SalesCard