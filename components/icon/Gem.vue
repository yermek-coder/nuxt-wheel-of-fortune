<template>
    <svg width="1em" height="1.1em" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_24_1337)">
            <path
                d="M5.1273 1.03367L5.0671 1L5.00688 1.03367L1.06937 3.23555L1 3.27435L1.00666 3.35356L1.42053 8.27544L1.42588 8.33907L1.48092 8.37143L5.00456 10.4438L5.0671 10.4806L5.12964 10.4438L8.65326 8.37143L8.7083 8.33907L8.71364 8.27544L9.12751 3.35356L9.13416 3.27435L9.06478 3.23555L5.1273 1.03367Z"
                fill="white" :stroke="strokeColor" :stroke-width="strokeWidth" />
            <path d="M5.06708 1.14133L1.12958 3.34322L2.7253 4.12036L5.06708 2.82513V1.14133Z" :fill="color"
                opacity="0.2" />
            <path :fill="color" opacity="0.4"
                d="M1.12958 3.34322L1.52333 8.2651L2.96708 7.35843L2.7253 4.12036L1.12958 3.34322Z" />
            <path :fill="color" opacity="0.5"
                d="M9.00458 3.34322L5.06708 1.14133V2.82513L7.40885 4.12036L9.00458 3.34322Z" />
            <path :fill="color" opacity="0.6"
                d="M8.6108 8.2651L9.00455 3.34322L7.40883 4.12036L7.16705 7.35843L8.6108 8.2651Z" />
            <path d="M5.06708 10.3375L8.61083 8.26511L7.16708 7.35844L5.06708 8.52415V10.3375Z" :fill="color"
                opacity="1" />
            <path :fill="color" opacity="0.75"
                d="M1.52332 8.26511L5.06707 10.3375V8.52415L2.96707 7.35844L1.52332 8.26511Z" />
            <path :fill="color" opacity="0.5"
                d="M5.06706 2.82513L2.72528 4.12037L2.96706 7.35845L5.06706 8.52415L7.16706 7.35845L7.40883 4.12037L5.06706 2.82513Z" />
            <g style="mix-blend-mode:soft-light">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.00433 3.34604L8.61082 8.2651L5.06707 10.3375L2.79224 9.00716C4.18513 6.52028 6.36686 4.52366 9.00433 3.34604Z"
                    fill="black" />
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.57333 4.12036L1.12958 3.34322L2.63894 3.99083L5.00144 2.69561L5.06708 1.14133L5.13269 2.69561L7.49519 3.99083L9.00458 3.34322L7.62644 4.12036L7.42945 7.36967L8.61083 8.2651L7.28853 7.58824L5.19833 8.71843L5.06708 10.3375L4.93583 8.71843L2.84563 7.58824L1.52333 8.2651L2.77019 7.35844L2.57333 4.12036ZM2.96708 7.35844L5.06708 8.52414L7.16708 7.35844L7.36394 4.12036L5.06708 2.82513L2.77019 4.12036L2.96708 7.35844Z"
                fill="white" />
        </g>
    </svg>
</template>

<script>
export default {
    props: {
        color: { type: String },
        strokeColor: { type: String, default: "black" },
        strokeWidth: { type: Number, default: 0.2467 }
    }
}
</script>