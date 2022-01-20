# Adiscussion-forum
Created a basic model of discussion forum.
Built with <b>Dango REST Framework</b> and <b>ReactJS</b>

### Run Backend :
1. Install required dependencies (make sure you have installed python and pip) : 
     
       pip install -r requirements.txt
   It is recommended to install packages in virtual environment. <a href="https://towardsdatascience.com/virtual-environments-104c62d48c54#:~:text=Well%2C%20a%20virtual%20environment%20is%20just%20a%20directory,site%20packages%20installed%20inside%20the%20given%20virtual%20environment.">Learn more</a>
   
2. Run migration and migrate command in Root dir of project

       python manage.py makemigrations
   then
   
       python manage.py migrate
3. Run Server 
       
       python manage.py runserver
       
### Run Frontend :
1. Change dir to `./frontend` and run command in terminal (make sure you have installed node):
   
       npm install
2. Start Server by running command in same dir (backend server should be running before interact with ui) :
      
       npm start

## Features 
 1. Login and Signup with token authentication
 2. Post Create
 3. Save other's post
 4. comment under post
 5. view others profile
 6. filter post with tag
 7. Getting Coins on every activity
