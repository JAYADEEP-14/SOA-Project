import os

layout_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components\layout'
dashboard_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components\dashboard'

# Fix layouts
for f in os.listdir(layout_dir):
    if f.endswith('Layout.jsx'):
        path = os.path.join(layout_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        content = content.replace("import Header from './Header';", "import Topbar from './Topbar';")
        content = content.replace("<Header user={user} />", "<Topbar user={user} />")
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)

# Fix dashboards
dashboards = ['StudentDashboard.jsx', 'FacultyDashboard.jsx', 'HodDashboard.jsx', 'ParentDashboard.jsx']
for d in dashboards:
    path = os.path.join(dashboard_dir, d)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()
        content = content.replace("import './Dashboard.css';", "import './StudentDashboard.css';")
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)

admin_path = os.path.join(dashboard_dir, 'AdminCommandCenter.jsx')
if os.path.exists(admin_path):
    with open(admin_path, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace("import './Dashboard.css';", "import './AdminCommandCenter.css';")
    with open(admin_path, 'w', encoding='utf-8') as file:
        file.write(content)

print("Imports fixed.")
