jest.dontMock('../index.js');

var React = require('react/addons'),
    nullDefaultProps = require('../index.js'),
    TestUtils = React.addons.TestUtils;

var Component = React.createClass({
  mixins: [nullDefaultProps],

  getNullDefaultProps: function() {
    return {
      title: 'Title'
    }
  },

  render: function() {
    return <h1>{this.props.title}</h1>;
  }
});

describe('nullDefaultProps', function() {

  it('overrides null props', function() {
    var component = TestUtils.renderIntoDocument(
      <Component title={null} />
    );

    expect(component.getDOMNode().textContent).toEqual('Title');
  });

  it('allows defined props', function() {
    var component = TestUtils.renderIntoDocument(
      <Component title={'Test Title'} />
    );

    expect(component.getDOMNode().textContent).toEqual('Test Title');
  });

  describe('when getNullDefaultProps isn\'t implemented', function() {
    it('throws an error', function() {
      var errorMessage;
      var ErrorComponent = React.createClass({
        mixins: [nullDefaultProps],

        render: function() {
          return <h1>{this.props.title}</h1>;
        }
      });

      try {
        TestUtils.renderIntoDocument(<ErrorComponent />);
      } catch(e) {
        errorMessage = e.message;
      };

      expect(errorMessage).toBeDefined();
    });
  });
});