from flask import Flask, jsonify, render_template
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r'/json': {'origins': 'http://localhost:5000/'}})
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "1234"
app.config["MYSQL_DB"] = "personal-blog"

mysql = MySQL(app)

@app.route("/json")
def app_json():
    dbConnect = mysql.connection.cursor()
    dbConnect.execute("""SELECT * FROM tag;""")
    result = dbConnect.fetchall()
    # result_dict = dict(result)
    return jsonify(result)

@app.route("/")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, port=5000)