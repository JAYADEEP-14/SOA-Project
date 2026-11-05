import os
ign = {'.git', 'node_modules', 'target', 'venv', '__pycache__', 'dist', '.pytest_cache', 'apache-maven-3.9.9'}
def print_tree(startpath):
    for root, dirs, files in os.walk(startpath):
        dirs[:] = [d for d in dirs if d not in ign]
        level = root.replace(startpath, '').count(os.sep)
        if level > 4: continue
        indent = ' ' * 4 * (level)
        print(f'{indent}{os.path.basename(root)}/')
        subindent = ' ' * 4 * (level + 1)
        if level < 4:
            for f in files: print(f'{subindent}{f}')
print_tree('.')
