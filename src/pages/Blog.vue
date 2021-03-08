<template>
  <Layout>
    <section>
      <article v-for="(post, index) in $static.posts.edges" :key="index">
        <h1>{{ post.node.title }}</h1>
        <p>
          By <span>{{ post.node.author.node.name }}</span> on
          {{ getDate(post.node.date) }}
        </p>
        <div
          v-html="
            post.node.content.length > 100
              ? post.node.content.substring(0, 100) + '[...]'
              : post.node.content
          "
        ></div>
        <g-link :to="`blog/${post.node.uri}`">Read more</g-link>
      </article>
    </section>
  </Layout>
</template>

<static-query>

  query {
    posts {
      edges {
        node {
          title
          content
          uri
          date
          author {
            node {
              nickname
              name
            }
          }
        }
      }
    }
  }

</static-query>

<script>
export default {
  methods: {
    getDate(date) {
      const newDate = new Date(date);
      const newDateString = `${newDate.toLocaleString("default", {
        month: "long",
      })}, ${newDate.getDate()} ${newDate.getFullYear()}`;
      return newDateString;
    },
  },
  mounted() {
    console.log(this.$static);
  },
};
</script>

<style scoped>
section {
  padding: 3rem;
}

section article {
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  background: rgb(255, 255, 255);
  margin: 30px auto;
}

section article h1 {
  margin-bottom: 0;
  line-height: 1;
}
section article p {
  font-size: 0.85em;
}
section article p span {
  color: #777;
}

section article a {
  margin-top: 15px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  border-radius: 0.375rem;
  padding: 15px 40px;
  color: #000;
  text-decoration: none;
  background: rgb(226, 232, 240);
}
section article a:hover {
  color: #fff;
  background: rgb(251, 107, 52);
}
</style>
