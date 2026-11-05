import psycopg2

try:
    conn = psycopg2.connect(
        dbname="edufusionai",
        user="postgres",
        password="1234",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()
    cur.execute("SELECT email, role FROM auth_schema.users;")
    rows = cur.fetchall()
    print("Users in DB:")
    for row in rows:
        print(row)
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
