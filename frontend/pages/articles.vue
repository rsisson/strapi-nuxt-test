<script setup lang="ts">

import type { Article } from '~/types'
import type { Strapi4Response } from '@nuxtjs/strapi'

const { find } = useStrapi4()
const config = useRuntimeConfig()

const articles = await find<Strapi4Response<Article>>('articles', {
    populate: '*',
})

</script>



<template>

    <div>
        <div v-for="article in articles.data" :key="article.id" class="card">
            <nuxt-link :to="`/article/${article.id}`">
                <img class="card-image" :src="`${config.public.strapi.url}${article.attributes.Image.data.attributes.url}`" />
                <h1 class="font-bold">{{ article.attributes.Title }}</h1>
                {{ article.attributes.Body }}
            </nuxt-link>
        </div>
    </div>

</template>