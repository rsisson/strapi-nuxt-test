<script setup>

const config = useRuntimeConfig();

const { data: articles } = await useFetch(`${config.public.apiBase}/api/articles?populate=*`, {
    headers: {
        'Authorization': `Bearer ${config.apiToken}`,
    }
});

</script>


<template>

    <div>
        <div v-for="article in articles.data" :key="article.id" class="card">
            <nuxt-link :to="`/article/${article.id}`">
                <img class="card-image" :src="`${config.public.apiBase}${article.attributes.Image.data.attributes.url}`" />
                <h1 class="font-bold">{{ article.attributes.Title }}</h1>
                {{ article.attributes.Body }}
            </nuxt-link>
        </div>
    </div>

</template>