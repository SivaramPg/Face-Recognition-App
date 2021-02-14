# [_Face-Recognition-App_](https://faceapp.sivaramp.com)

A **CRUD** based **REACT APP** Built using create-react-app as a final project for the Udemy course **_Zero to Mastery: The Complete Web Developer in 2018_** A fully functional full-stack web application designed using React.js for the front end , Node.js for the back end and a PostgreSQL database all deployed on Heroku

**View Repo**: [**Face-Recognition-App**](https://github.com/SivaramPg/Face-Recognition-App)

**View Back-End Repo**: [**Face-Recognition-App-API**](https://github.com/SivaramPg/Face-Recognition-App-API)

**View App**: [**facerecognition-smart-brain.herokuapp.com**](https://faceapp.sivaramp.com)

**_Functionality and Features._**

- A components based a with states and props.

- Users can **register** & **sign-in** into the app.

- It is connected to a database to store user details and passwords which are hashed and stored.

- We use the **Demographic Model** from **Clarifai** which along with _Face Detection_ offers probable values for _age_, _gender_ and _culture_.

- The user can input an image url and utilizing the **Clarifai API** the response is used to calculate the _Face Highlight box_ and also display _Number of Faces Detected_ in the supplied image.

- For images with single face both number of faces detected and other details are displayed whereas for images with multiple faces only number of detected faces is displayed.

## Steps to start:

1. Clone this repo

2. Go to Face-Recognition-App
   This is the main project folder for the front end.

3. Run npm install
   This will install all the dependencies.

4. Go to [**Face-Recognition-App-API**](https://github.com/SivaramPg/Face-Recognition-App-API) & Clone the repo.
   This is the server i.e. the back-end for the application

5. You must add your own API key in the `controllers/image.js` file to connect to Clarifai.

You can grab Clarifai API key [here](https://www.clarifai.com/)

6. Run npm install
   This will install all the dependencies.

7. Run npm start
   This will run the server, on port 3000

8. Go to **Face-Recognition-App** and run npm start
   Press Y when prompted for using another port
   (Since 3000 is default for create-react-app module and it is occupied)
   It will use the port 3001

### Configuring Database:

\*\* Make sure you use postgreSQL instead of mySQL for this code base.

1.  Create a database face-recog
2.  Create table users and login, with following structure:
    (Generated using \d tb_name in psql)

                                        Table "public.users"

| Column  | Type                        | Modifiers                                          |
| ------- | --------------------------- | -------------------------------------------------- |
| id      | integer                     | not null default nextval('users_id_seq'::regclass) |
| name    | character varying(100)      |
| email   | text                        | not null                                           |
| entries | bigint                      | default 0                                          |
| joined  | timestamp without time zone | not null                                           |

Indexes:
"users_pkey" PRIMARY KEY, btree (id)
"users_email_key" UNIQUE CONSTRAINT, btree (email)

                                 Table "public.login"

| Column | Type                   | Modifiers                                          |
| ------ | ---------------------- | -------------------------------------------------- |
| id     | integer                | not null default nextval('login_id_seq'::regclass) |
| hash   | character varying(100) | not null                                           |
| email  | text                   | not null                                           |

Indexes:
"login_pkey" PRIMARY KEY, btree (id)
"login_email_key" UNIQUE CONSTRAINT, btree (email)

3. Enter user and password for the database in server.js

#### Modules used:

1. [react](https://www.npmjs.com/package/react)
2. [particles.js](https://www.npmjs.com/package/react-particle-js)
3. [tachyons](https://www.npmjs.com/package/tachyons)
