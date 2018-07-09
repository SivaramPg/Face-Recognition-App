## [_Face-Recognition-App_](https://facerecognition-smart-brain.herokuapp.com)

A **CRUD** based **REACT APP** Built using create-react-app as a final project for the Udemy course **_Zero to Mastery: The Complete Web Developer in 2018_**  

**View Repo**: [**Face-Recognition-App**](https://github.com/SivaramPg/Face-Recognition-App) 

**View App**: [**facerecognition-smart-brain.herokuapp.com**](https://facerecognition-smart-brain.herokuapp.com)

**_Functionality and Features._**

* A components based a with states and props.

* Users can **register** & **sign-in** into the app. 

* It is connected to a database to store user details and passwords which are hashed and stored. 

* We use the **Demographic Model** from **Clarifai** which along with _Face Detection_ offers probable values for _age_, _gender_ and _culture_.

* The user can input an image url and utilizing the **Clarifai API** the response is used to calculate the _Face Highlight box_ and also display _Number of Faces Detected_.

* For images with single face both number of faces detected and other details are displayd whereas for images with multiple faces only number of detected faces is displayed.

