from flask import Flask
import requests
from flask_cors import CORS
import config
import string
import random


app = Flask(__name__)


@app.route('/')
def index():
    return 'Web App with Python Flask!'


@app.route('/getMovieData') #, methods = ['POST'] when form created, add the method
def getMovieData():
    #take in the params sent from react
    #mediaTitle = request.form['title']  #update the word "title" for the one used in the form when the form is created
    
    #hard code test data
    mediaTitle = "Cinderella"
    
    params = {
        's':mediaTitle,
    }
    response = requests.get(config.data_URL,params=params).json()
    return response
    

@app.route('/createList') #, methods = ['POST'] when form created, add the method
def createList():
    #listName = request.form['name']  #update the form request ids
    #ownerEmail = request.form['email']
    
    #hard code test data
    listName = "A Movie Bucket List"
    ownerEmail = "alexisdoc13@gmail.com"
    
    movies = []
    randID = str(''.join((random.choice(string.ascii_letters + string.digits) for i in range(10))))
    config.listings.insert_one({"id":randID, "name":listName, "ownerEmail":ownerEmail, "movies":movies})
    SUBJECT = "Your New Watchlist: " + listName
    TEXT = "Here's the id for your new watchlist: " + randID + "\nHappy Watching!"
    message = 'Subject: {}\n\n{}'.format(SUBJECT, TEXT)
    config.server.sendmail('programwithapersonality@gmail.com',ownerEmail,message)
    #note that email should have link not id and that this needs to be updated
    return randID + "\n" + listName + " has been created. Share link has been emailed to " + ownerEmail
    
    
@app.route('/addToList') #, methods = ['POST'] when form created, add the method
def addToList():
    #ID = request.form['id']  #update the form request ids
    #movieTitle = request.form['title']
    
    #hard code test data
    ID = "HNBVIIuqwr"
    movieTitle = "Sound of Music"
    
    #save title to array in db
    data = config.listings.find_one({"id":ID})
    listName = data["name"]
    movies = data["movies"]
    movies.append(movieTitle)
    config.listings.update({"id":ID}, {"$set":{"movies":movies}})
    return "Added"
    

@app.errorhandler(404)
def page_not_found(e):
    return "Yo! You got a 404. Whacha doin?"