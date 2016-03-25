# nemo-poster

A nemo plugin for posting a form via webdriver

## Install

`npm install --save-dev nemo-poster`

## Usage

In your `config.json`:

```js
"plugins": {
	...
	"post": {
		"module": "nemo-poster"
	} 
	...
}
```

In your script:

```js
//nemo instantiated above

//I want to post a couple of name/value pairs to localhost
var action = 'http://localhost:8000';
var params = [{name: 'param1', value: 'val1'}, {name: 'param2', value: 'val2'}];

nemo.post(params, action); //returns a webdriver promise

//whatever comes next
```

## API

nemo-poster will add a `post` object to the `nemo` object. It is a function that you call with two arguments:

### params

Array of objects. Each object is of the form `{name: 'nvpname', value: 'nvpvalue'}`

### action

The server endpoint where you want to POST

### returns

A webdriver promise. You can call it in the synchronous style along with your other webdriver commands.