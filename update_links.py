import os
import glob
import re

html_files = glob.glob('**/*.html', recursive=True)
print(f"Found {len(html_files)} html files")

count = 0
for filepath in html_files:
    if 'bitrix.html' in filepath or 'brochure-viewer' in filepath:
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '<!-- Meet Us Dropdown -->' not in content:
        continue
        
    # Check if placement menu is already added
    if '>Placement</a>' in content and '<!-- Meet Us Dropdown -->' in content:
        # Check if placement is right before meet us
        idx1 = content.find('>Placement</a>')
        idx2 = content.find('<!-- Meet Us Dropdown -->')
        if idx2 > idx1 and idx2 - idx1 < 200: # if close enough, it's already added
            if "index.html" in filepath: # index.html was added
                continue

    new_content = content
    
    # Desktop
    # we need to be careful not to add it multiple times
    if 'class="text-gray-700 hover:text-primary-600 font-medium">Placement</a>' not in new_content:
        new_content = re.sub(
            r'([ \t]*)<!-- Meet Us Dropdown -->',
            r'\1<a href="https://iipc.snsgroups.com/" target="_blank" class="text-gray-700 hover:text-primary-600 font-medium">Placement</a>\n\n\1<!-- Meet Us Dropdown -->',
            new_content
        )
    
    # Mobile
    if 'class="block text-gray-700 hover:text-primary-600 font-medium py-2">Placement</a>' not in new_content:
        new_content = re.sub(
            r'([ \t]*)<!-- Meet Us -->',
            r'\1<a href="https://iipc.snsgroups.com/" target="_blank" class="block text-gray-700 hover:text-primary-600 font-medium py-2">Placement</a>\n\n\1<!-- Meet Us -->',
            new_content
        )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        
print(f"Updated {count} files.")
