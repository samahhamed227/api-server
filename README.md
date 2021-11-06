# api-server
# Lab: Class 04
## api-server

### Deployment Link
- https://api-serverr.herokuapp.com/food

### Author: Samah Hamed
 - [test report](https://github.com/samahhamed227/api-server)
 - [front end]()

### Setup
- .env requirements
  - PORT - 3000

### Running the app
- npm start
  - Endpoint: /status


### Tests
- Unit Tests: npm run test

### UML
![status](./images/uml.png)

### Notes
- pull request : 
- How do I install the app or library?
  - Clone the repo to your local machine
  - in the terminal, `run npm i`
  - Create `.env` file with port name as the one in the `env samples` 
  - Create database called `lab4` 
  - Seed the database for the food model with post request 
  - send in the body for the post request foodType and foodName  
  - Seed the database for the clothes model with post request 
  - send in the body for the post request clothesType and clothesBrand and clothesId  

- How do I test the app or library?
1.  in the termenal run `npm run test`
2. in the browser hit `localhost:yourPortNumber/food`
2. in the browser hit `localhost:yourPortNumber/clothes`