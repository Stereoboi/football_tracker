# Football Tracker

Football Tracker is a web application built using Next.js 13 and TypeScript, incorporating best practices from the Next.js 13 documentation. It provides a platform for tracking football leagues, teams, news, and player information. The application leverages several technologies, including Material Tailwind/React, Flowbite, Formik, Moment, Mongoose, NextAuth, SWR, Tailwind CSS, UploadThing, and TypeScript.

## Features:

# Leagues (/leagues): This page displays a list of top global football leagues, allowing users to explore and discover league information.

# Search (/search): The search page enables users to find football clubs worldwide by their name, facilitating easy access to specific club information.

# News (/news): This page presents news articles related to football. Authenticated users can create news articles, leveraging the recommended practices from the Next.js documentation, such as Parallel Routes and Intercepting Routes. Articles are opened in a modal window for a seamless user experience, while sharing article links allows them to be accessed as standalone pages. The page also includes pagination for better navigation through the articles.

# Dashboard (/dashboard): This protected route allows registered users to create, edit, and delete posts. Posts are stored in MongoDB, while images are managed using UploadThing. Automatic updates are implemented using mutations, enhancing the user experience.

# Standings (/standings/id): This route displays the standings and tournament tables for the selected championship. The navigation menu allows users to access additional routes for more detailed championship information.

# Top Scorers (/standings/id/topscorers): This page showcases the leading goal scorers of the championship.

# Home Matches (/standings/id/home): This page presents the results of matches played at home.

# Away Matches (/standings/id/away): This page displays the results of matches played away.

# Fixtures (/standings/id/fixtures): This page shows the results of the latest round of matches, and users can select any round within the season for more detailed information.

# Team (/team): This page provides detailed information about a football club, including the squad roster and key player information.

As a pet project, Football Tracker employs caching and optimized request validation to work within the limitations of the free API, which allows only 100 requests. If the request limit is exceeded, error handling and interception are implemented for all routes, providing notifications about the request limit. This is done to enhance the interaction with the application. Additionally, users have the ability to choose between light and dark themes, providing a personalized visual experience.

## Note: Please ensure to update the dependencies and packages according to the versions specified in the project's package.json file.
