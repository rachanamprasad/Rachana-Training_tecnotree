# weather program

# makes HTTP requests
import requests

# function to get weather data
def get_weather_data(city):
    api_key = '52da993b14bf13d19d1facc25fd0bca6'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    weather = data['weather'][0]['description']
    temperature = data['main']['temp']
    return weather, temperature

# main function
def main():
    city = input("Enter a city name: ")
    weather, temperature = get_weather_data(city) 
    print("Condition:",weather)
    print("Temperature: ",temperature)

main()
