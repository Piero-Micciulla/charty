# TOP 40 API

The Top 40 API is a REST API that makes Top 40 lists available in JSON format in a structured way. The API accepts parameters to indicate which of the four types of lists should be displayed (Top 40, Tipparade, Album Top 40 or Film Top 40). In addition, it can be indicated for which week and year the list is requested. All lists from the Top 40 archive are available via the API.

The public API can be called by means of a GET request via the URL:

http://www.top40.nl/app_api/top40_json/{listType}

The parameter here is list type, which can be used to specify the type of list. This parameter can be one of the following values:

1 = Top 40
2 = Album Top 40
3 = Tip Parade
4 = Movie Top 40 (no longer updated but interesting nonetheless)


By default, the most recent published list is always shown. In short, to request the most recent Tipparade, the following HTTP GET request must be made:


http://www.top40.nl/app_api/top40_json/3

There are even more lists to use:


https://www.top40.nl/app_api/charttypes_json


# Optional parameters

To retrieve a list of a specific week, standard GET parameters can be provided in the URL. These are the optional additional variables:


Key: week 
Value: (integer) a valid week number

Key: year
Value: (integer) a valid year (between 1965 and the current year, format YYYY)


So to retrieve the Top 40 list of week 14 of the year 2003, the complete URL is as follows:


http://www.top40.nl/app_api/top40_json/3?week=14&year=2003


Please note that both a week and year need to be always provided together, it is not possible to request a list with only a week number or year.
