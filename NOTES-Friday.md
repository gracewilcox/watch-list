# Notes for running new code

To use OMDB API and Mongo, install this stuff:
pip install requests 
pip install flask_cors
pip install pymongo
Might need to pip install for these as well:
import smtplib
from email.message import EmailMessage


/getMovieData returns a set of json

Each listing has these attribites:
*Poster - either a jpg link or "N/A" if no poster (most have posters)
*Title - Title of the movie/series
*Type - The type. Choices are movie, series, and episode
*Year - the year 
*imdbID - The imdb ID number




Question: How long should the random string of characters be? I have it at 10 char right now but I was wondering if I should make it 20 or is that overkill?




# Report of what I did
* Added /getMovieData with hardcoded data for testing. Once form is created, I will uncomment it and test to make sure receiving data works
* Added a 404 page response. When 404 is hit, a message prints out. Not sure if it is easy on your end to create a pretty/better 404 page. Not a priority, but if you already know if an easy way to make the page, then be my guest. My python func just returns a message about 404 happening.
* Created config file for the OMDB API key/URL, Mongo DB login stuff, and email credentials to send emails
* Created /createList that gets the name of the new list and email from a form (this part is commented out at the moment). It creates a random id, saves the info in the db, and sends the user an email with the id in it (should send a full link to the user when I modify it).
* Created /addToList which takes in form data like the others and addes it to the db list. Returns a confirm message





P.S. Sorry I spammed your inbox with github issue posted emails