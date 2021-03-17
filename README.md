# WPGraphQL-Gridsome Starter (full)

This a simple starter I made for a recent blog post on [WPGraphQL.com](https://www.wpgraphql.com/blog),

[Getting started with WPGraphQL and Gridsome](https://www.wpgraphql.com/2021/03/16/getting-started-with-wpgraphql-and-gridsome)

Go read it or just fire this bad boy up 🤘

> full version: everything except a valid graphql endpoint.

## Preview

![alt text](https://wpgraphql-gridsome-starter-preview.netlify.app/walkthrough.gif "Finished project as a GIF")

https://wpgraphql-gridsome-starter-preview.netlify.app/

## Install

The very first thing is to install the Gridsome CLI

```shell
npm install --global @gridsome/cli
```

Navigate to your desired project folder and type in

```shell
gridsome create my-personal-site https://github.com/nicolaisimonsen/wpgraphql-gridsome-starter-stripped.git
```

Now move into the project directory

```shell
cd my-personal-site
```

In your code editor, go to **gridsome.config.js** and replace 
the gridsome-source-graphql options.url to your own url. 

```javascript
module.exports = {
  siteName: "Galen Erso",
  plugins: [
    {
      use: "gridsome-source-graphql",
      options: {
        url: "http://your-site/graphql",
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
      },
    },
  ],
};
````

Then start the local develoment

```shell
gridsome develop
```
