![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# POKE EXPRESS

Make a Pokemon app that displays data inside server-side rendered views.

## App

Create a full CRUD app on Pokemon.


## Day 1

### Set up your server

- Create an express app called `pokemon-app` that listens on port 3000. Ensure that you have installed the necessary npm packages to run an express server and render templates. You can refer back to old code and lessons, but try to recall the necessary steps before checking in old code. Be ok with making mistakes!

<hr>
 &#x1F534; The commit message should read: <br>
 "Commit 1 - My server is set up and running"
<hr>


### Set up your _'database'_

- Create a file called `server.js`
- Inside of this file,
	- Import express library
	- Run the app on port `3000`
	- Add the following array of pokemon objects.

This will be your database for this week.

```javascript
const pokemon = [
  {
    name: "Bulbasaur",
    img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    name: "Ivysaur",
    img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    name: "Venusaur",
    img: "http://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    name: "Charmander",
    img: "http://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    name: "Charizard",
    img: "http://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    name: "Squirtle",
    img: "http://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    name: "Wartortle",
    img: "http://img.pokemondb.net/artwork/wartortle.jpg"
  }
];

```
<!--- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`-->

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Connected my database, can see json in the browser"
<hr>

### Create GET Routes

- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser.
- create another get route `/pokemon/:index` that will return only one pokemon on that index. For example, `/pokemon/0` should display the 0 indexed pokemon.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - added GET APIs"
<hr>

## Day 2

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve an `index.ejs` file that displays a list of all the pokemon. Put the pokemon inside a `<ul>` with class name `pokemon`. Use a `for` loop to display all pokemon.

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 4 - index.ejs view rendered at pokemon route"
<hr>


### Set up your show route

- Inside your `server.js`, use already created get route `/pokemon/:index`
- Update the API such that it serves a template called `show.ejs` which displays the information of a specific pokemon according to their index in the pokemon array.
- You may want to look up how to access route parameters in express.

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 5 - show view shows pokemon details "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
 - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
 - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 6 - added dynamic anchor tags to index.ejs "
<hr>


### Complete CRUD functionality

Set up routes and templates to allow for full CRUD functionality.

- Users should be able to insert a new pokemon into the array using a form on a `new.ejs` page. Creation should be handled via a POST route to the `/pokemon` route.
- Users should be able to edit an individual pokemon on an `edit.ejs` page accessed from the  `/pokemon/:index/edit` route. The updating should be handled via a POST request to the `/pokemon/:index` route.
- Users should be able to delete a pokemon using a button provided on the show and index pages.

### Bonus

**Stretch step, not required**

Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.

Choose a google font and add it to your html and inside your `<style>` tag

<!--
## Day 3

Today you will add controller and router to the existing pokemon app to make it MVC compliant.

### Create Controller

- Create `controllers` folder to the app
- Add `index.js` and `pokemon.js` to it
- Import and export the necessary files, folders and/or libraries

### Create Router
- Create `routes` folder in the app
- Add `index.js` and `pokemon.js` to it
- Import and export the necessary files, folders and/or libraries.

### Refactor `server.js`
- Refactor `server.js` and move all the APIs into the controller and routes.
- Use Express middleware to call the router
- Remove all the APIs once above is done.

## Day 4

Today we added `Player` model to our pokemon app, just like that you now have to add `Player` model to this app.

These are few required functionality that must be implemented for a user.

- Add Signup and Login functionality.
- Show Player's profile after signup and login
- Player can edit own profile
- A player can also delete itself


## Weekend

Before starting with this, make sure that your app meets all the above requirements. It performs all the functionalities that you been asked to do so far.

### Style your app, step 1: static

 - Set up your app to be able to use CSS like we did in class.  Use a dummy (i.e. just set a background color) CSS declaration.  Remember: you need express.static() middleware. (also remember that you don't need to npm install anything for this particular middleware because its part of express. But for others you do.)

<hr>
&#x1F534; The commit message should read: <br>
  "set up serving of static files so we can add CSS"
<hr>

### Style your app

<hr>
&#x1F534; The commit message should read: <br>
  "Commit - The app is styled"
<hr>

### Bonus

Treat this as your own app, except for what's been asked above,

- Add other RESTful routes for either `Player` or `Pokemon` model.
- Add other views to your app.
- Redirect to different pages.
- Style it more.

Let your imagination run, see what more you can do with this app.

## Day 5

So far you have the app with the static data but you don't have a database yet to persist it in the database. Just like today, you will persist `pokemon` model into the Postgres database.

1. Make sure to install the libraries locally in the `pokemon-app`,

	```
	npm install sequelize --save
	npm install pg --save
	```
2. After that run `sequelize init` in `pokemon-app` to create the desired folders.
3. Add required configuration in `config/config.json`

	```
	{
	  "development": {
	    "username": "postgres",
	    "password": "postgres",
	    "database": "pokemon_dev",
	    "host": "127.0.0.1",
	    "dialect": "postgres",
	    "operatorsAliases": false
	  }
	}
	```
4. Make sure to move any file other than `index.js` out of the `models` folder. The only file present in `models` folder should be `index.js`. Update the import paths of the files moved out of `index.js` in `controllers` folder.

### Create Pokemon Model

5. Generate `Pokemon` model using Sequelize CLI `model:generate` command and create all the fields you need with it.
6. Update the generated migrations file such that both `createdAt` and `updatedAt` fields have default values.

	```
	createdAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    }
	```
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Pokemon`, `sequelize seed:generate --name demo-pokemon`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed:all`
11. Confirm is psql,

	```
	psql -U postgres
	\c pokemon_dev
	\dt
	SELECT * FROM "Pokemons";
	```
12. Import `Pokemon` model in the `controllers/pokemon.js`

	```
	const Pokemon = require('../models').Pokemon;
	```
13. Now, update all the controller functions one by one with the `Pokemon` model. Be sure to test the app after each API is updated. You may have to update your views wherever needed with `pokemon.id` instead of using index.

### Create Player Model

5. Generate `Player` model using Sequelize CLI `model:generate` command and create all the fields you need with it.
6. Update the generated migrations file such that both `createdAt` and `updatedAt` fields have default values. Also, make `username` unique.

	```
	username: {       type: Sequelize.STRING,       unique: true    },
	createdAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    }
	```
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Player`, `sequelize seed:generate --name demo-player`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed --seed <xxxxxxxxx-demo-player.js>`
11. Confirm is psql,

	```
	psql -U postgres
	\c pokemon_dev
	\dt
	SELECT * FROM "Players";
	```
12. Import `Player` model in the `controllers/player.js`

	```
	const Player = require('../models').Player;
	```
13. Now, update all the controller functions one by one with the `Player` model. Be sure to test the app after each API is updated. You may have to update your views wherever needed with `player.id` instead of using the index.

## Day 6
Today you will work on building associations between different models. So far you have a `Pokemon` and `Player` model.

### Create Team Model

Let's create a new model `Team` first. The only field `Team` will have is `name` which will be a string.
 
5. Generate `Team ` model using Sequelize CLI `model:generate` command and create `name` field which will be a string.
6. Update the generated migrations file such that both `createdAt` and `updatedAt` fields have default values. Also, make `name` not null.

	```
	name: {       type: Sequelize.STRING,       allowNull: false    },
	createdAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    }
	```
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Team`, `sequelize seed:generate --name demo-team`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed --seed <xxxxxxxxx-demo-team.js>`
11. Confirm is psql,

	```
	psql -U postgres
	\c pokemon_dev
	\dt
	SELECT * FROM "Teams";
	```
### Add teamId to Player

Now that `Team` model has been created we can go ahead and add `teamId` column to `Players` table.

1. Create a migration file to add `teamId` to the `Players` table.

	```bash
		sequelize migration:generate --name add-teamId-to-players
	```
2. Inside the newly created migration file, add code to add the column to the table.
	
	```bash
	  up: (queryInterface, Sequelize) => {
	    return queryInterface.addColumn('Players', 
	    'teamId', 
	    { 
	    	type: Sequelize.INTEGER 
	    });
	  },
	``` 
	
3. Run `sequelize db:migrate` to run the new migration file.
4. In the `models/player.js`, make sure to add the new column so that our app knows about it.
	
	
	```js
	const Player = sequelize.define('Player', {
	    name: DataTypes.STRING,
	    username: DataTypes.STRING,
	    password: DataTypes.STRING,
	    teamId: DataTypes.INTEGER
  	}, {});
 	```
5. Reseed the `seeders/<TIMESTAMP>-demo-player.js` with a some team ids. Make sure the teamIds you use exist in the `Teams` table.

```
	'use strict';	module.exports = {  up: (queryInterface, Sequelize) => {    return queryInterface.bulkInsert('Players', [      {        name:'Tony Stark',        username: 'ironman',        password: 'prettyawesome',        teamId: 1      },      {        name:'Clark Kent',        username: 'superman',        password: `canfly`,        teamId: 2      },      {        name:'Bruce Wayne',        username: 'batman',        password: 'hasgadgets',        teamId: 3      }    ])  },  down: (queryInterface, Sequelize) => {    	return queryInterface.bulkDelete('Players', null, {});  }};
