<template>
  <div v-html="$page.page.content"></div>
</template>

<page-query>

query ($id: ID!) {
  page (id: $id) {
    title
    content
  }
}

</page-query>

<script>
export default {
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped></style>
