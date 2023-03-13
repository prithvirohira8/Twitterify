from setups.tweepy_cred import api

def get_user(username):
    return api.get_user(screen_name=username)

def search_tweets(q, count):
    return api.search_tweets(q=q, lang='en', count=count, tweet_mode="extended")

def search_trending_tweets(q, geocode, count):
    return api.search_tweets(q=q, lang='en', geocode=geocode, count=count, tweet_mode='extended')

def user_timeline(user_id, username, count):
    return api.user_timeline(user_id=user_id, screen_name=username, count=count, tweet_mode="extended")

def closest_trends(latitude, longitude):
    return api.closest_trends(latitude, longitude)

def get_place_trends(woeid):
    return api.get_place_trends(woeid)