```
	
6. Once the above changes our made, undo player seeded date `sequelize db:seed:undo --seed 20200608030632-demo-player.js`
7. After this, run `sequelize db:seed --seed xxxxxxxxx-demo-player.js` to reseed the `Players` data.


### hasMany Association

Now, you will build the association between `Team` and `Player`. A team can have multiple players whereas a Player can be part of one team. Team has one-to-many relationship with Player.

That means, **Team hasMany Players** and each **Player belongsTo one Team**. 

1. In the `models/player.js` file, add the association for an `Player.hasMany(models.Team)`.
	
	```
	Player.associate = function(models) {    	belongsTo(models.Team, { foreignKey: 'teamId' })  	};
	```
2. In the `models/team.js` file, add the association for an `Team.hasMany(models.Player)`.

	```
	Team.associate = function(models) {    	Team.hasMany(models.Player, { foreignKey: 'teamId' })  	};
	```
	
### Update Player Controller & View

1. `include: [Team]` in the Player to access team detail from the Player object.
2. `findAll()` teams in the controller which renders `profile.ejs`.
2. Display all teams in a dropdown on Player profile page for the player to select the team and edit the profile.

![](./images/edit-player.png)


### Create Join Table

Each `Player` can catch multiple pokemons and each `Pokemon` can be caught by multiple players. That means `Player` **has many-to-many relationship** with `Pokemon`.

1. Generate model for the join table, `sequelize model:create --name PlayerPokemon --attributes playerId:integer,pokemonId:integer`
2. Update the migration file
	
	```
	'use strict';module.exports = {  up: (queryInterface, Sequelize) => {    return queryInterface.createTable('PlayerPokemons', {      id: {        allowNull: false,        autoIncrement: true,        primaryKey: true,        type: Sequelize.INTEGER      },      playerId: {        type: Sequelize.INTEGER,        allowNull: false      },      pokemonId: {        type: Sequelize.INTEGER,        allowNull: false      },      createdAt: {        allowNull: false,        defaultValue: new Date(),        type: Sequelize.DATE      },      updatedAt: {        allowNull: false,        defaultValue: new Date(),        type: Sequelize.DATE      }    });  },  down: (queryInterface, Sequelize) => {    return queryInterface.dropTable('PlayerPokemons');  }};
	```
3. Run the migration `sequelize db:migrate`

### belongsToMany Association

Update `Pokemon` model

```
Pokemon.associate = function(models) {    Pokemon.belongsToMany(models.Player, {      through: 'PlayerPokemon',      foreignKey: 'pokemonId',      otherKey: 'playerId'    });};
```

Update `Player` model

```
Player.associate = function(models) {    Player.belongsTo(models.Team, { foreignKey: 'teamId' })    Player.belongsToMany(models.Pokemon, {      through: 'PlayerPokemon',      foreignKey: 'playerId',      otherKey: 'pokemonId'    });};
```	
-->

<!--## Day 5


## Hungry for more?

1. Style your application with flexbox, or [Bootstrap!](https://getbootstrap.com/docs/4.1/getting-started/introduction/), a CSS library created by Twitter to make using the [960px grid system](https://960.gs/demo.html) a little easier. Or there's a substantially more lightweight 960px-grid-system-based answer to Bootstrap called [Skeleton](http://getskeleton.com/). You could also jazz up your app by adding some hand-rolled flourishes with CSS animations, and/or some sweet client-side jQuery and/or ....??? u pick???.....!

2. Learn more about Pseudo Selectors to become a CSS Genius
  - [pseudo selector links](https://www.youtube.com/watch?v=YMZGPqNDn_s&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=17) ~ 5 minutes
  - [pseudo selector children](https://www.youtube.com/watch?v=tMCahu7H-fA&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=18) ~ 4 minutes
  - [pseudo selector n-th child](https://www.youtube.com/watch?v=yFmwjX9oGt8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=19) ~ 3 minutes
  - [pseudo selector sibling status and `not()`](https://www.youtube.com/watch?v=XyXUjEP9m-8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=20) ~ 5 minutes
  - a little glitchy, but [See just how deeply nerdy some people get about CSS](https://css-tricks.com/roman-empire-made-pure-css-connect-4-possible/)

3. Sign up for [Code Wars](https://www.codewars.com/) and/or [HackerRank](https://www.hackerrank.com/) and/or [Project Euler](https://projecteuler.net/) and try out a challenge (or a few!) in order to keep honing your JavaScript skills! These are the same types of questions people ask in interview coding challenges.


-->
