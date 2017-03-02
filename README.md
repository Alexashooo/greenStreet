# Green street

Green street is a web application which should serve as a tool for transportation/urban planning. **The application is made with Rails and Angular 1, and
it is still in development.**

The idea is not new but the goal is to make some kind of "localization" for Scandinavian market, with more suitable elements and to
add some extra functionality. The application is gonna a be free for all users.

![street_profile_landing](https://cloud.githubusercontent.com/assets/13839425/23521488/85fefb68-ff7f-11e6-81c0-b95f86fd4a98.gif)


#Installation

Start by cloning the repository:

```
$ git clone https://github.com/Alexashooo/greenStreet.git
```
The application using **Angular Rails Templates** to add HTML to $templateCache by using using this gem:

```
gem 'angular-rails-templates'
```

Other important gems added to application:

```
gem 'angularjs-rails'
gem 'bower-rails'
gem 'jquery-ui-rails'
```

#Run Green street

Although front-end is coded in Angular, the application running in Rails.

Run the application by using

```
rails s
```
