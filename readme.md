Objective
XharkTank is a panel of potential investors, termed as "Sharks", who listen to entrepreneurs pitch ideas for a business or product they wish to develop. These self-made multi-millionaires judge the business concepts and products pitched and then decide whether to invest their own money to help market and mentor each contestant.

This is a project for Backend of XharkTank where budding entrepreneurs can pitch ideas for a business or product they wish to develop by providing their name, title & idea for the business, the investment amount they expect to be fulfilled, and the percentage of equity they are ready to shed away to the potential investors. Investors must be able to retrieve the list of all pitches and share their feedback/comments with a counter offer as per their interests.

API 's

Endpoint to post a pitch to the backend
curl --location --request POST 'http://<Server_URL>/pitches' \

--header 'Content-Type: application/json' \

--data-raw '{
"entrepreneur": "Ashok kumar",
"pitchTitle" : "Crio.Do - Work-experience based learning programs for developers",
"pitchIdea" : "Build professional projects like the top 1% developers. Master the latest full stack and backend tech with real work-ex. Crack developer jobs at the best tech companies.",
"askAmount": 10000000.25,
"equity" : 12.5
}'



Endpoint to make a counter offer for a pitch to the backend
curl --location --request POST 'http://<Server_URL>/pitches/1/makeOffer' \

--header 'Content-Type: application/json' \
--data-raw '{
"investor": "Anupam Mittal",
"amount" : 10000000.56,
"equity" : 20.2,
"comment": "A new concept in the ed-tech market. I can relate with the importance of the Learn By Doing philosophy. Keep up the Good Work! Definitely interested to work with you to scale the vision of the company!"
}'


Endpoint to fetch the all the pitches in the reverse chronological order ( i.e. last created one first ) from the backend
curl --location --request GET 'http://<Server_URL>/pitches'


Endpoint to specify a particular id (identifying the pitch) to fetch a single Pitch.
url --location --request GET 'http://<Server_URL>/pitches/2'