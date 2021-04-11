from flask import Flask
from flask_restful import Api 
from flask_cors import CORS 
from controller.User  import UserResource


app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(UserResource, '/user')

if __name__ == '__main__':
    app.run(debug = True,port=5000)