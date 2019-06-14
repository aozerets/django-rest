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
Available urls:<br>
"", "/api/v1/users/"         -  POST<br>
"/api/v1/profiles/"          -  admin only GET, POST<br>
"/api/v1/profiles/<int:pk>"  -  admin only GET, DELETE, PUT<br>
"/api/v1/programs/"          -  GET, POST<br>
"/api/v1/programs/<int:pk>"  -  GET, DELETE, PUT<br>
"/api/v1/lessons/"           -  GET, POST<br>
"/api/v1/lessons/<int:pk>"   -  GET, DELETE, PUT<br>
"/api/v1/exercises/"         -  GET, POST<br>
"/api/v1/exercises/<int:pk>" -  GET, DELETE, PUT<br>
"<page>/"                     -  redirect to "/api/v1/users/"<br>