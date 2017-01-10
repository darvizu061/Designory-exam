## Exam Documentation 
###### By Danny Arvizu
##### Overview  
Below you will find a numbered outline of the steps I took to create index.html which mirrors the PDF file that was provided by Designory. Each step is followed by a sub-bullet-point explaning why that step was taken. If you have any questions regarding my apprach taken to solve this challange, please let me know. 

##### My Thinking Process 
1. Identify the skeletal partials 
    * When receiving a mock-up or wireframe of a website, the first thing I do before actually coding is to identify the partials. Partials can be defined as the containers (or divs) that stretch across the entire screen width and typically contain other html elements nested inside of them. By doing this, we are breaking down the wireframe into smaller parts which allows us to focus on coding them one at a time rather than coding the whole wireframe in one go. This "partial-by-partial" method also allows us to identify generic partials that could possibly be used elsewhere in future versions of the website. I save these generic partials as theme containers which you can find in `styles/main.scss`. 
2. Architecture first, aesthetics second
    * After disecting the site into partials, I now begin to code the skeletal structure of the first partial and then apply the partial's colors, images, and fancy fonts.    
3. Keep an eye out for theme styles 
    * While coding the partials, I always like to break my css into reuseable classes when possible. This helps keep my code as D.R.Y as possible. Note that my `styles/main.scss` file is seperated and lists my reusable theme classes first.
4. Apply  media queries
    * Once I've finished creating a webpage that mirrors the mockup, I then begin to slowly collapse the window and apply media queries to the partials where needed. 
