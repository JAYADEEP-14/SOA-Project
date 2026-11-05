import pandas as pd
import psycopg2

try:
    conn = psycopg2.connect(dbname='edufusionai', user='postgres', password='1234', host='localhost', port='5432')
    conn.autocommit = True
    cur = conn.cursor()

    # Load rooms
    df_rooms = pd.read_csv('ai/datasets/classrooms.csv')
    cur.execute("TRUNCATE classroom_schema.classrooms RESTART IDENTITY CASCADE;")
    for _, row in df_rooms.iterrows():
        cur.execute("INSERT INTO classroom_schema.classrooms (id, room_number, building, capacity, has_projector) VALUES (%s, %s, %s, %s, %s)",
                    (row['id'], row['room_number'], row['building'], row['capacity'], row['has_projector']))
    print("Rooms loaded")

    # Load courses
    df_courses = pd.read_csv('ai/datasets/courses.csv')
    cur.execute("TRUNCATE academic_schema.courses RESTART IDENTITY CASCADE;")
    for _, row in df_courses.iterrows():
        cur.execute("INSERT INTO academic_schema.courses (id, course_code, title, description, credits, faculty_id) VALUES (%s, %s, %s, %s, %s, %s)",
                    (row['id'], row['course_code'], row['title'], row['description'], row['credits'], row['faculty_id']))
    print("Courses loaded")

    # Load attendance
    df_att = pd.read_csv('ai/datasets/attendance_records.csv')
    cur.execute("TRUNCATE attendance_schema.attendance_records RESTART IDENTITY CASCADE;")
    for _, row in df_att.iterrows():
        cur.execute("INSERT INTO attendance_schema.attendance_records (id, student_id, course_id, date, status) VALUES (%s, %s, %s, %s, %s)",
                    (row['id'], row['student_id'], row['course_id'], row['date'], row['status']))
    print("Attendance loaded")

    # Load events
    df_events = pd.read_csv('ai/datasets/events.csv')
    cur.execute("TRUNCATE event_schema.events RESTART IDENTITY CASCADE;")
    for _, row in df_events.iterrows():
        cur.execute("INSERT INTO event_schema.events (id, event_name, location, date) VALUES (%s, %s, %s, %s)",
                    (row['id'], row['event_name'], row['location'], row['date']))
    print("Events loaded")

    cur.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
