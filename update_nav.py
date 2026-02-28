import os
import re

import glob

# directories to check
basedir = r"C:\Users\kanis\Desktop\Main\GitHub\MC-web"

html_files = []
for root, dirs, files in os.walk(basedir):
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

for fpath in html_files:
    with open(fpath, "r", encoding="utf-8") as file:
        content = file.read()
    
    new_content = content
    
    # 1. Remove navbar and footer quick link for Calculator
    new_content = re.sub(r'<li>\s*<a href="(?:../)*pages/clinic-calculator\.html"[^>]*>Calculator</a>\s*</li>', '', new_content)
    new_content = re.sub(r'<li>\s*<a href="(?:../)*clinic-calculator\.html"[^>]*>Calculator</a>\s*</li>', '', new_content)
    # Also without trailing /pages or anything, just clinic-calculator
    
    # Let's use a simpler regex
    new_content = re.sub(r'<li>\s*<a href="[^"]*clinic-calculator\.html"(?: class="[^"]*")?>\s*Calculator\s*</a>\s*</li>\n?', '', new_content)

    # 2. Remove footer products link for Clinic Calculator
    new_content = re.sub(r'<li>\s*<a href="[^"]*clinic-calculator\.html"[^>]*>\s*Clinic Calculator\s*</a>\s*</li>\n?', '', new_content)

    # 3. Change "Blogs" to "Resources" in nav and quick links
    # but be careful to preserve the class="active" if it exists.
    # match <li><a href="something/blogs.html" class="active">Blogs</a></li>
    
    def repl_blogs(m):
        return m.group(0).replace('>Blogs</a>', '>Resources</a>').replace('> Blogs</a>', '> Resources</a>')
    
    new_content = re.sub(r'<li>\s*<a href="[^"]*blogs\.html"[^>]*>\s*Blogs\s*</a>\s*</li>', repl_blogs, new_content)

    if new_content != content:
        with open(fpath, "w", encoding="utf-8") as file:
            file.write(new_content)
        print("Updated:", fpath)

