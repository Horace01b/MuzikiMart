from flask import jsonify, request
from app import app, db

@app.route('/')
def home():
    return jsonify({"message": "MuzikiMart API is running!"})

@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy", "service": "MuzikiMart Backend"})

# Artist routes
@app.route('/api/artists', methods=['GET', 'POST'])
def artists():
    if request.method == 'GET':
        return jsonify({"artists": []})
    elif request.method == 'POST':
        # Handle artist creation
        return jsonify({"message": "Artist created successfully"})

# Fan routes  
@app.route('/api/fans', methods=['GET', 'POST'])
def fans():
    if request.method == 'GET':
        return jsonify({"fans": []})
    elif request.method == 'POST':
        # Handle fan registration
        return jsonify({"message": "Fan registered successfully"})

# Music routes
@app.route('/api/music', methods=['GET', 'POST'])
def music():
    if request.method == 'GET':
        return jsonify({"tracks": []})
    elif request.method == 'POST':
        # Handle music upload
        return jsonify({"message": "Music uploaded successfully"})