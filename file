
# This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template

## API

When building scalable applications, you should try to build abstractions that will help you iterate faster. An abstraction hides the complexities and implementation details. You are already familiar with abstractions, think of functions! Let's take a look at an example. Let's say we need to calculate the distance between 2 points. That code could look like this:

```js
const distance = Math.sqrt(Math.pow(x1 - x2, 2) * Math.pow(y1 - y2, 2));
```

If you needed to calculate the distance in different places in your codebase, you'd have to copy and paste that line everywhere. When other people read your code, they also have to concern themselves with what that formula is doing. When trying to fix a bug, you don't want to get slowed down by too many details. We can abstract the details away by making it into a function.

```js
const getDistance(x1, x2, y1, y2) => Math.sqrt(Math.pow(x1 - x2, 2) * Math.pow(y1 - y2, 2));
// Elsewhere in your codebase
const distance = getDistance(1, 5, 3, 7);
```

Now, lets imagine the law of the universe changes and the formula to calculate the distance between 2 points changes. If we hadn't abstracted the details into a function, updating the formula across our codebase would be tedious, and error-prone. Because we have abstracted the details into a function though, we only need to update 1 place in our codebase.

---

In this sample project, we abstract the details of getting the data from the APIs. This allows us to change the APIs we use easily. Let's say the current API we're using is no longer available or a new feature request can't be fulfilled. We can switch to a new API by changing a single place in our codebase.

## Error Handling

In this project, we have a slice that handles showing error messages to the user. This makes it easier to reason about our codebase and make error-related changes because there is a single place that handles anything related to errors. This also acts a form of abstraction.

Each slice can create errors in different ways. Instead of implementing the logic to display the error messages in each slice, we have a single slice that handles that. The other slices dispatch an action that the error slice listens and acts upon.

<https://stackoverflow.com/questions/69719601/getting-error-digital-envelope-routines-reason-unsupported-code-err-oss>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 'npm install -g serve
  serve -s build'

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# inspirational-homepage
