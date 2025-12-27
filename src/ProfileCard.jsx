import React from 'react';

export default function ProfileCard({ image, name, TopSpeed, Engine }) {
  return (
    <div className="bg-gray-500 w-80 text-center rounded-lg shadow p-6 border border-yellow-500">
      <img
        src={image}
        alt={name}
        style={{ width: '300px', height: '300px', objectFit: 'cover',border: '1px solid #FFD700', }}
      />

      <h2 className="text-xl font-bold">Model Name: {name}</h2>
      <p className="text-sm">Top Speed: {TopSpeed}</p>
      <p className="text-sm">Engine: {Engine}</p>
    </div>
  );
}
