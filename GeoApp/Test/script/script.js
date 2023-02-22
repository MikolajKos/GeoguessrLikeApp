"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
require("./style.css");
function initialize() {
    // A szélességi és magassági kordináták segítségével más helyszínt is megadhatsz.
    const fenway = { lat: 40.7058956, lng: -74.0085924 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: fenway,
        zoom: 14
    });
    const panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
        position: fenway,
        pov: {
            heading: 310,
            pitch: 1
        }
    });
    map.setStreetView(panorama);
}
exports.initialize = initialize;
