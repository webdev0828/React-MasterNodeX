'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var BASE_STYLE = {
  dot: {
    base: {
      background: 'white',
      border: '2px solid #D6D6D6',
      borderRadius: '50px',
      float: 'left',
      height: '10px',
      width: '10px'
    },
    active: {
      border: '2px solid #3399ff',
      background: '#3399ff'
    },
    current: {
      border: '2px solid #3399ff'
    }
  },
  line: {
    base: {
      background: '#D6D6D6',
      float: 'left',
      height: '3px',
      marginLeft: '10px',
      marginRight: '10px',
      position: 'relative',
      top: '6px',
      width: '100px'
    },
    active: {
      background: '#3399ff'
    }
  }
};

var Dot = function Dot(_ref) {
  var _ref$active = _ref.active;
  var active = _ref$active === undefined ? false : _ref$active;
  var _ref$current = _ref.current;
  var current = _ref$current === undefined ? false : _ref$current;
  var _ref$styling = _ref.styling;
  var styling = _ref$styling === undefined ? true : _ref$styling;

  var style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.dot.base);

    if (current) {
      Object.assign(style, BASE_STYLE.dot.current);
    } else if (active) {
      Object.assign(style, BASE_STYLE.dot.active);
    }
  }

  return _react2['default'].createElement('div', {
    style: style,
    className: (0, _classnames2['default'])('ProgressSteps-Step', {
      'ProgressSteps-Step-deactivated': !active && !current,
      'ProgressSteps-Step-activated': active,
      'ProgressSteps-Step-current': current
    })
  });
};

var Line = function Line(_ref2) {
  var _ref2$active = _ref2.active;
  var active = _ref2$active === undefined ? false : _ref2$active;
  var _ref2$styling = _ref2.styling;
  var styling = _ref2$styling === undefined ? true : _ref2$styling;

  var style = {};

  if (styling) {
    style = Object.assign({}, BASE_STYLE.line.base);
    if (active) Object.assign(style, BASE_STYLE.line.active);
  }

  return _react2['default'].createElement('div', {
    style: style,
    className: (0, _classnames2['default'])('ProgressSteps-Line', {
      'ProgressSteps-Line-deactivated': !active,
      'ProgressSteps-Line-activated': active
    })
  });
};

exports['default'] = function (_ref3) {
  var steps = _ref3.steps;
  var current = _ref3.current;
  var className = _ref3.className;

  var rest = _objectWithoutProperties(_ref3, ['steps', 'current', 'className']);

  var progress = [];

  for (var i = 0; i < steps - 1; i++) {
    progress.push(_react2['default'].createElement(
      'div',
      { key: i },
      _react2['default'].createElement(Dot, _extends({
        current: i == current - 1,
        active: i < current - 1
      }, rest)),
      _react2['default'].createElement(Line, _extends({
        current: true,
        active: i < current - 1
      }, rest))
    ));
  }

  progress.push(_react2['default'].createElement(Dot, _extends({
    key: 'end',
    current: current === steps
  }, rest)));

  return _react2['default'].createElement(
    'div',
    { className: (0, _classnames2['default'])('ProgressSteps', className) },
    progress
  );
};

module.exports = exports['default'];