'use strict';

module.exports = {
    presets: [
        require('babel-preset-es2015'),
        require('babel-preset-flow')
    ],
    plugins: [
        [require('babel-plugin-transform-react-jsx'), { pragma: "Lomo.createElement" }],
    ]
};