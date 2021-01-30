from pymongo import MongoClient
import smtplib
from email.message import EmailMessage

#OMDB API
apiKey = env.API_KEY
data_URL = 'http://www.omdbapi.com/?apikey='+apiKey

#Mongo DB
client = MongoClient(env.MONGO_KEY)
db = client.Lists
listings = db.Lists

#Email
server = smtplib.SMTP_SSL('smtp.gmail.com',465)
server.login(env.EMAIL,env.EMAIL_PW)