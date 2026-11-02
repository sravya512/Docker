from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Hi, Welcome!"

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get("name")
    password = data.get("password")
    if not name or not password:
        return jsonify({"error": "Name and password are required"}), 400
    return jsonify({"name": name, "password": password})

if __name__ =='__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

