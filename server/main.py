from flask import Flask, request, jsonify
from flask_cors import CORS
import re
from inference import T5Inference

app = Flask(__name__)
CORS(app, resources={r"/post_text": {"origins": "*"}})
model = T5Inference()

@app.route('/post_text', methods=['POST'])
def post_text():
    data = request.get_json()
    if 'text' in data:
        if 'tldr' in data['text']:
            tldr_output = model.predict('summarize: ' + data['text'])
            return jsonify({"message": tldr_output})
        sentances = t2s(data['text'])
        model_output = ''
        for s in sentances:
            model_output += model.predict('summarize:' + s)
        return jsonify({"message": model_output})
    else:
        return jsonify({"error": "Text not provided in the request data"})

def t2s(text):
    sentence_pattern = r'(?<=[.!?])(?=[^0-9])'
    sentences = re.split(sentence_pattern, text)

    return sentences

if __name__ == '__main__':
    app.run(debug=True)