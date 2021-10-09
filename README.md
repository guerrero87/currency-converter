# React Group Learn - Currency Converter

[Try the APP](https://www.joky.dev/currency-converter/)

This is a currency converter React App developed for the [weekly project](https://discord.com/channels/893108882220658718/893883150428676118/893890421950922822) proposed by [React Group Learn](https://discord.gg/sjwQ88VR) discord server.

The App fetches exchange rate information for USD from [Exchange Rate API](https://www.exchangerate-api.com/). Since we can get an API rensponse with all the countries current exchange rates for USD we can use that information to convert any currency pair with a single API call.

The user loads the App, waits for the request to go through and get the data (if the request fails, the user is informed and asked to reload the page) then is asked to proceed and enter the amount to convert and currency pairs to be used. There is a swap button to instantly perform the inverse conversion. The result is updated as the user is entering the amount and changes as soon as the user chooses a new currency pair. Should the user enter a non number character the app informs them to enter only numbers. Up to 9 digits can be written inside the input field (project boundary)

The app was created using [create-react-app](https://github.com/facebook/create-react-app)

## API

[Exchange Rate API](https://www.exchangerate-api.com/)

## Dependencies Used

- [Axios](https://github.com/axios/axios)
- [React Redux](https://github.com/reduxjs/react-redux)
- [React Thunk](https://github.com/reduxjs/redux-thunk)
- [React Lottie](https://www.npmjs.com/package/react-lottie)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Improvements to be made

- Hide private API with an API middleware.
- Styling changes. More mobile friendly.
- Better error handling.
- Testing.

Thank you for reading!

[Joky](https://www.joky.dev)
