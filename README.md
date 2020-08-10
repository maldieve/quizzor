## QUIZZOR

### About the project

##### Quiz Game 

---
### Libraries :book:
Here are some of the important libraries of the solution.
###### Backend
- PassportJS *used for login function*
- Socket io *used for websocket to the client side.*
- rand-token *used for creating matchtokens*
- mongoose *used for connecting and talking to Mongodb*
- bcrypt  *used for hashing of passwords.*
- express *used for creating a nodejs express app*

###### Frontend
- redux-form *used for saving the form state in redux*
- redux *used for storing of app state. ex: userinfortmation*
- react-router *used for routing with react.js*
- redux-thunk *used for async http-request for the action-creators*

---
### Code structure 
This project has to enviorments. Development and Production. That means we are coding we have to take account for both of these enviornments. That means both of these environments are running on different Databases, use different keys etc.   

##### HTTP-ROUTES
*Authenticate routes - For functions like Login/logout*
- POST - /api/register - For registering a new user
- POST - /api/login - For login in
- GET - /api/current_user - For retriveing the current user that is logged in.
- GET /api/logout - For logging out of the website.

*Gameroutes - For functions like start a game*
- GET /api/findgame - Checks if there are any current games or will start a new game.
- POST /api/startgame - Will only allow Party-Leader to start the game.
- POST /api/checkgameexist - Will check if the game they started actually exist.
- POST /api/endgame - Will end the game for all of the players.

---
#### How to start project
Do these following actions.
- In the ROOT project do npm install 
```
npm install 
```
- Then procede to client folder and do the same thing.
```
npm install
```
- Go back to the ROOT folder and run the following command
```
cd ..
npm run dev
```

##### Ports
- Server, Nodejs is running on port **3000**
- Client, Reactjs is running on port **8080**

The web app will be presented in localhost:8080

---
### Cloud platforms :cloud:
*HEROKU*

---

### Evaluation
-  [x] MongoDB database
-  [x] Redux
-  [x] Heroku
-  [ ] Testing


### Resources used for this Project
https://jasonwatmore.com/post/2018/12/06/deploy-to-heroku-node-mongo-api-for-authentication-registration-and-user-management