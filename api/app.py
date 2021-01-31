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
def createList(json):
    #listName = request.form['name']  #update the form request ids
    
    #hard code test data
    listName = json["listName"]
    
    movies = []
    randID = str(''.join((random.choice(string.ascii_letters + string.digits) for i in range(10))))
    poster = ""
    config.listings.insert_one({"id":randID, "name":listName, "ownerEmail":ownerEmail, "movies":movies, "poster":poster})
    return {'id':randID }
    
    
@app.route('/addToList') #, methods = ['POST'] when form created, add the method
def addToList():
    #ID = request.form['id']  #update the form request ids
    #movieTitle = request.form['title']
    
    #hard code test data
    ID = "nRy7BguKzk"
    movieTitle = "Inception"
    
    data = config.listings.find_one({"id":ID})
    listName = data["name"]
    movies = data["movies"]
    movies.append(movieTitle)
    config.listings.update({"id":ID}, {"$set":{"movies":movies}})
    return "Added"
    
    
@app.route('/deleteFromList') #, methods = ['POST'] when form created, add the method
def deleteFromList():
    #ID = request.form['id']  #update the form request ids
    #movieTitle = request.form['title']
    
    #hard code test data
    ID = "nRy7BguKzk"
    movieTitle = "Inception"

    data = config.listings.find_one({"id":ID})
    listName = data["name"]
    movies = data["movies"]
    movies.remove(movieTitle)
    config.listings.update({"id":ID}, {"$set":{"movies":movies}})
    return "Deleted"
    
    
@app.route('/getListName')
def getListName(ID):
    data = config.listings.find_one({"id":ID})
    return data["name"]
    

@app.errorhandler(404)
def page_not_found(e):
    return "Yo! You got a 404. Whacha doin?"