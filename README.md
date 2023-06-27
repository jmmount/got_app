# The Game of Thrones Quote Generator

This is a simple web application that generates random quotes from the Game of Thrones series. Each time you click the "New Quote" button, a new quote along with its author will be displayed.

## Prerequisites

- Web browser

## Installation

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## Usage

- The page will display a random quote from the Game of Thrones series.
- Click the "New Quote" button to generate a new quote.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- React

## Code Overview

The core functionality of the application is implemented in the `app.js` file. Here's a brief overview of the code:

- The `App` component is a React functional component that handles the rendering of the quote and author.
- The `quote` and `author` states are initialized using the `React.useState` hook.
- The `handleClick` function is triggered when the "New Quote" button is clicked. It makes an API call to fetch a random quote from the Game of Thrones Quotes API and updates the state variables accordingly.
- The initial quote and author values are rendered using the corresponding state variables within the JSX structure.
- The `ReactDOM.render` function is used to mount the `App` component inside the HTML `div` with the id "root".

## Future Work
- Add styling to the project to improve user experience
## Credits

- This application uses the [Game of Thrones Quotes API](https://api.gameofthronesquotes.xyz/v1/) to fetch random quotes.

