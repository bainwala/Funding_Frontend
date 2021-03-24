# README #

Welcome to the Funding Resource Project Front End. The App is hosted on heroku here: `https://cls-funding-resources.herokuapp.com/`. 

## Getting the App working locally ##

I'm going to give a broad list of steps.
1. Install Node.js from here `https://nodejs.org/en/download/` and install npm.
2. Clone the app from git
    - something like ```git clone <url of repo here>```
3. run `npm start` in the app directory

Note: The app right now heavily relies on cookie authentication, so something like incognito mode will stop the website from remembering your auth. Also the cookies seem to hold best in chrome.

## Future Tasks ##

- The table UI is nice because it has built in filter and sorting. But it could be better. Why not write a custom <tr> tag that shows the most important columns and then links to another page/modal with all of the information about the resource? (We advocate for pagination in the frontend. Backend searching in rails is pretty clunky in our opinion with a gem like pgsearch)
- So authentication. We are using a cookie approach. I think a JWT token approach would fix the majority of these problems we are having. Try this link for how to do this `https://fusionauth.io/blog/2020/06/11/building-protected-api-with-rails-and-jwt/`. Or simply improve the cookie approach we are already using. (see backend repo for suggestions)
- Some pages probably need to redesigned to be more user friendly / functional, both the add resource and admin pages jump to mind.
- Give the whole website a more consistent UI (<- CSS).
- Expand the admin page to also include the ability to make other users admins. (Backend team will needs to things to support this)
- Whatever else you see fit, its your project after all :)

## Musings ##

React is a pretty huge framework to begin with from scratch. That being said there are many awesome YouTube tutorials like `https://www.youtube.com/watch?v=Ke90Tje7VS0` to learn with. Prior experience with javascript/html will also come in handy if you choose to work on this project. Our group had a mix of very experienced React developers and complete novices, but by the end everyone was contributing (pair programming is your friend in this regard). 

Why should you work on this project? 
1.) React is a very very hire-able skill. Intern/job searchs are easier with this framework under your belt.
2.) Babel ensures compatibility with older browsers (I'm looking at you Internet Explorer) which no longer support new versions of JavaScript.
3.) React has alot of plugin support with good documentation. (For example we used material-ui)

Good luck!!
