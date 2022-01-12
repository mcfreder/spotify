
export const paths = [
    { href: '/', svg: <Home />, name: 'Hem' },
    { href: '/search', svg: <Search />, name: 'Sök' },
    { href: '/lib', svg: <Lib />, name: 'Ditt bibliotek' },
]

export const items = [
    { href: '/playlist', svg: <Plus />, name: 'Skapa spellista', label: 'playlist' },
    { href: '/likes', svg: <Heart />, name: 'Gillade låtar', label: 'like' }
]

export function Logo() {
    return <svg viewBox="0 0 1134 340" height='40' width='131'>
        <title>Spotify</title>
        <path fill='currentColor' d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path>
    </svg>
}

export function Home() {
    return <svg role="img" height="24" width="24" viewBox="0 0 24 24">
        <path fill='currentColor' d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
    </svg>
}

export function Search() {
    return <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill='currentColor' d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path></svg>
}

export function Lib() {
    return <svg role="img" height="24" width="24" viewBox="0 0 24 24"><path fill='currentColor' d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path></svg>
}

export function Plus() {
    return <svg role="img" height="12" width="12" viewBox="0 0 16 16"><path fill='currentColor' d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path><path fill="none" d="M0 0h16v16H0z"></path></svg>
}

export function Heart() {
    return <svg role="img" height="12" width="12" viewBox="0 0 16 16">
        <path fill='none' d="M0 0h16v16H0z"></path>
        <path fill='currentColor' d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
    </svg>
}

export function Fullscreen() {
    return (
        <svg fill='currentColor' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"></path></svg>
    )
}

export function Speaker() {
    return (
        <svg role="presentation" height="16" width="16" viewBox="0 0 16 16" >
            <path fill='currentColor' d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
        </svg>
    )
}

export function Shuffle() {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill='currentColor' d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path>
        </svg>
    )
}

export function Previous() {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill='currentColor' d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
        </svg>
    )
}

export function Play() {
    return (
        <svg fill='currentColor' role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M4.018 14L14.41 8 4.018 2z"></path></svg>
    )
}

export function Pause() {
    return (
        <svg fill='currentColor' height='16' width='16' viewBox='0 0 16 16'>
            <path fill='none' d='M0 0h16v16H0z'></path>
            <path d='M3 2h3v12H3zm7 0h3v12h-3z'></path>
        </svg>
    )
}

export function Next() {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill='currentColor' d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
        </svg>
    )
}

export function Repeat() {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill='currentColor' d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"></path>
        </svg>
    )
}


export function UnfilledHeart() {
    return (
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill="none" d="M0 0h16v16H0z"></path>
            <path fill='currentColor' d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
        </svg>
    )
}

export function FilledHeart() {
    return (
        <svg height='16' width='16' viewBox='0 0 16 16'>
            <path fill='currentColor' d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
        </svg>
    )
}

