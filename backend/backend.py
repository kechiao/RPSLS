from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import math

app = Flask(__name__)
CORS(app)

losing_outcomes = {
    1: ['paper', 'spock'],
    2: ['scissors', 'lizard'],
    3: ['rock', 'spock'],
    4: ['rock', 'scissors'],
    5: ['lizard', 'paper']
}
choices = {
    1:'rock',
    2:'paper',
    3:'scissors',
    4:'lizard',
    5:'spock'
}

@app.route('/')
def hello_world():
    return get_json_randomNumber()

@app.route('/choices')
def get_choices():
    id_choice_list = []
    for id in choices:
        choice_dict = {}
        choice_dict['id'] = id
        choice_dict['name'] = choices[id]
        id_choice_list.append(choice_dict)
    return jsonify(id_choice_list)

@app.route('/choice')
def get_choice():
    random_num = get_int_randomNumber()
    # basically bucketing choices into buckets of 20 (1-20 = rock, 21 - 40 = paper, etc)
    converted_id = math.ceil(random_num / 20) 
    return jsonify(id=converted_id, name=choices[converted_id])

@app.route('/play', methods=['POST']) 
def play_game():
    content = request.get_json()
    result_dict = {}
    # add a try catch block for data validation
    player_choice = content['player']
    computer_choice_number = math.ceil(get_int_randomNumber()/20)
    computer_choice = choices[computer_choice_number]
    
    result_dict['player'] = player_choice
    result_dict['computer'] = computer_choice_number

    # Game logic
    if choices[player_choice] == computer_choice:
        result_dict['results'] = 'tie'
    elif computer_choice in losing_outcomes[player_choice]:
        result_dict['results'] = 'lose'
    else:
        result_dict['results'] = 'win'
    return jsonify(result_dict)

def get_json_randomNumber():
    request_randomNumber = requests.get(url="https://codechallenge.boohma.com/random", verify=False)
    return request_randomNumber.json()

def get_int_randomNumber():
    return get_json_randomNumber()["random_number"]