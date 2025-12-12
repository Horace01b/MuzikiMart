from app import db
from datetime import datetime

class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    tracks = db.relationship('Track', backref='artist', lazy=True)
    events = db.relationship('Event', backref='artist', lazy=True)

class Fan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Track(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    genre = db.Column(db.String(50))
    price = db.Column(db.Float)
    file_path = db.Column(db.String(500))
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    venue = db.Column(db.String(200))
    date = db.Column(db.DateTime)
    price = db.Column(db.Float)
    artist_id = db.Column(db.Integer, db.ForeignKey('artist.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)