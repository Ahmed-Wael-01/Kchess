## Project By: Ahmed Wael / Abdelrahman Mohsen

# Sections

1. Overview
2. Installation and usage
3. Technologies and packages
4. Architecture
5. User flow 
6. Challenges
7. Future improvements

# Overview

Kchess is a free to use website for playing real-time online chess games and storing your previous games for you to analyze later

# Installation and usage

| step | procedure     |
| ---- |:-------------:|
| 1    | clone the repository with `https://github.com/Ahmed-Wael-01/Kchess` |
| 2    | use the queries in `assets/init.sql`  to generate the database schema in mysql     |
| 3    | use the command `npm install` and it would install all the deppendencies and packages      |
| 4 | make `.env` file for your environment variables (database credentials and access tokens) |

# Technologies and Packs used

1. Node.js/Express: for the backend framework
2. Mysql: we decided to use mysql for the database with mysql module
3. EJS: the view engine being used to generate pages
4. bcrypt: for hashing passwords and tokens
5. dotenv: to have the ability of using an environment variables 
6. jsonwebtoken: to generate jwt tokens for authentication
7. socket.io: for real-time communication with websockets technology instead of regulare http requests
8. nodemon: for development uses 

# User flow

1. user will be greated by a home pages
2. then he would be expected to register a new account or login if they have online
3. after validation they can enter the lobby to create a game or join one 
4. after the game finishes it would be stored in their profiles with the game info
5. the user can access their or other people profiles and navigate previous games

# Challenges

- Learning new Technologies
we had issues learning these new concepts and frameworks but we managed to make a study plan to finish in time which would be a great skill in a business environment

- Dealing with a project with a much bigger scale than usual
this was frustrating especialy that we didn't work on a scale like this before and files organizing was a mess at first but we managed by the help of some tutoriales to divide and conqure it and we reached a professional Architecture than is readable and can be built upon

- The jwt concept was confusing
dealing with jwt was confusing at first but after some time and after using it and implementing it to organize a login system it was much easier

# Future improvements

 the project is still in Alpha version so we obviously have a lot to add and a big window for improvements and here is some future plans

- adding a bot to play with
- analysis on previous games like win ratio and average scoring
- implementing ELO system
- using a front-end framework like React
