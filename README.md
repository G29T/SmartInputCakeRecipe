# Description
The Cake Recipe Planner app is designed for managing cake recipes within a React web app.
It provides a form where users can input a cake name, add ingredients with their respective quantities, and submit the recipe.
Additionally, it includes features to dynamically add/remove ingredients and print a shopping list.

Inside the Cake History section the users can click on the pencil icon to edit the name of a cake. 
Furthermore, cakes can be removed from the list by clicking on the delete button/bin icon.

The application recalculates the shopping list automatically when a cake is deleted. The shopping list disappears after a cake deletion and can be refreshed by pressing "Print Shopping List" again.

In future development, users will be able to view cake recipes and make modifications to ingredients and quantities. They will also be able to access past shopping lists along with associated cakes, and adjust the recipes accordingly.

The app can be accessed via https://curious-kashata-97ecb9.netlify.app/

## Using the app
### Form
- Enter a cake name in the input field.
- Use the "Add Ingredient" button to add ingredients to the recipe.
- Select an ingredient from the dropdown and specify its quantity.
- Click "Remove" next to an ingredient to remove it.
- Click "Add Cake" to submit the form and add the cake recipe.
- A success message will alert upon successful submission

### Cake History
- Users can click on the pencil icon to edit the name of a cake.
- Cakes can be removed from the list by clicking on the delete button/bin icon.
- The application recalculates the shopping list automatically when a cake is deleted. 
- The shopping list disappears after deletion and can be refreshed by pressing "Print Shopping List" again.

### Printing Shopping List:
Click "Print Shopping List" button to generate a shopping list.

## Future Developments:
- Store newly added cakes in a database for efficient management.
- Introduce a search feature to enable users to find added cakes and view their corresponding recipes. Furthermore, add functionality so that users can modify the ingredients and quantities.
- Users will be able to access past shopping lists along with associated cakes, and adjust the recipes accordingly.


## Technologies Used
- React.js
- JavaScript
- Jest
- Cypress for end-to-end testing
- Tailwind CSS
- uuid for geerating unique IDs
- Heroicons
- background picture from pixabay

## Prerequisites
Node.js installed on your machine
npm

## Installation
- Clone the repository to your local machine.
- Navigate to the project directory: cd CakeRecipePlanner
- Install dependencies: npm install
- npm install uuid
- npm install @heroicons/react


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### `npm run cypress:open` for Cypress Tests