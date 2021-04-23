# INFO3180-Project-2

Site URL - https://united-auto-sales.herokuapp.com/

# Accessing and modifying the frontend

The frontend of the application can be accessed in `app/frontend`, and uses Yarn as the package manager.

This approach was done to allow for the project to be easily deployed on heroku with Flask.

When making changes to the frontend run `yarn build` to ensure that your changes will be updated when deployed, as the frontend is served by Flask instead of vue on heroku

However for development, the frontend can be run with `yarn serve`
