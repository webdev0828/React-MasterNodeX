'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlockUi = require('./BlockUi');

var _BlockUi2 = _interopRequireDefault(_BlockUi);

var _reduxMiddleware = require('./reduxMiddleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxBlockUi = function (_Component) {
  _inherits(ReduxBlockUi, _Component);

  function ReduxBlockUi(props) {
    _classCallCheck(this, ReduxBlockUi);

    var _this = _possibleConstructorReturn(this, (ReduxBlockUi.__proto__ || Object.getPrototypeOf(ReduxBlockUi)).call(this, props));

    _this.middleware = _this.middleware.bind(_this);

    _this.blocking = 0;
    _this.state = {
      blocking: 0
    };
    return _this;
  }

  _createClass(ReduxBlockUi, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _reduxMiddleware.register)(this.middleware);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _reduxMiddleware.unregister)(this.middleware);
    }
  }, {
    key: 'middleware',
    value: function middleware(action) {
      var _props = this.props,
          block = _props.block,
          unblock = _props.unblock;


      this.checkAction(action, block);
      this.checkAction(action, unblock, false);
    }
  }, {
    key: 'checkAction',
    value: function checkAction(action, check) {
      var _this2 = this;

      var block = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (check) {
        if (!Array.isArray(check)) {
          check = [check];
        }

        check.forEach(function (value) {
          var result = void 0;
          if (typeof value === 'function') {
            result = value(action);
          } else if (value instanceof RegExp) {
            value.lastIndex = 0;
            result = value.test(action.type);
          } else {
            result = value === action.type;
          }

          if (result === true) {
            var oldValue = _this2.blocking;

            if (block) {
              _this2.setState({ blocking: ++_this2.blocking });
            } else {
              if (_this2.blocking < 1) {
                _this2.blocking = 0;
              } else {
                --_this2.blocking;
              }
              _this2.setState({ blocking: _this2.blocking });
            }

            _this2.props.onChange && _this2.props.onChange(_this2.blocking, oldValue);
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          blocking = _props2.blocking,
          omit1 = _props2.block,
          omit2 = _props2.unblock,
          omit3 = _props2.onChange,
          attributes = _objectWithoutProperties(_props2, ['blocking', 'block', 'unblock', 'onChange']);

      return _react2.default.createElement(_BlockUi2.default, _extends({}, attributes, { blocking: blocking || this.state.blocking > 0 }));
    }
  }]);

  return ReduxBlockUi;
}(_react.Component);

exports.default = ReduxBlockUi;