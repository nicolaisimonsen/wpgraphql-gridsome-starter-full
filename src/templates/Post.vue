<template>
  <Layout>
    <article>
      <h1 class="title">{{ $page.post.title }}</h1>
      <div class="content" v-html="$page.post.content"></div>
    </article>
  </Layout>
</template>

<page-query>

  query($id: ID!) {
    post(id: $id) {
      title
      content
    }
  }

</page-query>

<script>
export default {
  mounted() {
    console.log(this.$page);
  },
};
</script>

<style scoped>
article {
  padding: 3rem;
}
article h1.title {
}
article .content {
  width: 700px;
  margin: 0 auto;
}
</style>
