import React, { useState, useEffect } from 'react';
import axios from 'axios';


function InfoComponent() {
  // État pour stocker les données de CO2 et de température
  const [info, setInfo] = useState({
    co2: 0,
    temp: 0,
  });

  // États pour contrôler les requêtes pour la vérification de CO2 et de température
  const [queryCo2, setQueryCo2] = useState(false);
  const [queryTemp, setQueryTemp] = useState(false);

  // Fonction asynchrone pour récupérer les données
  const getInfo = async () => {
    try {
      const response = await axios.get("http://dushnila.gooddelo.com/data");
      return response.data;
    } catch (error) {
      console.log("Une erreur s'est produite lors de la récupération des données:", error);
      return null;
    }
  };

  // Effet pour récupérer les données et effectuer les vérifications lorsque les états changent
  useEffect(() => {
    getInfo().then((data) => {
      if (data) {
        // Mise à jour des données de CO2 et de température
        setInfo({ co2: data.co2, temp: data.temp });

        // Vérification du niveau de CO2
        setQueryCo2(data.co2 > 800 ? false : true);

        // Vérification de la température
        setQueryTemp(data.temp > 27 ? false : true);
      }
    }).catch(error => {
      console.log("Une erreur s'est produite lors de la récupération des données:", error);
    });
  }, [queryCo2, queryTemp]); // Déclenche cet effet lorsque queryCo2 ou queryTemp changent

  // Effet pour déclencher périodiquement les vérifications de CO2 et de température
  useEffect(() => {
    const interval = setInterval(() => {
      // Inversion des états pour déclencher les vérifications
      setQueryCo2(prevState => !prevState);
      setQueryTemp(prevState => !prevState);
    }, 60000); // Répéter toutes les 60 secondes

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []); // Déclenche cet effet une seule fois au montage du composant

  // Rendu des données de CO2 et de température
  return (
    <div className={queryCo2 && queryTemp ?'info-big-component' : 'info-big-component bad'}>
      {info.temp} °C<br/>
      <h6>Температура</h6><br />

      {info.co2} ppm <br />
      <h6>со2</h6><br />

    </div>
  );
}

export default InfoComponent;
