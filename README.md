# Eleventy Starter

> Extremely minimal Eleventy starter to kickstart a simple multi-page site / a nearly opinionless foundation to continue building on.

### Steps for generating your own landing with this template

1. [Generate a repo from this template](https://github.com/iuliangeorgepetre/landing-starter/generate) which will copy this project into your own new repo. _Note: You must be signed in to GitHub for this link to work_, else [visit the repo directly](https://github.com/iuliangeorgepetre/landing-starter/).

1. Once cloned, run `npm install` to install 11ty. Then run `npm start` to run 11ty in `serve` mode which will create a local server including hot-reload via BrowserSync.

   - Use `npm run build` to run a production version.

1. Open `src/_data/meta.js` and adjust the values to your details, like sitename, and add other metadata as needed.

1. Edit `index.html` to change the home page, and then create content within `src/pages` using any templating format you prefer to add content.

## Before Go-live checklist

- Make sure you change GlowebStarter to your site name of choice with replace-all
- Make sure you change the email settings in `config-email.php`, to point to the correct addresses and use correct credentials.
- Review and correct the readme if needed
- Check that the images and other assets are compressed and optimised

## How to publish

- Run `npm run build` in the console
- Copy the `_site` folder with SFTP to your server of choice

## To do

- Add netlify support for easing the pain of copying files to servers with SFTP at any small modification
- Add scss support
- Optimize the form-sending process
- You may want to swap to [use Sass instead of CSS](https://github.com/5t3ph/11ty-sass-skeleton) and include minifying/autoprefixing (you can copy the relevant bits from the config and the package scripts/dependencies)
- Review [additional common config customizations](https://11ty.rocks/eleventyjs/)
- Check out some [quick tips](https://11ty.rocks/tips/) to learn more about using Eleventy's features
