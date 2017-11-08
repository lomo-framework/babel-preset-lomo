'use strict';

module.exports = {
    plugins: [
        [require('babel-plugin-transform-react-jsx'), { pragma: "lomo.createElement" }]
    ]
};