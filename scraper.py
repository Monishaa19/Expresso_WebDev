from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

# Setup WebDriver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

# URL of the Lonely Planet page (for example Paris)
url = 'https://www.lonelyplanet.com/france/paris'

# Open the page
driver.get(url)

# Wait for the page to load completely
try:
    WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.TAG_NAME, 'article')))  # Wait for attraction items to load
    print("Page loaded successfully!")
except Exception as e:
    print(f"Error: {e}")
    driver.quit()
    exit()

# Function to scrape the data from a page
def scrape_page():
    tourist_places = []

    # Get all tourist places elements
    places = driver.find_elements(By.TAG_NAME, 'article')  # Locate all article sections containing tourist places

    print(f"Found {len(places)} tourist places on the current page.")

    for place in places:
        try:
            # Extract necessary information
            name = place.find_element(By.CSS_SELECTOR, 'h3').text  # Using h3 for the name of the place
            description = place.find_element(By.CSS_SELECTOR, 'p').text  # Using p for a brief description
            location = place.find_element(By.CSS_SELECTOR, 'div.location').text  # Assuming there's a location div

            tourist_places.append({
                "name": name,
                "description": description,
                "category": "Attraction",  # Category of the place
                "location": location
            })
        except Exception as e:
            print(f"Error extracting details for a place: {e}")
    
    return tourist_places

# Scrape the first page
places_data = scrape_page()

# Debug print: Check the extracted data
print(f"Extracted data: {places_data}")

# Save data to JSON file
if places_data:
    with open("tourist_places.json", "w", encoding="utf-8") as f:
        json.dump(places_data, f, ensure_ascii=False, indent=4)
    print("Data has been saved to tourist_places.json")
else:
    print("No data found to save!")

# Close the browser
driver.quit()
