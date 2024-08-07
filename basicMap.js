console.log("basic.js loaded.");

// CPCC Coordinates: 35.2176665 North, 80.831473 West -> 35.2176665, -80.831473

let map = L.map("map",{
  center: [35.2176665, -80.831473],
  zoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.2176665, -80.831473],{
  title: "Hello from CPCC!!"
}).bindPopup(`
<center>
<h2>Hello From CPCC</h2>
<hr>
<a href-"www.cpcc.edu">Click Here to Visit CPCC's Website</a><br>
<iframe width="280" height="160" src="https://www.youtube.com/embed/wCyHWiYPiXU?si=i3tO2imVWjeQoyCn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
`)
  .addTo(map);

