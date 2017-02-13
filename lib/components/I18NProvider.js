'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppProvider = exports.ConnectI18NProvider = exports.i18NProviderUtils = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emptyObj = {};
var dummy = function dummy(key, values) {
  console.log("Not Mount <I18NProvider/> component.");
  return key;
};
var i18NProviderUtils = exports.i18NProviderUtils = {
  getI18NValue: dummy,
  getUserDateFormat: dummy
};

var I18NProvider = function (_React$Component) {
  _inherits(I18NProvider, _React$Component);

  function I18NProvider(props, context) {
    _classCallCheck(this, I18NProvider);

    var _this = _possibleConstructorReturn(this, (I18NProvider.__proto__ || Object.getPrototypeOf(I18NProvider)).call(this, props, context));

    _this.i18n = props.i18n;
    _this.timeZone = props.timeZone;
    _this.user = props.user;
    _this.permission = props.permission;
    _this.license = props.license;
    _this.promise = null;
    _this.resolve = null;
    _this.reject = null;
    _this.state = { reRender: false };
    i18NProviderUtils.getI18NValue = (0, _utils.getI18NValue)(props.i18n);
    i18NProviderUtils.userDateFormat = (0, _utils.userDateFormat)(i18NProviderUtils.getI18NValue, props.timeZone);
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
        this.promise = new Promise(function (res, rej) {
          _this2.resolve = res;
          _this2.reject = rej;
        }).then(function () {
          _this2.i18n = nextProps.i18n;
          _this2.timeZone = nextProps.timeZone;
          i18NProviderUtils.getI18NValue = (0, _utils.getI18NValue)(nextProps.i18n);
          i18NProviderUtils.userDateFormat = (0, _utils.userDateFormat)(i18NProviderUtils.getI18NValue, nextProps.timeZone);
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
      return this.state.reRender ? null : _react.Children.only(this.props.children);
    }
  }]);

  return I18NProvider;
}(_react2.default.Component);

exports.default = I18NProvider;


I18NProvider.defaultProps = {
  i18n: emptyObj,
  timeZone: "",
  user: null,
  permission: null,
  license: null
};
I18NProvider.childContextTypes = {
  i18n: _react.PropTypes.object,
  timeZone: _react.PropTypes.string,
  user: _react.PropTypes.object,
  permission: _react.PropTypes.object
};

var ConnectI18NProvider = exports.ConnectI18NProvider = (0, _reactRedux.connect)(function (state, props) {
  var i18n = {};
  var timeZone = "";
  if (typeof props.i18n == "function") {
    i18n = props.i18n(state);
  } else if (_typeof(props.i18n) == "object") {
    i18n = props.i18n;
  }
  if (typeof props.timeZone == "function") {
    timeZone = props.timeZone(state);
  } else if (_typeof(props.timeZone) == "object") {
    timeZone = props.timeZone;
  }
  return {
    i18n: i18n,
    timeZone: timeZone
  };
})(I18NProvider);

var AppProvider = exports.AppProvider = (0, _reactRedux.connect)(function (state, props) {
  var i18n = null;
  var timeZone = "";
  var user = null;
  var permission = null;
  if (typeof props.i18n == "function") {
    i18n = props.i18n(state);
  } else if (_typeof(props.i18n) == "object") {
    i18n = props.i18n;
  }
  if (typeof props.timeZone == "function") {
    timeZone = props.timeZone(state);
  } else if (_typeof(props.timeZone) == "object") {
    timeZone = props.timeZone;
  }
  if (typeof props.user == "function") {
    user = props.user(state);
  } else if (_typeof(props.user) == "object") {
    user = props.user;
  }
  if (typeof props.permission == "function") {
    permission = props.permission(state);
  } else if (_typeof(props.permission) == "object") {
    permission = props.permission;
  }
  if (typeof props.license == "function") {
    license = props.license(state);
  } else if (_typeof(props.license) == "object") {
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