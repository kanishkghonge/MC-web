import os

directory = r"c:\Users\kanis\Desktop\Main\GitHub\MC-web"

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".html") or file.endswith(".js"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()

            new_content = content
            # Replacements
            new_content = new_content.replace(">Billing & Analytics<", ">ReceptionMate<")
            new_content = new_content.replace("Billing and Analytics", "ReceptionMate")
            new_content = new_content.replace("Billing & Analytics", "ReceptionMate")
            new_content = new_content.replace(">Billing<", ">ReceptionMate<")
            new_content = new_content.replace("MC Billing", "ReceptionMate")
            new_content = new_content.replace("MedCortico Billing", "ReceptionMate")
            new_content = new_content.replace("MedCortico Billing & Analytics", "ReceptionMate")
            new_content = new_content.replace("MedCortico ReceptionMate", "ReceptionMate")
            new_content = new_content.replace("ReceptionMate software", "ReceptionMate")
            # The URL to replace the name, but not breaking the actual URL if it exists
            
            if new_content != content:
                print(f"Updated {path}")
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
