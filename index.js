module.exports = {
  componentWillMount: function() {
    if (!this.getNullDefaultProps) {
      throw new Error("Component must implement a getNullDefaultProps() function.");
    };

    var nullDefaults = this.getNullDefaultProps();

    for (propName in this.props) {
      if (nullDefaults[propName] != undefined && this.props[propName] === null) {
        this.props[propName] = nullDefaults[propName];
      };
    };
  }
};
