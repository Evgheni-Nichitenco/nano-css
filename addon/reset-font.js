'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('reset-font', renderer, ['rule']);
    }

    renderer.put('', {
        'html, body': {
            fontFamily: '"Open Sans",sans',
            fontWeight: 400,
            fontSize: '16px',

            '-moz-text-size-adjust': '100%',
            '-ms-text-size-adjust': '100%',
            '-webkit-text-size-adjust': '100%',
            'text-size-adjust': '100%',

            // Makes fonts more smooth/prettier.
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
        },
    });
};