<template>
    <v-container class="home-videos">
        <div class="d-flex align-center justify-space-between mb-4">
            <div class="text-h6">Videos</div>
            <NuxtLink to="#" class="text-decoration-underline text-caption black--text">View All</NuxtLink>
        </div>

        <div class="home-videos-list overflow-x-auto">
            <div @click="playVideo(item)" v-for="(item, idx) in videos" :key="idx" class="home-videos-list-item">
                <v-btn text color="white"><v-icon class="text-h3">mdi-play-circle-outline</v-icon></v-btn>
                <img :src="item.thumbnail" alt="Video" class="rounded-xl">
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            videos: [
                { src: "/video.mp4", thumbnail: "/video-thumbnail.webp" },
                { src: "/video.mp4", thumbnail: "/video-thumbnail.webp" },
                { src: "/video.mp4", thumbnail: "/video-thumbnail.webp" },
                { src: "/video.mp4", thumbnail: "/video-thumbnail.webp" },
                { src: "/video.mp4", thumbnail: "/video-thumbnail.webp" },
            ]
        }
    },
    methods: {
        playVideo(video) {
            this.$modal({ component: "VideoDialog", props: { video, fullscreen: false, width: "100%" } })
        }
    }
}
</script>