- [ ] Mention two parts of Express that you learned about this week.

Routes and Middleware

- [ ] Describe Middleware?

It's a function that takes in three arguements (req, res, and next). They can excute code and make changes to the request and response and then pass that on to the next middleware.

They are used in between the server recieving the request and the server handing the response to the client.

- [ ] Describe a Resource?

A resource is what is being returned to the client. It's the data being held by your server.

- [ ] What can the API return to help clients know if a request was successful?

APIs can return status codes and messages to let you know if a request was successful.

- [ ] How can we partition our application into sub-applications?

Different files for different routes make it easier to navigate your code. Your index file is what sets your server to listen, your server brings in your routes, and your routes can cover the different endpoints you need to handle.

Deployed at:

https://wepapi-sprint-ami-scott.herokuapp.com/

https://wepapi-sprint-ami-scott.herokuapp.com/api/projects

https://wepapi-sprint-ami-scott.herokuapp.com/api/actions