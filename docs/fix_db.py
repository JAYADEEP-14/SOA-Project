import psycopg2

try:
    conn = psycopg2.connect(
        dbname="edufusionai",
        user="postgres",
        password="1234",
        host="localhost",
        port="5432"
    )
    conn.autocommit = True
    cur = conn.cursor()
    
    # Drop the constraint
    cur.execute("ALTER TABLE auth_schema.users DROP CONSTRAINT IF EXISTS users_role_check;")
    print("Dropped constraint users_role_check")
    
    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
