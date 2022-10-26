import requests
from bs4 import BeautifulSoup

webpage = requests.get('https://www.google.co.uk/search?q=weather+forecast&oq=weather+forecast&aqs=chrome..69i57j35i39j0l4.4470j0j7&sourceid=chrome&ie=UTF-8')

soup = BeautifulSoup(webpage.text, 'html.parser')


# temperature = weathersource.find('span, .wob_t')
# sky = weathersource.find("span '.vk_gy vk_sh'")
# percipitation = weathersource.find('span #wob_pp')
# windSpeed = weathersource.find('span #wob_ws')
# humidity = weathersource.find('span #wob_hm')

rain = soup.find(id="wob_pp")

print(rain)
