from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "1234"
app.config["MYSQL_DB"] = "personal-blog"

mysql = MySQL(app)

@app.route("/json")
def app_json():
    dbConnect = mysql.connection.cursor()
    dbConnect.execute("""SELECT * FROM tag;""")
    result = dbConnect.fetchall()
    return str(result)

if __name__ == "__main__":
    app.run(debug=True)