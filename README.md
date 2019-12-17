# RPSLS

This is my submission for the RPSLS Billups coding challenge. 


# Installing Necessary Packages

## Backend: 
cd into the backend folder and run "pip install -r requirements.txt" 

## Frontend: 
cd into frontend folder and run "yarn install"


# Running the Program

## Backend
Start the backend server by opening a terminal in the backend folder and running "export FLASK_APP=backend.py" followed by "flask run".
The server should start up.

## Frontend
Start the front end client by opening a terminal in the frontend folder and running "yarn start". A new tab in the browser should
display with the rock paper scissors app displayed. You can now play the game and interact with the backend.


# Takeaways:
There are numerous things I could improve on. I spent a total of roughly 2 work afternoons on this project, with most of the time figuring out
tiny bugs and various display errors (such is life). Overall, this project was really fun and here are some improvements to be made:

* Definitely make the front end beautiful and response with flex grids working with all screen sizes and types (css takes forever)
* Adding unit testing to the backend to test endpoints to make sure they're returning what we expect
* Adding UI testing to the frontend to make sure buttons appear correctly and have the correct text
* Adding integration testing in the frontend to make sure endpoints are being hit correctly.
  a) Checking the response status codes to make sure we're getting what we expect e.g. 2xx, 3xx, 4xx, 5xx
  b) Checking the response content body to make sure we're getting the correct expected data
