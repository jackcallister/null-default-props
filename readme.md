# Null Default Props

This is a React JS mixin for solving null props which require a default value.

## Issue

Passing a null (as a prop) into a component doesn't mean the component will use the default value instead.

```
var React = require('react');

var Component = React.createClass({
  getDefaultProps: function() {
    return {
      myProp: 'Default Value'
    }
  },

  render: function(){
    return <h1>{this.props.myProp}</h1>;
  }
})

<Component myProp={null} />

// => <h1></h1>

<Component />

// => <h1>Default value</h1>

```

## Usage

To solve this problem mixin `null-default-props` and implement `getNullDefaultProps`.

```
var React = require('react'),
    nullDefaultProps = require('null-default-props');

var Component = React.createClass({
  mixins: [nullDefaultProps],

  getDefaultProps: function() {
    return {
      myProp: 'Default Value'
    }
  },

  getNullDefaultProps: function() {
    return {
      myProp: 'Default Value'
    }
  },

  render: function(){
    return <h1>{this.props.myProp}</h1>;
  }
})

<Component myProp={null} />

// => <h1>Default value</h1>

<Component />

// => <h1>Default value</h1>

```

## Notes

There's no support for mixins when using React with ES6 classes. Instead the React team are working on making it easy to support such use casses without mixins. Until then `createClass` is the necessary method for using mixins with your components.
