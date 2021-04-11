from flask_restful import Resource
from flask import request, jsonify
from flask_cors import  cross_origin

class UserResource(Resource):
    def get(self):
        return [{"id":3121,"name":"igarashi","age":25},{"id":3122,"name":"suzuki","age":11}]

    def post(self):
        cross_origin.supports_credentials=True
        # jsonを格納する変数
        data = request.json

        #post methodで送信されたidの値
        ID = data.get('id') 

        #post methodで送信されたnameの値
        name = data.get('name') 

        #post methodで送信されたageの値
        age = data.get('age') 
        
        #postの値をjson形式にしてres変数に格納する。
        res = {'ID':ID,"name":name,"age":age}
        print(res)
        return jsonify(res)

