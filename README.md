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

### Configuration instructions:

#### Cloning the repository:

- Open Command Prompt
- `cd` into the folder you want the repository stored in
- Type: `git clone [https://github.com/Rshokar/QDSHacks2023.git]`

### Running the project:

1. Open Command Prompt
2. `cd` into the folder where the code is stored
3. Type: `npm start`
4. Wait a couple seconds until you see 'webpack compiled successfully'
![image](https://github.com/Rshokar/QDSHacks2023/assets/60485121/1d89ae99-b6f8-45ac-a739-2c3eb1e7c51f)


<br>

## <a id="how-to-use-product">How to use the product (Features)</a>

### Features

#### Login

- To login, you will need to enter your email and password.
- <b>Note:</b> the email and password are required fields.
- Once you have entered your information, click the <i>Submit</i> button

#### Create an entity

- Open the left navbar.
  - The left navbar can be opened by clicking the arrow icon in the top left corner of the screen.
- Expand the <i>Create</i> dropdown.
- Click on one of the entities.
- Fill in the required fields, and any optional fields if needed.
- <b>Note:</b> required fields are marked with an asterisk.
- Click the <i>Submit</i> button.
- A message will appear indicating whether the creation was successful or not.

#### Query an entity

- Open the left navbar.
- Expand the <i>Query</i> dropdown.
- Click on one of the entities.
- Fill in the required fields, and any optional fields if needed.
- <b>Note:</b> required fields are marked with an asterisk.
- Click the <i>Submit</i> button.
- A component will appear with a list of entities based on the query.

#### Edit an entity

- Follow the steps for how to query an entity.
- A component will appear with a list of entities based on the query from the previous step.
- To edit one of the entities, click the blue pencil icon.
- Update any of the fields.
- <b>Note:</b> required fields are marked with an asterisk and cannot be empty.
- Click the <i>Submit</i> button.
- The component with the list will be updated.

#### Delete an entity

- Follow the steps for how to query an entity.
- A component will appear with a list of entities based on the query from the previous step.
- To delete one of the entities, click the red garbage can icon.
- Confirm that you would like to delete this entity by clicking the <i>Delete</i> button.
- The entity will no longer be in the component with the list.

### View 1 to many relationships between entities
#### View all Conduits in a Duct
- Query a list of Ducts.
    - To query Ducts, follow the steps for how to query an entity.
- A component will appear with a list of Ducts based on the query.
- To view all Conduits in a specific Duct, left click on a Duct in the list.
    - <b>Note:</b> when you click on a Duct, it will be highlighted in light grey.
- A new component will appear with a list of Conduits for that specific Duct.

#### View all Wire Types in a Conduit
- Query a list of Conduits.
    - To query Conduits, follow the steps for how to query an entity.
- A component will appear with a list of Conduits based on the query.
- To view all Wire Types in a specific Conduit, left click on a Conduit in the list.
- A new component will appear with a list of Wire Types for that specific Conduit.

#### View visual data for all Conduits in a Duct
- Query a list of Ducts.
- A component will appear with a list of Ducts based on the query.
- To view visual data for Conduits in a specific Duct, left click and hold your mouse down for 1 second on a Duct in the list.
    - <b>Note:</b> when you hold your mouse down on a Duct, it will be highlighted in blue.
- A new component will appear with a list of Conduits for that specific Duct, a graphic for that Duct, and a list of Block Ranges.
- The graphic contains information about that Duct, including its install date, length, and depth.
- The list of Block Ranges has 2 categories: Current and Available. Block Ranges can be clicked and moved between those categories.

#### View visual data for all Wire Types in a Conduit
- Query a list of Conduits.
- A component will appear with a list of Conduits based on the query.
- To view visual data for Wire Types in a specific Conduit, left click and hold your mouse down for 1 second on a Conduit in the list.
    - <b>Note:</b> when you hold your mouse down on a Conduit, it will be highlighted in blue.
- A new component will appear with a list of Wire Types for that specific Conduit.
- The list of Wire Types has 2 categories: Current and Available. Wire Types can be clicked and moved between those categories.

### Top navbar icons

#### Help icon (question mark symbol)

The help icon is for getting instructions on how to use the application.

- Click the help icon in the top navbar.
- A popup will appear with dropdowns about how to use the application.
- Expand a dropdown to view step by step instructions on a particular feature.
- To close the popup, click the <i>Ok</i> button.

#### Settings icon (gear symbol)

The help icon is for logging out.

- Click the settings icon in the top navbar.
- A dropdown will expand under the icon.
- Click the <i>Logout</i> button to go back to the login page.

<br>

## Contact Information

- Bradley Masciotra - bmasciotra@my.bcit.ca
- Monica Bacatan - mbacatan1@my.bcit.ca
- Ravinder Shokar - rshokar2@my.bcit.ca
- Ryan Odribege - rodribege@my.bcit.ca
- Stan Hung - shung29@my.bcit.ca
