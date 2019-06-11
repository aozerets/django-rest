### Requirement
The project requires Django==2.2.1 and django-debug-toolbar==1.11 package installed.<br>
U can use [requirements.txt](/src/requirements.txt) for easy install.<br>
```
>>>pip install -r requirements.txt
```
### Django App <br>
##### Usage and requirements
To run App u must go to the folder ".../src/courses" and execute the following commands:.<br>
```
/path/to/src/courses>>>python manage.py makemigrations
/path/to/src/courses>>>python manage.py migrate
/path/to/src/courses>>>python manage.py createsuperuser
/path/to/src/courses>>>python manage.py runserver
```
After successfully launching your app, u will see something like this in your console:<br>
![running](https://github.com/django-rest/blob/master/share/images/courses_init.jpg)<br>
Now U are able to see application pages in browser by typing hostname:port(localhost:8080) and moving by links.