# ConTra COVID19
A simple sign in form for Contact Tracing by Jennifer Lusong using AngularJS.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Directory Layout
```
├── app                         --> all of the source files for the application
│   ├── bower_components        --> all external dependencies 
│   ├── images                  --> application wide images
│   ├── css                     --> application css (main.css produced from less, see below)
│   ├── images                  --> application pages including html template and js
│   ├── js                      --> application wide js code
│   │   └── components          --> js for components
│   └── partials                --> application wide partials (header, footer, nav, etc)
├── doc                         --> documentation
│   └── images
├── less                        --> styles in less
```

### Running the App in Development Mode

```
npm install
```

then

```
npm start
```
