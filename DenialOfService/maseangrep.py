import threading
import requests
import time

# Flaggvariabel for å kontrollere avslutning av trådane
stop_threads = False

def send_request():
    while not stop_threads:
        response = requests.get('http://localhost:3000')
        print(response.status_code)
        time.sleep(1)  # Sov i 1 sekund mellom kvar førespurnad

# Opprett og start trådar
threads = []
for i in range(1):  # Antall trådar som sender førespurnader
    thread = threading.Thread(target=send_request)
    thread.start()
    threads.append(thread)

# Vent på at brukaren skal trykke på Enter for å avslutte
input("Trykk Enter for å avslutte...\n")
stop_threads = True

# Vent på at alle trådane skal avslutte
for thread in threads:
    thread.join()

print("Programmet er avslutta.")