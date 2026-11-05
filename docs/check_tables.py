import psycopg2

try:
    conn = psycopg2.connect(dbname='edufusionai', user='postgres', password='1234', host='localhost', port='5432')
    cur = conn.cursor()
    cur.execute("SELECT table_schema, table_name FROM information_schema.tables WHERE table_schema NOT IN ('information_schema', 'pg_catalog');")
    rows = cur.fetchall()
    for r in rows:
        print(r)
except Exception as e:
    print(e)
