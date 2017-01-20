# HuddleUpChallenge

Thank you for your interest in working for HuddleUp!  We invite you to clone this repo and complete all three tasks.  To get started...

* Review the current React Native documentation for a good introduction to React Native (https://facebook.github.io/react-native/docs/getting-started.html).
* Download and install Exponent (www.getexponent.com).
* Clone this repo, and open it with the Exponent XDE.
* Sign up for API keys with both Pixabay and Nutritionix.
* Get started!

#Narrative  
In order to see every day cool images  
As a user  
I want to be able to see random images  

Scenario: User should be able to see a random image    
When the user returns to the image tab screen   
Then a random image retrieved from Pixabay API is displayed

#Narrative  
In order to eat healthy  
As a user  
I want to see the nutrition information for at least 51 items  
on the menu of my favorite fast food restaurant  

Scenario: User should be able to search for items for his food restaurant  
Given user is on nutrition tab screen  
when user types a food restaurant name  
when user clicks search button  
then search for nutrition information of at least 51 items by using Nutritionix API  

Scenario: User should be able to see result from his search  
Given user is on nutrition tab screen  
when results is retrieved from Nutritionix API    
then display the result in a ListView or error message if no result  

#Narrative  
In order to leave React Native feedback  
As a user  
I want to rate my experience and leave a comment  

Scenario: User should be able to leave feedback  
Given user is on feedback tab screen    
when user rates his experience  
when user leaves comment  
when user clicks button submit  
then send the feedback to dan@letshuddleup.com by using email API
