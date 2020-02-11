# 361_se1_agile_project
We are using Reactjs library to develop our web app.

## File Structure
- I think component files are created as Pascal or Upper Camel Case. e.g. `ThisComponentName.js`
- Take a look at the current structure. I'm not 100% that this is the best filing approach, but it seems a good idea to create components in their grouping, then we import them into `App.js`. `App.js` is our main js file that will run our app. Call the necessary files, etc.
- Let me know if you have alternative ideas :)

#### Run App 
`npm start` is used during development to see your changes and such. It will auto-load your changes (thank goodness). And, It should automatically open the app in your defualt browser. 

Note: It might take a while to load.


#### Deploy App
`npm run build` will create an optimized build of your app in the "build" folder. This will be used at end when we're done, or if we want to test a version.


#### Notes
- In index.js, I changed: `serviceWorker.register()` (it was `.unregister()` before) so our app loads faster offline. Really only matters if you are going to `npm start` your stuff a lot. But you shouldn't need to.


