'use strict';

module.exports = {
    presets: [
        require('babel-preset-flow')
    ],
    plugins: [
        [require('babel-plugin-transform-react-jsx'), { pragma: "createElement" }],
    ]
};