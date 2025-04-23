import React from "react";

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>The Critical Arrow</h1>
      <p>Europe’s most refined, yet relatable food critic</p>
      <h2>Laatste restaurantreviews</h2>
      <div>
        <h3>Restaurant De Linde – Amsterdam</h3>
        <p>Een elegante setting met zachte verlichting en een hartelijk welkom. De tartaar van rode biet was subliem, maar het hoofdgerecht kon wat krachtiger.</p>
        <ul>
          <li>Prijs/Kwaliteit: 8.2</li>
          <li>Service: 8.5</li>
          <li>Hygiëne: 9.0</li>
          <li>Restaurant: 9.3</li>
        </ul>
      </div>
      <h2>Over The Critical Arrow</h2>
      <p>
        Onder het pseudoniem “The Critical Arrow” doorkruist deze criticus heel Nederland (en Europa) op zoek naar verfijnde smaakbelevingen én comfort food met klasse.
      </p>
      <h2>In de media</h2>
      <ul>
        <li>“De Nederlandse Gordon Ramsay” – NRC</li>
        <li>“De enige recensent die ik vertrouw” – Foodies Magazine</li>
        <li>“Zijn oordeel is wet” – RTL Boulevard</li>
      </ul>
      <p>285k volgers op Instagram</p>
    </div>
  );
}