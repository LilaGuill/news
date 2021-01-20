## Getting Started with Create React App & Typescript

<p align="left">
 This project was bootstrapped with <a href=https://create-react-app.dev/docs/adding-typescript/ target="_blank">Create React App --template typescript</a>
</p>

## Overview

**Functionalities**

- The page "Home" displays articles from News API : https://newsapi.org/docs/endpoints/top-headlines.
- In Home page a menu allows the user to search articles by categories.
- In Home page a search bar allows the user to search articles containing specfics words
- The page "Article" displays the article selected by the user with more details.

## Running the project

**Clone this repository**

```
git clone https://github.com/LilaGuill/news.git
cd news
```

**Install packages**

```
npm install
```

**API key**

- Get your Api key https://newsapi.org/docs/get-started from NewsAPI.
- Create .env file at the root of the project.
- Paste your API key in the .env file
- Don't forget to add .env in your .gitignore file.

```
API_KEY="123454...."
```

**Run the project**

```
npm start
```

## Lambda functions - Netlify

To request data from API that requires API key, it's a good idea to execute your call method
from a server.

Netlify provide a easy way to execute server-side code without having to run a dedicated server thanks to the lambda functions.
These functions are stored in the functions file in the project.

For more informations about the lamba functions : https://docs.netlify.com/functions/overview/

In your front you have to call your function like this:

```
const res = await axios.get("/.netlify/functions/getNews")

```
