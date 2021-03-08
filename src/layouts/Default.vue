<template>
  <div class="layout">
    <header class="header">
      <div class="profile">
        <figure>
          <g-image src="/galen_erso.jpg" alt="Portrait of Galen Erso"></g-image>
        </figure>

        <g-link class="home" to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
      <nav class="nav">
        <g-link class="nav__link" to="/blog">Blog</g-link>
      </nav>
    </header>
    <main
      :style="
        `${
          $route.path === '/' || $context.__notFound
            ? 'background-color: rgb(247, 250, 252);'
            : ''
        }`
      "
    >
      <slot />
    </main>
    <footer>
      <p>© {{ new Date().getFullYear() }} Galatic Empire</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
}

.layout header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.layout header .profile {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
}

.layout header .profile a.home {
  margin-left: 15px;
  text-decoration: none;
  color: rgb(226, 232, 240);
  color: #777;
}

.layout header .profile a.home:hover {
  margin-left: 15px;
  text-decoration: none;
  color: #000;
}

.layout header .profile figure {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
}

.layout header figure img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

main {
  padding: 30px;
  background: #fff;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid rgb(226, 232, 240);
}

.nav__link {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  border-radius: 0.25rem;
  padding: 5px 25px;
  color: #000;
  text-decoration: none;
}

.nav__link:hover {
  background: rgb(226, 232, 240);
}

footer {
  padding: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: #777;
}
</style>
