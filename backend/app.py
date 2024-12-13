import sqlite3
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)



CORS(app, resources={r"/api/*": {"origins": "http://localhost:5000"}})



def get_db_connection():
    try:
        conn = sqlite3.connect('database/ongoticos.db')
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        return None



@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory('images', filename)

@app.route('/api/animals', methods=['GET'])
def get_animals():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500
    
    animals = conn.execute('SELECT * FROM animals LIMIT 50').fetchall()
    conn.close()
    return jsonify([dict(animal) for animal in animals])



@app.route('/api/animals', methods=['POST'])
def add_animal():
    new_animal = request.get_json()

    if not new_animal.get('name') or not new_animal.get('species'):
        return jsonify({"error": "Name and species are required"}), 400
    
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500

    conn.execute(
        'INSERT INTO animals (name, species, age, enrollment_duration, image_url) VALUES (?, ?, ?, ?, ?)',
        (new_animal['name'], new_animal['species'], new_animal['age'], new_animal['enrollment_duration'], new_animal['image_url'])
    )
    conn.commit()
    conn.close()
    return jsonify(new_animal), 201


@app.route('/api/employees', methods=['GET'])
def get_employees():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500
    employees = conn.execute('SELECT * FROM employees').fetchall()
    conn.close()
    return jsonify([dict(employee) for employee in employees])


@app.route('/api/employees', methods=['POST'])
def add_employee():
    new_employee = request.get_json()
    
    if not new_employee.get('name') or not new_employee.get('position'):
        return jsonify({"error": "Name and position are required"}), 400

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500

    conn.execute(
        'INSERT INTO employees (name, position, experience_years) VALUES (?, ?, ?)',
        (new_employee['name'], new_employee['position'], new_employee['experience_years'])
    )
    conn.commit()
    conn.close()
    return jsonify(new_employee), 201


@app.route('/api/animal_history/<int:animal_id>', methods=['GET'])
def get_animal_history(animal_id):
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500
    animal_history = conn.execute(
        'SELECT * FROM history WHERE animal_id = ?', (animal_id,)
    ).fetchone()
    conn.close()
    if animal_history:
        return jsonify(dict(animal_history))
    else:
        return jsonify({"message": "History not found for this animal"}), 404


@app.route('/api/animal_history', methods=['POST'])
def add_animal_history():
    new_history = request.get_json()
    
    if not new_history.get('animal_id') or not new_history.get('event'):
        return jsonify({"error": "Animal ID and event are required"}), 400

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Failed to connect to the database"}), 500

    conn.execute(
        'INSERT INTO history (animal_id, event, description, date) VALUES (?, ?, ?, ?)',
        (new_history['animal_id'], new_history['event'], new_history['description'], new_history['date'])
    )
    conn.commit()
    conn.close()
    return jsonify(new_history), 201


@app.route('/api/clear_animals', methods=['POST'])
def clear_animals():
    conn = get_db_connection()
    try:
         
        conn.execute('DELETE FROM animais')
        conn.commit()
        return jsonify({"message": "Tabela de animais apagada com sucesso!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=3000)


