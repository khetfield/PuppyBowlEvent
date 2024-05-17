import React from 'react';
import { useGetPlayersQuery } from './puppybowlapi';

const Players = () => {
  const { data: players, isLoading, isError } = useGetPlayersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="players-container">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <div className="player-details">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
