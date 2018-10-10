# express-partner-lab

Lab - Delete/Update

Morning

Come up with a CRUDable model (fruit, human, robot, etc)

Set up a repo.

Create an express app. .gitignore your node_modules. Commit.

Create an array of your CRUDable objects. Commit.

Create an index route that displays all your objects. Commit.

In the index route, create a form which will make a DELETE request to the server. Commit.
Create a DELETE route handler that will remove the specified object from the array and redirect to the index page. Commit.

Afternoon

Expand the morning's app to have the following:

An edit route/page that populates the forms with the data from the server. Commit.

A link to the edit route on the index page. Commit.

A PUT route that will change the element of your objects array, as specified by the index in the URL, to req.body 
  this page should redirect back to the index route, once this is completed 
  the form on the edit page should make a PUT request to this route

Did you commit?

Hungry for more?

Create a show page/route with links to it from the index page

The show page should have a link to the edit page

The edit page should have a delete button which will delete the specified item

Into back end? Research routing on the documentation page for Express Router and see if you can chain some routes or try something else you see there.

Into the "front end" of the back end? Research EJS Partials (we'll teach you them later, so you'd be on your own for now!) and see if you can add a header and/or footer to your EJS pages. 

Also:
You're committing right?
