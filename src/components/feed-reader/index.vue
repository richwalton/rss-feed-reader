<template>
  <div>
      <h1 class="mb-6">Feed Reader</h1>
      <div class="feed-container">
        <FeedList />
        <ArticleList />
        <SingleArticle />
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
import FeedList from './FeedList.vue'
import ArticleList from './ArticleList.vue'
import SingleArticle from './SingleArticle.vue'


export default {
    components: {FeedList, ArticleList, SingleArticle},
    data() {
        return {
            feeds: []
        }
    },

    created() {
        this.getFeeds()
    },

    methods: {
        async getFeeds() {
            let { data } = await axios.get('/.netlify/functions/feeds')
            this.feeds = data
            this.selectedFeed = data[0]
            this.articles = this.selectedFeed.items
            this.selectedArticle = this.articles[0]

        }
    }

}
</script>

<style>
.feed-container {
    display: grid;
    grid-template-columns: 15% 15% auto;
    grid-gap: 28px;

}
</style>