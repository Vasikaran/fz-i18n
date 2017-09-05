import _typeof from 'babel-runtime/helpers/typeof';
import _Promise from 'babel-runtime/core-js/promise';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import { getI18NValue, userDateFormat } from '../utils';

var emptyObj = {};
var dummy = function dummy(key, values) {
  console.log('Not Mount <I18NProvider/> component.');
  return key;
};
export var i18NProviderUtils = {
  getI18NValue: dummy,
  userDateFormat: dummy
};

var I18NProvider = function (_React$Component) {
  _inherits(I18NProvider, _React$Component);

  function I18NProvider(props, context) {
    _classCallCheck(this, I18NProvider);

    var _this = _possibleConstructorReturn(this, (I18NProvider.__proto__ || _Object$getPrototypeOf(I18NProvider)).call(this, props, context));

    _this.i18n = props.i18n;
    _this.timeZone = props.timeZone;
    _this.user = props.user;
    _this.permission = props.permission;
    _this.license = props.license;
    _this.promise = null;
    _this.resolve = null;
    _this.reject = null;
    _this.state = { reRender: false };
    i18NProviderUtils.getI18NValue = getI18NValue(props.i18n);
    i18NProviderUtils.userDateFormat = userDateFormat(i18NProviderUtils.getI18NValue, props.timeZone);
    return _this;
  }

  _createClass(I18NProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        i18n: this.i18n,
        timeZone: this.timeZone,
        user: this.user,
        permission: this.permission,
        license: this.license
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.i18n != nextProps.i18n || this.props.timeZone != nextProps.timeZone || this.props.user != nextProps.user || this.props.permission != nextProps.permission || this.props.license != nextProps.license && this.promise) {
        this.promise = new _Promise(function (res, rej) {
          _this2.resolve = res;
          _this2.reject = rej;
        }).then(function () {
          _this2.i18n = nextProps.i18n;
          _this2.timeZone = nextProps.timeZone;
          i18NProviderUtils.getI18NValue = getI18NValue(nextProps.i18n);
          i18NProviderUtils.userDateFormat = userDateFormat(i18NProviderUtils.getI18NValue, nextProps.timeZone);
          _this2.setState({ reRender: true }, function () {
            setTimeout(function () {
              return _this2.setState({ reRender: false });
            }, 1);
          });
          _this2.promise = null;
        }, function () {
          _this2.promise = null;
        });
        this.props.onChange(this.resolve, this.reject);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.reRender ? null : Children.only(this.props.children);
    }
  }]);

  return I18NProvider;
}(React.Component);

export default I18NProvider;


I18NProvider.defaultProps = {
  i18n: emptyObj,
  timeZone: '',
  user: null,
  permission: null,
  license: null
};
I18NProvider.childContextTypes = {
  i18n: PropTypes.object,
  timeZone: PropTypes.string,
  user: PropTypes.object,
  permission: PropTypes.object,
  license: PropTypes.object
};

export var ConnectI18NProvider = connect(function (state, props) {
  var i18n = {};
  var timeZone = '';
  if (typeof props.i18n == 'function') {
    i18n = props.i18n(state);
  } else if (_typeof(props.i18n) == 'object') {
    i18n = props.i18n;
  }
  if (typeof props.timeZone == 'function') {
    timeZone = props.timeZone(state);
  } else if (_typeof(props.timeZone) == 'object') {
    timeZone = props.timeZone;
  }
  return {
    i18n: i18n,
    timeZone: timeZone
  };
})(I18NProvider);

export var AppProvider = connect(function (state, props) {
  var i18n = null;
  var timeZone = '';
  var user = null;
  var permission = null;
  if (typeof props.i18n == 'function') {
    i18n = props.i18n(state);
  } else if (_typeof(props.i18n) == 'object') {
    i18n = props.i18n;
  }
  if (typeof props.timeZone == 'function') {
    timeZone = props.timeZone(state);
  } else if (_typeof(props.timeZone) == 'object') {
    timeZone = props.timeZone;
  }
  if (typeof props.user == 'function') {
    user = props.user(state);
  } else if (_typeof(props.user) == 'object') {
    user = props.user;
  }
  if (typeof props.permission == 'function') {
    permission = props.permission(state);
  } else if (_typeof(props.permission) == 'object') {
    permission = props.permission;
  }
  if (typeof props.license == 'function') {
    license = props.license(state);
  } else if (_typeof(props.license) == 'object') {
    license = props.license;
  }
  return {
    i18n: i18n,
    timeZone: timeZone,
    user: user,
    permission: permission,
    license: license
  };
})(I18NProvider);