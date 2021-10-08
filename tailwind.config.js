module.exports = {
    purge: ['.index.html', './src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors : {
                highlight : '#FF0000',
                'light' : '#FBFBFB',
                'subdued' : '#74798C',
                'proteins' : '#4AB8FF10',
                'carbs' : '#F9CE2310',
                'lipids' : '#FD518110',
                'calories' : '#FF000010',
                'bar-chart-title' : '#20253A',
                'radar' : '#2B2D30',
                'daily-tooltip' : '#E60000'

            },
            spacing : {
                't-dboard' : '4.25rem',
                'l-dboard' : '6.75rem',
                't-record' : '2.5rem',
                't-main' : '4.875rem'
            },
            fontSize: {
                md : '1.5rem',
                sm : '0.75rem',
                'nutri-value' : '1.25rem',
                'bar-legend' : '0.875rem',
                'score-percent' : '100%',
                'score-title' : '1.5vw'
            },
            height: {
                md: '5.625rem',
                full : '100%',
                'nutri-bg' : '8vw',
                'nutri-icon' : '3.75rem',
                'graphs' : '21vw'
            },
            lineHeight: {
                'top-nav': '5.625rem'
            },
            width : {
                'left-bar': '7.375rem',
                'nutri-bg' : '20vw',
                'nutri-icon' : '3.75rem',
                'dashboard' : 'calc(100vw - theme("width.left-bar") - theme("spacing.l-dboard"))'
            },
            margin : {
                '-v-bar' : '-5.625rem'
            },
            inset : {
                '1/10' : '10%',
                'center-score' : '7%'
            },
            translate : {
                'score-bg' : '-41.5%'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
