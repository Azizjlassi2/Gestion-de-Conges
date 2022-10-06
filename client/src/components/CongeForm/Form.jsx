import React from "react";

const Demande = () => {
  return (
    <div className="container">
      <div className="header">
        Nouvelle demande
      </div>
      <form id="conge-form">
        <div>
          <label>Demandeur : </label>
          <select>
            <option value="administrateur" selected>Administrateur</option>
          </select>
        </div>

        <div>
          <label>Type de congés : </label>
          <select>
            <option value="administrateur" selected>Congé payé</option>
          </select>
        </div>

        <div>
          <label>Date de début : </label>
          <input type="date" />
        </div>

        <div>
          <label>Date de fin : </label>
          <input type="date" />
        </div>

        <div>
          <label>Nombre de jours : </label>
          <input type="number" />
        </div>

        <div>
          <label>Commentaire : </label>
          <textarea>

          </textarea>
        </div>

        <div>
          <label><input type="checkbox" />Je valide ma demande</label>
        </div>

        <div className="btn-group">
          <button>Annuler</button>
          <button>Enregistrer</button>
          <button>Soumettre</button>
        </div>

      </form>
    </div>
  );
}

export default Demande;