export function AnimatedRemoval() {
    return (
        <svg width="38" viewBox="0 0 224 224" style={{ whillChange: 'transform', transform: 'translate3d(0px, 0px, 0px)', margin: '-11px' }}>
            <g transform="translate(0 -28.02)">
                <animateMotion dur="0.5167s" fill="freeze" keyTimes="0;0.3225806;0.483871;0.6451613;0.9677419;1" path="M112 140 C112,140 100,140 100,140 C100,140 124,140 124,140 C124,140 100,140 100,140 C100,140 112,140 112,140 C112,140 112,140 112,140 " keyPoints="0;0.17;0.5;0.83;1;1" keySplines="0.8 0 0.8 1;0.8 0 0.8 1;0.8 0 0.8 1;0.2 0 0.2 1;0 0 0 0" calcMode="spline"></animateMotion>
                <animateTransform dur="0.5167s" fill="freeze" attributeName="transform" type="rotate" additive="sum" keyTimes="0;0.2580645;0.3870968;0.5483871;0.7096774;0.9677419;1" values="0;3;-4;6;-6;0;0" keySplines="0.6 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0.6 0 0.667 1;0 0 0 0" calcMode="spline"></animateTransform>
                <g id="unfilled-heart-shown-in-end">
                    <animate dur="0.5167s" fill="freeze" attributeName="opacity" keyTimes="0;0.3225806;0.6451613;1" values="0;0;1;1" keySplines="0.6 0 0.7 1;0.6 0 0.7 1;0 0 0 0" calcMode="spline"></animate>
                    <path fill="#ffffff" d="M35.02-31.22a23.7 23.7 0 00-32.08-1.46A5.06 5.06 0 010-31.63c-1.69 0-2.89-1.03-2.93-1.07A23.7 23.7 0 00-35-31.22a23.67 23.67 0 00-6.99 16.86c0 6.36 2.48 12.35 6.9 16.76l27.8 32.54a9.58 9.58 0 0014.6 0l27.7-32.45c4.48-4.46 7-10.53 6.98-16.86a23.7 23.7 0 00-6.98-16.85zM32.82.45L5.02 33A6.82 6.82 0 01-5 33L-32.87.37a20.68 20.68 0 01-6.1-14.73 20.67 20.67 0 016.1-14.74 20.67 20.67 0 0127.99-1.33 7.73 7.73 0 004.9 1.8 7.91 7.91 0 004.85-1.76 20.72 20.72 0 0128.03 1.3A20.8 20.8 0 0132.82.45z"></path>
                </g>
                <g id="filled-heart-shown-at-start">
                    <animate dur="0.5167s" fill="freeze" attributeName="opacity" keyTimes="0;0.3225806;0.6451613;1" values="1;1;0;0" keySplines="0.3 0 0.4 1;0.3 0 0.4 1;0 0 0 0" calcMode="spline"></animate>
                    <path fill="#1db954" d="M34.96-31.25a24.14 24.14 0 010 34.04L7.6 34.83a10.03 10.03 0 01-15.2 0L-35.04 2.67a24.07 24.07 0 01.08-33.92 23.96 23.96 0 0132.4-1.48c.04.04 1.08.92 2.56.92 1.44 0 2.56-.92 2.56-.92 9.64-8 23.56-7.36 32.4 1.48z"></path>
                </g>
            </g>
        </svg>
    )
}

