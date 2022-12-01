import React, { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import "ol/ol.css";
import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay.js";
import LayerTile from "ol/layer/Tile.js";
import SourceOSM from "ol/source/OSM.js";
import { toStringHDMS } from "ol/coordinate";
import { toLonLat } from "ol/proj";
import * as proj from "ol/proj";




export default function MapWrapper(){

  const coords: Record<string, Coordinate> = {
    origin: [2.364, 48.82],
    ArcDeTriomphe: [2.295, 48.8737],
  };
  
  let map

  if (typeof window !== 'undefined') {
    
    useEffect(() =>{
      map = new Map({
        layers: [
          new LayerTile({
            source: new SourceOSM
          })
        ],
        view: new View({
          center: fromLonLat(coords.origin),
          zoom: 3
        })
      })

      map.setTarget("map");
    },[])
    
   
  }
  
  

  return (
    <>
      <div id="map" className="mapWrapper"  style={{ width: "100%", height: "100%", position: "fixed" }}></div>
    </>
  );

}
