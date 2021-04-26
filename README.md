# INFO3180-Project-2

Site URL - https://united-auto-sales.herokuapp.com/

# Running the application

Step 1:

Create a virtual Environment:

```
python -m venv venv
```

Step 2:
Install the pip packages:

```
pip3 install -r requirements.txt
```

Step 3:
Running the application

```
python3 server.py
```

Step 4:
Navigate to localhost:8080 to view the application

# Development

## Project Structure

The bulk of the source code can be found in the `app` directory and is split into multiple modules:

`database` - Houses the SQLAlchemy Database models

`frontend` - Houses the Vue.js frontend, and replaces the `static` directory conventionally used in flask

`routes` - Houses the routes for the application and is split up into `routes` and `auth_routes`

`helpers` - Houses functions that do not directly fall into any of the above categories, but are still necessary for the application

`config` - Houses the key configuration values for the application

## Accessing and modifying the frontend

The frontend of the application can be accessed in `app/frontend`, and uses Yarn as the package manager.

This approach was done to allow for the project to be easily developed with SFCS, since mos t of the group is familiar with SFCS from react, and to allow for it to be easily deployed on heroku with Flask.

When making changes to the vue frontend in `frontend/`, ensure that `yarn build` is run before pushing to the repository, otherwise the frontend will not be updated on heroku, as flask serves the vue.js frontend from the `dist/` directory in `frontend/`

However for development, the frontend can be run with `yarn serve`
