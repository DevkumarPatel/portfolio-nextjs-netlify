'use client'
// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




const LeafletMap: React.FC = () => {
    return (
      <div className="min-h-screen" style={{ position: 'relative' }}>
        <MapContainer className='h-screen' center={[-31.959339, 115.851439]} zoom={15} scrollWheelZoom={true} attributionControl={false}>
          <TileLayer
            url="https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=P6A5BftYbAQc1bEWw1LY"
          />
          
        </MapContainer>
        <div className='flex' style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 500, justifyContent: 'center', alignItems: 'center' }}>
            <button className="btn btn-wide glass">Add Shape</button>
        </div>

      </div>;
    );
  };
  
  export default LeafletMap;



