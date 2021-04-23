release: cd backend && python manage.py db upgrade --directory migrations
web: cd backend && gunicorn -w 4 -b "0.0.0.0:$PORT" app:app