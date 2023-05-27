# Trucker Tool - QDSHacks2023

<br>

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [How to install or run the project](#how-to-run-project)
- [How to use the product](#how-to-use-product)
- [Contact Information](#contact-information)

<br>

## Project Description

Trucker Tool is an innovative application developed during the QDSHacks 2023 hackathon, focusing on the theme of big data. We are proud to have been sponsored by Teck Resources, a leading multinational mining company dedicated to improving its ecological footprint through data-driven solutions.

Our primary objective was to create a user-friendly application that provides essential fuel consumption statistics for trucks used in mining operations. The key metrics include:

- Tons per litre
- Hours per round
- Tons per round
- Litres per hour

Efficiency is measured by the ratio of tonnage to fuel consumption. By tracking this data, we aim to enable Teck Resources to make informed decisions and enhance their fuel usage strategies.

The application boasts a range of features designed to maximize fuel efficiency and operational productivity. One such feature is the ability to analyze the percentage of time a truck spends in different statuses, including non-productive, loading, dumping, empty, and hauling. By identifying and optimizing the time spent in high-efficiency hauling operations, we can reduce fuel consumption and idle time.

Another powerful feature of our application is the capability to determine the best and worst routes for trucks. By analyzing historical data and considering factors such as terrain, distance, and traffic, Trucker Tool recommends the most optimal routes. This empowers managers to assign trucks that operate at peak efficiency to the routes that would benefit the most from their performance.

Additionally, our application provides a shovel and dump site selection feature. By inputting specific requirements and criteria, managers can obtain truck recommendations tailored to the given situation. This functionality enables better decision-making, leading to increased fuel optimization within Teck Resources' mining operations.

By incorporating all these features, Trucker Tool equips Teck Resources with a comprehensive solution for optimizing fuel usage within their mines. We believe that by leveraging data-driven insights, we can contribute to Teck's ongoing commitment to reducing their ecological footprint while achieving operational excellence.

## Technologies Used

- React
- JS
- Python
- Firebase 
- SQL

<br>

## <a id="how-to-run-project">How to install or run the project</a>

### Prerequisites:

- Have a Git and GitHub account

### Cloning the repository:

- Open Command Prompt
- `cd` into the folder you want the repository stored in
- Type: `git clone [https://github.com/Rshokar/QDSHacks2023.git]`

### Running the project:

1. Open Command Prompt
2. `cd` into the folder where the code is stored
3. Type: `npm start`
4. Wait a couple seconds until you see 'webpack compiled successfully'
5. A web page on your default browser will open, with the basic analytics page open
<br>

## <a id="how-to-use-product">How to use the product (Features)</a>

### Features

#### Basic Analytics
- Select a Truck ID from the dropdown menu.
- The top row of analytics will display key statistics.
- The bar chart represents average stats at different stages:
 - Light Blue: Idle
 - Green: Empty
 - Dark Blue: Loaded
- The bottom section indicates the best and worst routes for the selected truck.

#### Truckin' Sights
- Select a shovel ID from the dropdown menu.
- Select a dump ID from the dropdown menu.
- The UI will indicate that it is searching for the optimal truck.
- The recommended Truck ID will be displayed.
- Basic analytics for the recommended truck will be shown below.
<br>

## Contact Information

- Bradley Masciotra - bmasciotra@my.bcit.ca
- Monica Bacatan - mbacatan1@my.bcit.ca
- Ravinder Shokar - rshokar2@my.bcit.ca
- Ryan Odribege - rodribege@my.bcit.ca
- Stan Hung - shung29@my.bcit.ca
