from flask import *
from flask_cors import CORS
import mysql.connector
import datetime

app = Flask(__name__)
app.secret_key = "secret_key"
CORS(app)

# Các mã lỗi trả về cho client
ERROR_USERNAME_EXISTS = {'error': 'Tên đăng nhập đã tồn tại'}
ERROR_EMAIL_EXISTS = {'error': 'Email đã được đăng ký'}
ERROR_INVALID_CREDENTIALS = {'error': 'Tên đăng nhập hoặc mật khẩu không đúng'}

@app.route('/api/login/admin', methods=['POST'])
def loginAdmin():
    if request.method == 'POST':
        username = request.json['username']
        password = request.json['password']
        if username == 'admin' and password == '1':
            session_id = datetime.datetime.now().strftime("%Y%m%d%H%M%S%f")
            session[session_id] = 'admin'
            return jsonify({'session_id': session_id}), 200
        else:
            error = 'Sai tài khoản hoặc mật khẩu'
            return jsonify({'error': error}), 401

@app.route('/api/login', methods=['POST'])
def login():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    # Lấy thông tin từ request
    username = request.json['username']
    password = request.json['password']

    # Kiểm tra thông tin đăng nhập
    query = "SELECT * FROM user WHERE user_name = %s"
    cursor.execute(query, (username,))
    data = cursor.fetchone()
    if not data:
        return jsonify(ERROR_INVALID_CREDENTIALS), 401
    user = {
        'id': data[0],
        'name': data[1],
        'username': data[2],
        'password': data[3]
    }
    if user['password'] != password:
        return jsonify(ERROR_INVALID_CREDENTIALS), 401

    session_id = datetime.datetime.now().strftime("%Y%m%d%H%M%S%f")
    session[session_id] = user

    return jsonify({'session_id': session_id}), 200

@app.route('/api/logout', methods=['POST'])
def logout():
    sessionId = request.json['sessionId']
    session.pop(sessionId, None)

@app.route('/api/register', methods=['POST'])
def register():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    # Lấy thông tin từ request
    name = request.json['name']
    username = request.json['rgUsername']
    password = request.json['rgPassword']

    # Kiểm tra xem username đã tồn tại hay chưa
    cursor.execute('SELECT * FROM user WHERE user_name = %s', (username,))
    user = cursor.fetchone()
    if user:
        return jsonify({'message': 'Username already exists'}), 400

    # Thêm user vào cơ sở dữ liệu
    cursor.execute('INSERT INTO user (name, user_name, password) VALUES (%s, %s, %s)', (name, username, password))
    db.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/user', methods=['POST'])
def getUser():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    sessionId = request.json['sessionId']
    user = session.get(sessionId)
    if user:
        userId = user['id']
        query = 'SELECT * FROM user WHERE id = %s'
        cursor.execute(query, (userId,))
        data = cursor.fetchone()
        user = {
            'id': data[0],
            'name': data[1],
        }
        return jsonify(user)
    else:
        print("false")

@app.route('/api/slide')
def getSlide():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    query = "SELECT * FROM image"
    cursor.execute(query)
    rows = cursor.fetchall()
    datas = []
    for row in rows:
        data = {
            'id': row[0],
            'url': row[1],
            'type': row[2]
        }
        datas.append(data)
    return jsonify(datas)

@app.route('/api/menu', methods=['GET', 'POST'])
def getFood():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()

    if request.method == 'GET':
        query = "SELECT * FROM food"
        cursor.execute(query)
        rows = cursor.fetchall()
        datas = []
        for row in rows:
            data = {
                'id': row[0],
                'name': row[1],
                'description': row[2],
                'price': row[3],
                'quantitySolve': row[4],
                'foodType': row[5],
                'imgUrl': row[6]
            }
            datas.append(data)
        return jsonify(datas)

    elif request.method == 'POST':
        data = request.json
        query = "INSERT INTO food (id, name, description, price, quantity_sold, foodtype_id, image_url) VALUES (NULL, %s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (data['name'], data['description'], data['price'], data['quantitySolve'], data['foodType'], data['imgUrl']))
        db.commit()
        return jsonify({'success': True})

