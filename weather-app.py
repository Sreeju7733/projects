# Simple code to fetch weather data using the OpenWeatherMap API
import requests

def get_weather(city):
    api_key = "your_api_key_here"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    data = response.json()
    return data

city = input("Enter a city: ")
weather_data = get_weather(city)
print("Weather in", city)
print("Temperature:", weather_data["main"]["temp"])
print("Description:", weather_data["weather"][0]["description"])
