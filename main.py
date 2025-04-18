import os
import eel

eel.init("www")

# Start the Eel application
eel.start('index.html', mode='edge', host='localhost', port=8000, block=False)

# Open Microsoft Edge in app mode
os.system('start msedge.exe --app="http://localhost:8000/index.html"')

# Keep the script running
eel.sleep(10**6)