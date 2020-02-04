module.exports = [
    {
        entry: 'https://cdn.rio.cloud/libs/core-js/3.6.4/core-js.min.js',
        global: 'CoreJs',
        module: 'core-js',
    },
    {
        entry: 'https://cdn.rio.cloud/libs/react/16.10.2/react.min.js',
        global: 'React',
        module: 'react',
    },
    {
        entry: 'https://cdn.rio.cloud/libs/react-dom/16.10.2/react-dom.min.js',
        global: 'ReactDOM',
        module: 'react-dom',
    },
    {
        entry: [
            'https://uikit.developers.rio.cloud/0.13.7/rio-uikit.js',
            'https://uikit.developers.rio.cloud/0.13.7/rio-uikit.css',
        ],
        global: 'RioUikit',
        module: 'rio-uikit',
    },
    {
        entry: 'https://accountmenu.developers.rio.cloud/1.2.4/rio-accountmenu.js',
        global: 'RioAccountMenu',
        module: 'rio-accountmenu',
    },
    {
        entry: 'https://session-expired-info.developers.rio.cloud/0.9.4/rio-session-expired-info.js',
        global: 'RioSessionExpiredInfo',
        module: 'rio-session-expired-info',
    },
];
