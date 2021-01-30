from pymongo import MongoClient
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os

load_dotenv()

#OMDB API
apiKey = str(os.getenv("API_KEY"))
data_URL = 'http://www.omdbapi.com/?apikey='+apiKey

#Mongo DB
client = MongoClient(str(os.getenv("MONGO_KEY")))
db = client.Lists
listings = db.Lists

#Email
#server = smtplib.SMTP_SSL('smtp.gmail.com',465)
#server.login(os.getenv("EMAIL"), str(os.getenv("EMAIL_PW")))