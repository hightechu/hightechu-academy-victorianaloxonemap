# Hightechu Academy Group Project :metal:

HighTechU Group Project

## VICTORIA NALOXONE KIT MAP

### Website :star:

[Live Demo](https://victoria-naloxone-map.herokuapp.com)

### Mini Pitch 

A map that guides bystanders at the scene of an overdose to the nearest naloxone kit, and walks them through what to do.

### Problem Statment :mega:

The city is not equiped to deal with the high number of overdoses that require emergency attention.

### User Stories :snowboarder:

As a user, I want an easy direct homepage with an emergency button for crisis situations that quickly walks you through what to do, so that I won’t waste time in a crisis situation and can act accordingly. 

As a user, I want an auto call option to emergency services, so I don’t have to leave the page and can simply follow the procedure on the page.  

As an admin, I want the ability to add locations and approve users location imputs, so I can add and update locations on the map.

As a user, I want the page to automatically take my location, so I do not have to waste time manually imputing the address.

As a user, I want to be directed to the nearest kit with a clear route and time, so that I can quickly get the kit without worrying about the route. 

As an admin, I want the ability to alter the statuses of kits after they’ve been used/replaced/moved, to keep the public informed with up-to date information. 

As a user, I want a well designed interactive map, so I can see the details of my route and where I need to turn. 

As a user, I want a good FAQ section, to be informed and have a space to ask questions.  

### Website Pages 

* Landing Page:
    * `index.html`
* Emergency:
    * `step1.html`
    * `Step2.html`
    * `map.html`
    * `Step4.html`
* Register:
    * `add-kit.html`
* FAQ:
    * `faq.html`

### Promo 

## Getting Started :thinking:

### Requirements :dog:

* [git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com) (**Installed with Node.js**)
* [LoopBack CLI Tool](https://loopback.io/lb3/getting-started)

### Obtaining the Project :cat:

1. Open the terminal

2. Change into your working directory

```
cd working/directory
```

3. Clone the repository 

```
git clone URL
```

4. Change into the repository

```
cd REPO_NAME
```

### Running the Application :deer:

1. Install the node_modules

```
npm install
```

2. Run the application locally

```
node .
```

3. Head over to [http://0.0.0.0:3000](http://0.0.0.0:3000) and [http://0.0.0.0:3000/explorer](http://0.0.0.0:3000/explorer) in the browser of your choice.

### Adding Custom Models :ocean:

1. Add Custom Models

```
lb model
```

2. Follow command prompts

## Deploying :bear:

We are using Heroku to host our application. The following steps should only be done once. After setting up the application to deploy with GitHub, everytime you push to the master branch you will re-deploy your application.

1. Log into [Heroku](https://id.heroku.com/login)

1. Create a new app

1. Setup `Deploy with GitHub` (Deploy -> GitHub -> Select Repository)

1. Setup a `mongodb datasource for loopback` using [mLab MongoDB addon](https://elements.heroku.com/addons/mongolab)

1. Replace the `server/datasources.json` with the following:

```json
{
  "db": {
    "db": {
      "url": "mongodb://URL",
      "name": "mongoDS",
      "useNewUrlParser": true,
      "connector": "mongodb"
    }
  }
}
```

**Make sure to replace `URL` with the URL the Heroku mLab MongoDB addon provides.**

## Resources :blue_book:

* [GitHub](https://github.com)
* [GitHub Help](https://help.github.com/)
* [GitHub Markdown Help](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
* [GIT Command Line Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* [Heroku](https://www.heroku.com)
* [Heroku Documentation](https://devcenter.heroku.com/categories/reference)
* [Loopback](http://loopback.io)
* [Loopback Documentation](https://loopback.io/lb3/getting-started)

## Support :grey_question:

For support, visit the [HighTechU Academy Slack]().
