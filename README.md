# Justice for Fakelandia ⚖️

by Annette Le Sage
version 1.0 (updated 8/1/24)

## Introduction 🧑‍⚖️

The faraway country of Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, and they have a website to keep abreast of the latest justice developments.

## Crimes and Misdemeanours

The Fakelandians can browse lists of crimes committed today on their website and it also has functionality that helps citizens confess to their own crimes.

As a non-citizen, you might not be aware that there are only four possible crimes in Fakelandia, which they insist are always displayed next to an appropriate emoji:

Mild Public Rudeness = 🤪
Speaking in a Lift = 🗣
Not Eating Your Vegetables = 🥗
Supporting Manchester United = 😈

Despite the clear severity of some of these awful crimes, the Fakelandians refer to them all as "misdemeanours".

👉 The home page has some statistics with total misdemeanours for each type, in four boxes which reveal the data when hovered over.

The Fakelandians have browsable list of all misdemeanours with four. First, the citizen ID of the person committing the misdemeanour. (Rest assured they keep their data carefully anonymised so these IDs can't be traced back to individuals!). Then they show the date, the misdemeanour, and the "Punishment Idea". 

Under the Fakelandian system all punishments are random. They find a random picture on the internet and use it as inspiration for the appropriate punishment. Due to the low number of crimes, this weird system supposedly works extremely well.

The random punishment inspiration uses a service called Picsum, which can be accessed simply by putting a particular URL into an image tag:

<img src='https://picsum.photos/{width}/{height}' />;

## Project Structure

A web server is provided locally with Express to provide a backend to call, with an api that returns details of any recent crimes.

💡 There is a misdeameanour.types.ts file in both the client folder and the server folder. If any changes are made, the content should be updated in both. This is because React is configured to disallow imports outside of its working folder. This knowingly breaks the rule of Don't Repeat Yourself, but with the knowledge that we could figure out a way to share this type between client and server if we really wanted.

💡 A useFetch custom hook is used in the application to get misdemeanour data from the server, with the constraint that user can ONLY fetch new data when hitting F5 or otherwise fully refreshing the page.
The fetch function is asynchronous so needs to await the result of this to get the JSON body of the response. 

👉 The resulting list of misdemeanours is stored in state, which is accessible via useContext so it can be consumed in sub-components. The Misdemeanours page uses sub-components to render all of the misdemeanours in a list. A dropdown to the Misdemeanours column filters the visible list to just one of the four misdemeanours. This filter doesn't update the list stored in state - only the list being rendered on this page.

## 👉 Confession Form

There is a form with three elements: a subject line for the confession, a dropdown for the reason for the confession and a text box for details.

When the form is filled in with valid data, THEN the confess button becomes enabled. This has some additional functionality that prevents annoying error messages from being shown to the user until the submit button as at least been attempted. Once it has been attempted, the client side of the application will display error messages until the form is valid.

💡 This validation code has some re-useable functionality through the custom hooks useValidate and useHasErrors. The useValidate hook takes data for the form in the data folder. This data includes an array of regular expressions and a related array of error messages to be passed into the validation hook.

👉 When submitting a form, the data is POSTed to the server to the endpoint {sameBaseUrl}/api/confess in  the following format:
{
	"subject": "subject line",
	"reason": "", // either a MisdemeanourKind OR the string `just-talk`
	"details": "details here"
}

👉 The endpoint responds with:

// JSON
{
	"success": boolean, // true for success; false for an error
	"justTalked": boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
	"message": string; // a message
}

👉 When your app receives the response to the POST, the app:

1️⃣ Displays an error message from message if success is false

2️⃣ If success is true and justTalked is false, i.e. it's a real confession, the confession data is added to the list of misdemeanours so this new crime is visible on the misdemeanours page and the numbers are added to the boxes on the home page.

## 👉 How to use

👉 Run `npm install` on the root directory and then navigate into client and do the same.

👉 Run npm run start-server.

The server will start up. You should see a little welcome message in your terminal:

👉 In your browser, navigate to the health check route `http://localhost:8080/health`

You should see a message:

"👍 Okay! The server is responding! 🙌"

👉 In your browser, as a test you can navigate to the API route `http://localhost:8080/api/misdemeanours/3`

## The React application ✨

2️⃣ `Vite` - [Vite](https://vitejs.dev/guide/) is a popular alternative to Create React App, with faster build times and more flexibility than create-react-app. Vite has been used for this project.

👉 the ROOT `package.json`has been edited to: `"start-client": "cd client && npm run dev",`

💡 The `client/package.json` has a script to enable opening of your browser automatically when you start the app using `npm run start-client`

### Running client and server together

👀 There is a convenience command setup in the `scripts` section:

`"start": "concurrently -n client,server -c cyan,magenta \"npm run start-client\" \"npm run start-server\""`

This uses an `npm` package called `concurrently` to run both the client React app and the server at the same time when you run `npm start` in the root folder.

👉 Ensure your server and client are not running by pressing `Ctrl-C` in any terminal where they are running.

👉 Run `npm start` in the root folder to start up both your server and your React app.

👉 🤚🛑⛔ STOP 🤚🛑⛔ At this point, you should be able to use `npm start` and then browse to your server at the health check, AND simultaneously in another tab you should see your starter React app.

🙌 If both the server and React app are running at the same time, then we're good to continue!

## Tests

💡 You can run the 47 tests provided by the appliction with `npm run test-client` in the root folder, or navigate to the client folder and run npm test.

## 👉 Routing

The application uses react-router and its associated TypeScript @types package to create multiple routes, one for the homepage, and one each for the "misdemeanours" and "confession" components and there is a a 404 component for unknown URLs.