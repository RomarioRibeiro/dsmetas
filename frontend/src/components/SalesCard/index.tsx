import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sales";
import { BASE_URL } from "../../utis/request";

import NotficationButton from "../NotificationButton";

import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setsales] = useState<Sale[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/sales`)
            .then(response => {
                setsales(response.data.content);
            });
    }, []);

    return (
        <div className="dsmetas-card">
            <h2 className="dsmetas-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-sales-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmetas-sales-control "
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-sales-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
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
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td className="Show992">{sale.id}</td>
                                <td className="Show576">{new Date(sale.date).toLocaleDateString()}</td>
                                <td>{sale.sellerName}</td>
                                <td className="Show992">{sale.visited}</td>
                                <td className="Show992">{sale.deals}</td>
                                <td>R$ {sale.amount.toFixed(2)}</td>
                                <td>
                                    <div className="dsmetas-red-container">
                                        <div className="dsmetas-red-btn">
                                            <NotficationButton />
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default SalesCard;