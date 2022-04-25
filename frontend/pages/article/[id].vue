<script setup>

// import type { Article } from '~/types'
// import type { Strapi4Response } from '@nuxtjs/strapi'

const route = useRoute()
const config = useRuntimeConfig();

const {data: article} = await useFetch(`${config.public.apiBase}/api/articles/${route.params.id}?populate=*`, {
    headers: {
        'Authorization': `Bearer ${config.apiToken}`,
    }
});

</script>


<template>

    <div>
        <img class="card-image" :src="`${config.public.apiBase}${article.attributes.Image.data.attributes.url}`" />
        <h1 class="font-bold">{{ article.attributes.Title }}</h1>
        {{ article.attributes.Body }}
        <nuxt-link :to="`/index`">Back</nuxt-link>
    </div>

</template>