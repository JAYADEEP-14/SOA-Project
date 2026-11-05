import json
import os
import re

log_path = r'C:\Users\krish\.gemini\antigravity-ide\brain\91fd7bcd-fb48-4d18-8492-c17556d5f783\.system_generated\logs\transcript_full.jsonl'
with open(log_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

last_user_msg = ''
for line in reversed(lines):
    data = json.loads(line)
    if data.get('type') == 'USER_INPUT':
        last_user_msg = data.get('content', '')
        break

print("Length of last user msg:", len(last_user_msg))

content = last_user_msg.split('</ADDITIONAL_METADATA>')[-1].strip()
print("Length of content:", len(content))

headers = ['student_id,attendance_rate', 'id,room_number', 'id,course_code', 'id,student_id,course_id', 'id,event_name']
files = ['student_risk.csv', 'rooms.csv', 'courses.csv', 'attendance.csv', 'events.csv']

blocks = re.split(r'(?=(?:' + '|'.join([re.escape(h) for h in headers]) + r'))', content)

out_dir = r'c:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\ai\datasets'
os.makedirs(out_dir, exist_ok=True)

for block in blocks:
    if not block.strip(): continue
    for h, fn in zip(headers, files):
        if block.startswith(h):
            with open(os.path.join(out_dir, fn), 'w', encoding='utf-8') as f:
                f.write(block.strip())
            print(f'Saved {fn}')