@app.route('/api/menu/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def getFoodDetail(id):
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()

    if request.method == 'GET':
        query = "SELECT * FROM food WHERE id = %s"
        cursor.execute(query, (id,))
        data = cursor.fetchone()

        # Kiểm tra xem sản phẩm có tồn tại hay không
        if not data:
            return jsonify({'error': 'Product not found'}), 404
        else:
            food = {
                'id': data[0],
                'name': data[1],
                'description': data[2],
                'price': data[3],
                'quantitySolve': data[4],
                'foodType': data[5],
                'imgUrl': data[6]
            }
            return jsonify(food)

    elif request.method == 'PUT':
        data = request.json
        query = "UPDATE food SET name = %s, description = %s, price = %s, quantity_sold = %s, foodtype_id = %s, image_url = %s WHERE id = %s"
        cursor.execute(query, (data['name'], data['description'], data['price'], data['quantitySolve'], data['foodType'], data['imgUrl'], id))
        db.commit()
        return jsonify({'success': True})

    elif request.method == 'DELETE':
        query = "DELETE FROM food WHERE id = %s"
        cursor.execute(query, (id,))
        db.commit()
        return jsonify({'success': True})

@app.route('/api/blog', methods=['GET', 'POST'])
def getBlog():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    if request.method == 'GET':
        query = "SELECT * FROM blog"
        cursor.execute(query)
        rows = cursor.fetchall()
        datas = []
        for row in rows:
            data = {
                'id': row[0],
                'title': row[1],
                'shortDescription': row[3],
                'date': row[4],
                'view': row[5],
                'imageUrl': row[6]
            }
            datas.append(data)
        return jsonify(datas)
    elif request.method == 'POST':
        data = request.json
        query = "INSERT INTO blog (title, content, short_description, image_url) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (data['title'], data['content'], data['shortDescription'], data['imgUrl']))
        db.commit()
        return jsonify({'success': True})

@app.route('/api/blog/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def getBlogDetail(id):
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()

    if request.method == 'GET':
        query = "SELECT * FROM blog WHERE id = %s"
        cursor.execute(query, (id,))
        data = cursor.fetchone()

        # Kiểm tra xem sản phẩm có tồn tại hay không
        if not data:
            return jsonify({'error': 'Product not found'}), 404
        else:
            blog = {
                'id': data[0],
                'title': data[1],
                'content': data[2],
                'shortDescription': data[3],
                'date': data[4],
                'view': data[5],
                'imgUrl': data[6]
            }
            return jsonify(blog)
    elif request.method == 'PUT':
        data = request.json
        print(data)
        query = "UPDATE blog SET title = %s, content = %s, short_description = %s, date = %s, view = %s, image_url = %s WHERE id = %s"
        cursor.execute(query, (data['title'], data['content'], data['shortDescription'], data['date'], data['view'], data['imgUrl'], id))
        db.commit()
        return jsonify({'success': True})

    elif request.method == 'DELETE':
        query = "DELETE FROM blog WHERE id = %s"
        cursor.execute(query, (id,))
        db.commit()
        return jsonify({'success': True})

@app.route('/api/blog/<int:id>/views', methods=['PATCH'])
def increase_product_views(id):
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    query = "UPDATE blog SET view = view + 1 WHERE id = %s"
    cursor.execute(query, (id,))
    db.commit()
    return jsonify({'success': True})

@app.route('/api/foodtype', methods=['GET', 'POST', 'PUT', 'DELETE'])
def getTypeOfFood():
    # Create a connection to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="restaurant"
    )

    # Create a cursor to execute SQL queries
    cursor = db.cursor()
    if request.method == 'GET':
        query = "SELECT * FROM typeoffood"
        cursor.execute(query)
        rows = cursor.fetchall()
        datas = []
        for row in rows:
            data = {
                'id': row[0],
                'type': row[1]
            }
            datas.append(data)
        return jsonify(datas)

    elif request.method == 'POST':
        content = request.json['type']
        query = "INSERT INTO typeoffood (id, type) VALUES (NULL, %s)"
        cursor.execute(query, (content, ))
        db.commit()
        return jsonify({'success': True})

    elif request.method == 'PUT':
        typeId = request.json['id']
        content = request.json['type']
        query = "UPDATE typeoffood SET type = %s WHERE id = %s"
        cursor.execute(query, (content, typeId))
        db.commit()
        return jsonify({'success': True})

    elif request.method == 'DELETE':
        typeId = request.json['id']
        query = "DELETE FROM typeoffood WHERE id = %s"
        cursor.execute(query, (typeId, ))
        db.commit()
        return jsonify({'success': True})

if __name__ == '__main__':
    app.run()
