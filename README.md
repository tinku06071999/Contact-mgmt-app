# Contact Management App with Charts and Maps

This is a contact management app built using ReactJS, TypeScript, TailwindCSS, React Router v6, and Axios. The app provides a dashboard with charts and maps to visualize COVID-19 data.

## Objective

The objective of this project is to create a simple dashboard with the following features:

- A line graph showing the fluctuations in COVID-19 cases worldwide.
- A React Leaflet map displaying markers for different countries. Each marker indicates the country name, total number of active cases, recovered cases, and deaths. This information is shown as a popup when the marker is clicked.

## APIs

To fetch data and create the dashboards, the following APIs are used:

- World wide data of cases: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- Country-specific data of cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Instructions

Follow the instructions below to set up and run the app:

1. Install Node.js and npm (Node Package Manager) if they are not already installed on your machine.
2. Clone the repository and navigate to the project directory.
3. Install the project dependencies by running the following command:

```
npm install
```

4. Start the development server by running the following command:

```
npm start
```

5. Open a web browser and access the app at [http://localhost:3000](http://localhost:3000).

## Technologies Used

The app is built using the following technologies:

- **ReactJS**: JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **TailwindCSS**: A utility-first CSS framework for quickly styling the app.
- **React Router v6**: Routing library for React applications.
- **Axios**: A popular JavaScript library for making HTTP requests.

## Screenshots

Here are some screenshots of this app:
![Vite + React + TS (3)](https://github.com/tinku06071999/contact-mgmt-app/blob/main/src/assets/contact%20page.png)
![Vite + React + TS](https://github.com/tinku06071999/contact-mgmt-app/blob/main/src/assets/contact%20page1.png)
![Vite + React + TS (1)](https://github.com/tinku06071999/contact-mgmt-app/blob/main/src/assets/edit%20contct.png)
![Vite + React + TS (2)](https://github.com/tinku06071999/contact-mgmt-app/blob/main/src/assets/world-map.png)

## Demo Link

Check out the live demo of the Netflix clone [here](https://taiyo-ai-project.netlify.app/).

## App Structure

The app follows a well-structured architecture that promotes maintainability and ease of development.

## Responsive Design

The app is designed to be responsive and optimized for both desktop and mobile devices. It adapts to different screen sizes to provide a seamless user experience.
Date:07 May 2024, Day 158 Of WebDev

## Documentation

For more information on the API endpoints used, please refer to the following links:

- World wide data of cases: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
- Country-specific data of cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## License

This project is licensed under the MIT License.
