# Simple code to generate short URLs
import shortuuid

def shorten_url(url):
    short_code = shortuuid.ShortUUID().random(length=6)
    short_url = f"short.ly/{short_code}"
    return short_url

long_url = input("Enter a long URL: ")
short_url = shorten_url(long_url)
print("Short URL:", short_url)
