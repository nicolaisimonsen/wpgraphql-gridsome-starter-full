<template>
  <Layout>
    <section>
      <figure>
        <g-image src="/galen_erso.jpg" alt="Portrait of Galen Erso"></g-image>
        <figcaption>Galen Erso</figcaption>
      </figure>
      <h1>Hi, I'm Galen Erso</h1>
      <p>
        I'm an engineer. I love learning and building cool things.<br />One of
        my more recent projects was the DS-1: Death Star.
      </p>
      <g-link to="/blog">Read my thoughts</g-link>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello World",
  },
  mounted() {},
};
</script>

<style scoped>
section {
  padding: 3rem 1rem 5rem 1rem;
  text-align: center;
}

section h1 {
  font-size: 2rem;
}
section figure {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto;
}

section figure img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

section a {
  margin-top: 20px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  line-height: 1.2;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1.125rem;
  padding: 15px 40px;
  background: rgb(221, 107, 32);
  color: #fff;
  text-decoration: none;
}

section a:hover {
  background: rgb(251, 107, 52);
}
</style>
