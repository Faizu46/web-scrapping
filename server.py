from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def home():
    try:
        with open('scraped_data.json', 'r') as f:
            data = json.load(f)
    except Exception as e:
        data = {"error": "Could not load scraped data", "details": str(e)}
    return jsonify(data)

if __name__ == '__main__':
    # Bind to 0.0.0.0 so the container is accessible externally
    app.run(host='0.0.0.0', port=5000)

