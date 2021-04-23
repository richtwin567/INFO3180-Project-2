release: python backend/manage.py db upgrade --directory backend/migrations
web: gunicorn -w 4 -b "0.0.0.0:$PORT" app:backend/app