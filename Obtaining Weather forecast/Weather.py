import requests
from bs4 import BeautifulSoup

webpage = requests.get('https://www.google.co.uk/search?q=weather+forecast&oq=weather+forecast&aqs=chrome..69i57j35i39j0l4.4470j0j7&sourceid=chrome&ie=UTF-8')

weathersource = BeautifulSoup(webpage.text, 'html.parser')

temperature = weathersource.select('span .wob_t')
sky = weathersource.select("span '.vk_gy vk_sh'")
percipitation = weathersource.select('span #wob_pp')
windSpeed = weathersource.select('span #wob_ws')
humidity = weathersource.select('span #wob_hm')

print(temperature.text)
print(sky.text)
print(percipitation.text)
print(windSpeed.text)
print(humidity.text)