export function AnimatedHeart() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="38" viewBox="0 0 224 224" style={{ whillChange: 'transform', transform: 'translate3d(0px, 0px, 0px)', margin: '-11px' }}>
            <g>
                <g id="first-growing-ring">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.1219512;0.1219537;0.8292683;0.8292683;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g transform=" translate(112, 112)">
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.1219512;0.804878;1" values="1;1;0;0" keySplines="0.2 0 0.4 1;0.2 0 0.4 1;0 0 0 0" calcMode="spline"></animate>
                        <circle stroke="#1db954" fill="none">
                            <animate dur="0.683s" fill="freeze" attributeName="stroke-width" keyTimes="0;0.1219512;0.804878;1" values="30;30;0;0" keySplines="0 0 0 1;0 0 0 1;0 0 0 0" calcMode="spline"></animate>
                            <animate dur="0.683s" fill="freeze" attributeName="r" keyTimes="0;0.1219512;0.804878;1" values="0;0;110;110" keySplines="0 0 0 1;0 0 0 1;0 0 0 0" calcMode="spline"></animate>
                        </circle>
                    </g>
                </g>
                <g id="second-growing-ring">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2926829;0.2926854;1" values="0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g transform=" translate(112, 112)">
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2926829;0.9756098;1" values="1;1;0;0" keySplines="0.2 0 0.4 1;0.2 0 0.4 1;0 0 0 0" calcMode="spline"></animate>
                        <circle stroke="#1db954" fill="none">
                            <animate dur="0.683s" fill="freeze" attributeName="stroke-width" keyTimes="0;0.2926829;0.9756098;1" values="30;30;0;0" keySplines="0 0 0 1;0 0 0 1;0 0 0 0" calcMode="spline"></animate>
                            <animate dur="0.683s" fill="freeze" attributeName="r" keyTimes="0;0.2926829;0.9756098;1" values="0;0;110;110" keySplines="0 0 0 1;0 0 0 1;0 0 0 0" calcMode="spline"></animate>
                        </circle>
                    </g>
                </g>
                <g id="first-light-colored-moving-heart-particle">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2439024;0.2439049;0.804878;0.8048781;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g>
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.7804878;1" values="1;0;0" keySplines="0.6 0 0.7 1;0 0 0 0" calcMode="spline"></animate>
                        <animateMotion dur="0.683s" fill="freeze" keyTimes="0;0.7804878;1" path="M122.25 123.17 C200.25,137.25 197.5,23.92 197.5,23.92 C197.5,23.92 197.5,23.92 197.5,23.92 " keyPoints="0;1;1" keySplines="0.95 0 0.8 1;0 0 0 0" calcMode="spline"></animateMotion>
                        <animateTransform dur="0.683s" fill="freeze" attributeName="transform" type="scale" additive="sum" keyTimes="0;0.7804878;1" values="0.6 0.6;0.9 0.9;0.9 0.9" keySplines="0.8 0 0.8 1;0 0 0 0" calcMode="spline"></animateTransform>
                        <path fill="#ffffff" d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"></path>
                    </g>
                </g>
                <g id="first-brand-colored-moving-heart-particle">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2439024;0.2439049;0.6829268;0.6829269;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g>
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.6585366;1" values="1;0;0" keySplines="0.6 0 1 1;0 0 0 0" calcMode="spline"></animate>
                        <animateMotion dur="0.683s" fill="freeze" keyTimes="0;0.6585366;1" path="M98 105.92 C19.75,106.25 32.25,37.42 32.25,37.42 C32.25,37.42 32.25,37.42 32.25,37.42 " keyPoints="0;1;1" keySplines="0.95 0 0.8 1;0 0 0 0" calcMode="spline"></animateMotion>
                        <animateTransform dur="0.683s" fill="freeze" attributeName="transform" type="scale" additive="sum" keyTimes="0;0.6585366;1" values="0.6 0.6;0.9 0.9;0.9 0.9" keySplines="0.8 0 0.8 1;0 0 0 0" calcMode="spline"></animateTransform>
                        <path fill="#1db954" d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"></path>
                    </g>
                </g>
                <g id="second-light-colored-moving-heart-particle">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2439024;0.2439049;0.804878;0.8048781;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g>
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.7317073;1" values="1;0;0" keySplines="0.6 0 1 1;0 0 0 0" calcMode="spline"></animate>
                        <animateMotion dur="0.683s" fill="freeze" keyTimes="0;0.7317073;1" path="M112.5 123.17 C73.75,194.5 72,43.17 72,43.17 C72,43.17 72,43.17 72,43.17 " keyPoints="0;1;1" keySplines="0.95 0 0.8 1;0 0 0 0" calcMode="spline"></animateMotion>
                        <animateTransform dur="0.683s" fill="freeze" attributeName="transform" type="scale" additive="sum" keyTimes="0;0.7317073;1" values="0.6 0.6;0.9 0.9;0.9 0.9" keySplines="0.8 0 0.8 1;0 0 0 0" calcMode="spline"></animateTransform>
                        <path fill="#ffffff" d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"></path>
                    </g>
                </g>
                <g id="second-brand-colored-moving-heart-particle">
                    <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.2439024;0.2439049;0.8536585;0.8536586;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline"></animate>
                    <g>
                        <animate dur="0.683s" fill="freeze" attributeName="opacity" keyTimes="0;0.804878;1" values="1;0;0" keySplines="0.6 0 1 1;0 0 0 0" calcMode="spline"></animate>
                        <animateMotion dur="0.683s" fill="freeze" keyTimes="0;0.804878;1" path="M112 134.92 C160.75,190.75 155.25,45.67 155.25,45.67 C155.25,45.67 155.25,45.67 155.25,45.67 " keyPoints="0;1;1" keySplines="0.95 0 0.8 1;0 0 0 0" calcMode="spline"></animateMotion>
                        <animateTransform dur="0.683s" fill="freeze" attributeName="transform" type="scale" additive="sum" keyTimes="0;0.804878;1" values="0.6 0.6;0.9 0.9;0.9 0.9" keySplines="0.8 0 0.8 1;0 0 0 0" calcMode="spline"></animateTransform>
                        <path fill="#1db954" d="M22.28 -19.53 C16.88,-24.89 8.3,-25.2 2.54,-20.44 C2.54,-20.44 1.5,-19.48 0,-19.48 C-1.54,-19.48 -2.54,-20.44 -2.54,-20.44 C-8.3,-25.2 -16.86,-24.86 -22.24,-19.53 C-28,-13.81 -28,-4.51 -22.24,1.21 C-22.24,1.21 -4.04,22.54 -4.04,22.54 C-1.91,25.03 1.91,25.03 4.04,22.54 C4.04,22.54 22.28,1.21 22.28,1.21 C28,-4.51 28.05,-13.81 22.28,-19.53z"></path>
                    </g>
                </g>
                <g id="main-heart-group" transform="translate(112, 112)">
                    <animateTransform dur="0.683s" fill="freeze" attributeName="transform" type="scale" additive="sum" keyTimes="0;0.1219512;0.2439024;0.5121951;1" values="1 1;0.8 0.8;1.25 1.25;1 1;1 1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0 1;0 0 0 0" calcMode="spline"></animateTransform>
                    <g>
                        <path fill="#ffffff" d="M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z">
                            <animate dur="0.683s" fill="freeze" attributeName="fill" keyTimes="0;0.1219512;0.2439024;0.5121951;1" values="#ffffff;#ffffff;#1db954;#1db954;#1db954" keySplines="0 0 0 1;0 0 0 1;0 0 0 1;0 0 0 0" calcMode="spline"></animate>
                            <animate dur="0.683s" fill="freeze" attributeName="d" attributeType="XML" keyTimes="0;0.1219512;0.2439024;1" values="M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M32.01 0.08 C39.97,-7.84 39.97,-20.56 32.13,-28.4 C24.73,-35.76 13.13,-36.32 5.13,-29.64 C4.93,-29.48 2.89,-27.8 0.01,-27.8 C-2.99,-27.8 -4.95,-29.52 -5.19,-29.68 C-8.91,-32.8 -13.43,-34.32 -17.91,-34.32 C-23.07,-34.32 -28.19,-32.32 -32.11,-28.4 C-39.95,-20.56 -39.95,-7.84 -32.11,-0.04 C-32.11,-0.04 -4.55,32.24 -4.55,32.24 C-2.27,34.92 2.29,34.92 4.57,32.24 C4.57,32.24 32.01,0.08 32.01,0.08z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M0.02 0.05 C0.02,0.05 0.01,0.07 0.01,0.07 C0.01,0.07 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.03 0.02,0.03 C0.02,0.03 0.01,0.06 0.01,0.06 C0.01,0.06 -0.03,0.03 -0.03,0.03 C-0.03,0.03 0,0.08 0,0.08 C0,0.08 0,0.04 0,0.04 C0,0.04 0.05,0 0.05,0 C0.05,0 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.05 0.02,0.05z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z ;M0.02 0.05 C0.02,0.05 0.01,0.07 0.01,0.07 C0.01,0.07 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.03 0.02,0.03 C0.02,0.03 0.01,0.06 0.01,0.06 C0.01,0.06 -0.03,0.03 -0.03,0.03 C-0.03,0.03 0,0.08 0,0.08 C0,0.08 0,0.04 0,0.04 C0,0.04 0.05,0 0.05,0 C0.05,0 0.01,0.04 0.01,0.04 C0.01,0.04 0.02,0.05 0.02,0.05z  M34.96 -31.25 C44.32,-21.85 44.32,-6.61 34.96,2.79 C34.96,2.79 7.6,34.83 7.6,34.83 C5.72,37.03 2.92,38.31 0,38.31 C-2.92,38.31 -5.68,37.03 -7.6,34.83 C-7.6,34.83 -35.04,2.67 -35.04,2.67 C-44.32,-6.61 -44.32,-21.85 -34.96,-31.25 C-26.08,-40.09 -12.16,-40.73 -2.56,-32.73 C-2.52,-32.69 -1.48,-31.81 0,-31.81 C1.44,-31.81 2.56,-32.73 2.56,-32.73 C12.2,-40.73 26.12,-40.09 34.96,-31.25z" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline"></animate>
                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
}