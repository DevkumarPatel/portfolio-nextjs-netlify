"use client"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LeafletMap } from "@/components";

const MyAwesomeMap = dynamic(() => import("@/components/LeafletMap/init"), { ssr:false })


const home = () => {
    return (
        <main>
            <MyAwesomeMap></MyAwesomeMap>
        </main>
    )
}
export default home; 