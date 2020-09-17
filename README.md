# Stripe Project
* Gothenburg Clothing
# Frameworks:
* React, Redux, Firebase, Express, Node.js
# API:
* Stripe, Paypal

# Innehåll
* En webbshop applikation byggd på backend-server med Express och Node.js. Frontend är byggt med React tillsammans med Redux. Firebase används som databas för projektet vid större omsträckning. Uppgiften för projektet var att implementera betalningsmodulen Stripe API till webbshoppen så att det ska fungera att genomföra en betalning från hemsidan med valda produkter. För att vara säker på att betalningen blivit utförd verifieras betalningen efter att kunden skrivit in rätt information och en json-fil med produktinformation av ordern sparas som en bekräftelse på servern. Kunden slussas vidare till en bekräftelsesida efter köpet gått igenom. Ytterligare ett betalnings-API finns implementerat i projektet, Paypal.

# För att köra applikationen
* Ladda ner filen från Github och kopiera innehållet i en ny mapp, öppna mappen i VSC.

Important notice: if localhost in client is not in 3000 then you have to change port of localhost in this file in server.js :app.use(
cors({
origin: "http://localhost:3000",
credentials: true,
})
);
and make it same as port of client localhost
How to start:
1- npm i then npm start
2- Open second terminal then npm i then npm start
