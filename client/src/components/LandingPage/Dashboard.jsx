import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {  FaHome , FaCalendarAlt , FaGlassCheers , FaCog , FaBalanceScale} from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="user">
          <FaUserCircle style={ { transform:"scale(5)" } } />
          <h2>Jlassi M.Aziz</h2>
        </div>

        <div style={ {  height:"3px" , backgroundColor:"white"  } }></div>

        <ul className="options">
          <li>
            <FaHome style={ { transform:"scale(2)" } }/>
            <div>
              <h3>Acceuil</h3>
            </div>
          </li>

          <li>
            <FaCalendarAlt style={ { transform:"scale(2)" } } />
            <div>
             <h3>Historique</h3>
            </div>
          </li>

          <li>
            <FaGlassCheers style={ { transform:"scale(2)" } } />
            <div>
             <h3>Congé</h3>
            </div>
          </li>

          <li>
            <FaBalanceScale style={ { transform:"scale(2)" } }/>
            <div>
               <h3>Solde</h3>
            </div>
          </li>

          <li>
            <FaCog style={ { transform:"scale(2)" } }/>
            <div>
              <h3>Paramètres</h3>
            </div>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Dashboard;