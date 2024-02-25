from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
data = [
    {"id": 1, "name": "Item 1", "description": "Description for Item 1"},
    {"id": 2, "name": "Item 2", "description": "Description for Item 2"},
    {"id": 3, "name": "Item 3", "description": "Description for Item 3"}
]

# Endpoint to get data
@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(data)

# Endpoint to get a single item by id
@app.route('/data/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = next((item for item in data if item['id'] == item_id), None)
    if item:
        return jsonify(item)
    else:
        return jsonify({'error': 'Item not found'}), 404

# Endpoint to create a new item
@app.route('/data', methods=['POST'])
def create_item():
    new_item = request.json
    new_item['id'] = max(item['id'] for item in data) + 1
    data.append(new_item)
    return jsonify(new_item), 201

# Endpoint to update an existing item
@app.route('/data/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item = next((item for item in data if item['id'] == item_id), None)
    if item:
        item.update(request.json)
        return jsonify(item)
    else:
        return jsonify({'error': 'Item not found'}), 404

# Endpoint to delete an existing item
@app.route('/data/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    global data
    data = [item for item in data if item['id'] != item_id]
    return jsonify({'message': 'Item deleted'})


if __name__ == '__main__':
    app.run(debug=True)