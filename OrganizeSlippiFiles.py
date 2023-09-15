import os
import shutil

directory = os.path.dirname(os.path.abspath(__file__))
slippi_folder = os.path.join(directory, 'SlippiFiles')
os.chdir(slippi_folder)

for root, dirs, files in os.walk('.'):
    target_folder = ".\KillRoy"
    for filename in files:
        file_path = os.path.join(root, filename)
        print(file_path)
        print(target_folder)
        shutil.move(file_path, target_folder)
