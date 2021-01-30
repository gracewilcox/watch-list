from pymongo import MongoClient
import smtplib
from email.message import EmailMessage

#OMDB API
apiKey = "423f16fd"
data_URL = 'http://www.omdbapi.com/?apikey='+apiKey

#Mongo DB
client = MongoClient("mongodb+srv://gatorlorian:60t2b@cluster.5fotp.mongodb.net/Lists?retryWrites=true&w=majority")
db = client.Lists
listings = db.Lists

#Email
server = smtplib.SMTP_SSL('smtp.gmail.com',465)
server.login('programwithapersonality@gmail.com','imgpxjngepzsoetn')