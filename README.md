# Angular2 HTTP, Promises and Observables

## Call a HTTP REST Service

1. Add APIEndPoint =  'http://localhost:3000/'
2. Inject http
3. GetMessages now will return a promise from http.GetMessages
4. PostMessages will use http.post 
5. Declare the headers 
  * private headers = new Headers({'Content-Type': 'application/json'});
6.  Modified window-chat component to use getMessages with promises


