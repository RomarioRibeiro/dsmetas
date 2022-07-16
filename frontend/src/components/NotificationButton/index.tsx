import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assents/img/notification-icon.svg';
import { BASE_URL } from '../../utis/request';

import './styles.css';


function handleClink(id :number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
    toast.info("SMS ENVIADA COM SUCESSO")
    })
}

type Props = {
  salesId: number;
}

function NotficationButton({salesId} : Props) {
  return (
    <div className="dsmetas-red-btn" onClick={() => handleClink(salesId)}>
         <img src={icon} alt="Notificação" />
    </div>
  )
}

export default NotficationButton;
