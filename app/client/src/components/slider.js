'use strict';
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(33);
var Slider = __webpack_require__(167);
__webpack_require__(181);
__webpack_require__(185);
var classnames = __webpack_require__(180);
var paymentAmount = {
    value: 1,
    min: 1,
    max: 10000
};
var updateSliderValue = function updateSliderValue(value) {
paymentAmount.value = value;
    render();
};
var updateSliderMin = function updateSliderMin(min) {
paymentAmount.min = min;
    render();
};
var updateSliderMax = function updateSliderMax(max) {
paymentAmount.max = max;
    render();
};
var Index = React.createClass({
    displayName: 'Index',
    propTypes: {
        config: React.PropTypes.object
    },
    getInitialState: function getInitialState() {
        return {
            calculatedValue: this.props.config.value * 2,
            ticks: 1,
            displayInput: 0,
            displayFollowerPopover: 0,
            displayMarkers: 0
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (this.props.config.value !== nextProps.config.value) {
            this.setState({calculatedValue: this.props.config.value});
        }
    },
    updateMin: function updateMin(value) {
        var newVal = value;
        if (newVal >= 0) {
            updateSliderMin(newVal);
        }
    },
    updateMax: function updateMax(value) {
        var newVal = value;
        if (newVal >= 0) {
            updateSliderMax(newVal);
        }
    },
    updateValue: function updateValue(value) {
        var newVal = value;
        if (newVal >= 0) {
            updateSliderValue(newVal);
        }
    },
    handleSliderChange: function handleSliderChange(value, position) {
        updateSliderValue(value);
    },
    updateBool: function updateBool(key) {
        var _this = this;
        return function (value) {
            _this.setState(_defineProperty({}, key, value));
        };
    },
    render: function render() {
        var markers = this.state.displayMarkers === 1
            ? [
                {
                    value: Math.floor(this.props.config.min + (this.props.config.max - this.props.config.min) / 3),
                    label: '$1.00'
                }, {
                    value: Math.floor(this.props.config.min + 2 * (this.props.config.max - this.props.config.min) / 3),
                    label: '$10,000'
                }
            ]
            : [];
        var markersText = '';
        for (var i in markers) {
            if (markersText !== '') {
                markersText += ', ';
            }
            markersText += markers[i].value + ' : \"' + markers[i].label + '\"';
        }
        return React.createElement('div', {
            className: 'paymentSlider'
        }, React.createElement('div', {
            className: 'controls'
        }, React.createElement('h2', null, 'Props'), React.createElement('ul', {
            className: 'proplist'
        }, React.createElement('li', {
            className: 'proplist__item'
        }, React.createElement('div', {
            className: 'prop-text'
        }, React.createElement('label', {
            className: 'prop-text__label'
        }, 'Minimum'), React.createElement('p', {
            className: 'prop-text__value'
        }, this.props.config.min)), React.createElement(Slider, {
            min: 0,
            max: this.props.config.max,
            value: this.props.config.min,
            showValue: false,
            onChange: this.updateMin
        })), React.createElement('li', {
            className: 'proplist__item'
        }, React.createElement('div', {
            className: 'prop-text'
        }, React.createElement('label', {
            className: 'prop-text__label'
        }, 'Maximum'), React.createElement('p', {
            className: 'prop-text__value'
        }, this.props.config.max)), React.createElement(Slider, {
            min: this.props.config.min,
            max: 10000,
            value: this.props.config.max,
            showValue: false,
            onChange: this.updateMax
        })), React.createElement('li', {
            className: 'proplist__item'
        }, React.createElement('div', {
            className: 'prop-text'
        }, React.createElement('label', {
            className: 'prop-text__label'
        }, 'Show Ticks'), React.createElement('p', {
            className: 'prop-text__value'
        }, this.state.ticks === 1
            ? 'True'
            : 'False')), React.createElement(Slider, {
            min: 0,
            max: 1,
            value: this.state.ticks,
            onChange: this.updateBool('ticks')
        })), React.createElement('li', {
            className: 'proplist__item'
        }, React.createElement('div', {
            className: 'prop-text'
        }, React.createElement('label', {
            className: 'prop-text__label'
        }, 'Show Following Label'), React.createElement('p', {
            className: 'prop-text__value'
        }, this.state.displayFollowerPopover === 1
            ? 'True'
            : 'False')), React.createElement(Slider, {
            min: 0,
            max: 1,
            value: this.state.displayFollowerPopover,
            onChange: this.updateBool('displayFollowerPopover')
        })), React.createElement('li', {
            className: 'proplist__item'
        }, React.createElement('div', {
            className: 'prop-text'
        }, React.createElement('label', {
            className: 'prop-text__label'
        }, 'Show Markers'), React.createElement('p', {
            className: 'prop-text__value'
        }, this.state.displayMarkers === 1
            ? 'True'
            : 'False')), React.createElement(Slider, {
            min: 0,
            max: 1,
            value: this.state.displayMarkers,
            onChange: this.updateBool('displayMarkers')
        })))), React.createElement('div', {
            className: 'content'
        }, React.createElement('h1', null, 'NW-React-Slider'), React.createElement('div', {
            className: 'slider-container'
        }, React.createElement('p', {
            className: classnames('slider-value', this.state.displayMarkers
                ? 'markers-showing'
                : '')
        }, this.props.config.value), React.createElement(Slider, {
            displayFollowerPopover: this.state.displayFollowerPopover === 1,
            min: this.props.config.min,
            max: this.props.config.max,
            value: this.props.config.value,
            onChange: this.handleSliderChange,
            ticks: this.state.ticks === 1,
            markerLabel: markers
        })), React.createElement('div', {
            className: 'jsx'
        }, React.createElement('p', {
            className: 'jsx__label'
        }, 'your.jsx'), React.createElement('div', {
            className: 'code'
        }, React.createElement('p', {
            className: 'code__text'
        }, '<Slider'), React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'value=', '{' + this.props.config.value + '}'), React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'min=', '{' + this.props.config.min + '}'), React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'max=', '{' + this.props.config.max + '}'), React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'onChange=', '{function(){}}'), this.state.ticks === 1 && React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'ticks'), this.state.displayFollowerPopover === 1 && React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'displayFollowerPopover'), React.createElement('p', {
            className: 'code__text code__text--indent'
        }, 'markerLabel={[', markersText, ']}/>')))));
    }
});
module.exports = Index;
var render = function render() {
    ReactDOM.render(React.createElement(Index, {config: fakeStore}), document.getElementById('root'));
};
render();

/*****************
 ** WEBPACK FOOTER
 ** ./example/index.jsx
 ** module id = 1
 ** module chunks = 0
 **/