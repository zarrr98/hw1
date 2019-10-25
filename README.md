# Internet Engineering Homework1
<b>What is this project about?</b>This is a webserver in NodeJS that performs some GIS functionality.there are some initial GIS information which is some polygons of some regions on map. the user is given two APIs to either add a new polygon or find ones which contain a specific coordinate . The goal in this project was implementing two APIs in NodeJS that can do the mentioned jobs.

<b> which packages I used? </b>
In this project , I tried to use some npm packages for simplicity's sake, e.g. <b>express</b> package helped me to write APIs and the server much easier. And <b>point-in-polygon</b> package is for deciding whether a coordinate is inside a polygon or not .<b>body-parser</b> is for parsing the bodies of all incoming requests and so handling requests will become more handy. In this project I added a generic JSON and URL-encoded parser as a top-level middleware.

# You can find this project on heroku too!
I have deployed this application into heroku platform and you can find it on https://vast-inlet-08992.herokuapp.com. Remember to use the endpoints (/gis/testpoint and /gis/addpolygon ) at the end of this link if you want to send request to that.
