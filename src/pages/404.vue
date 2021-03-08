<template>
  <Layout>
    <section class="404">
      <figure>
        <g-image src="/trooper.jpg" alt="Photo of a Stormtrooper"></g-image>
        <figcaption>A confused Stormtrooper</figcaption>
      </figure>
      <h1>This is not the page you're looking for</h1>
      <p>Seriously - it's not.<br />There's nothing to see here.</p>
      <g-link to="/">Move along</g-link>
    </section>
  </Layout>
</template>

<script>
export default {};
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
