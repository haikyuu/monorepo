# monorepo

Monorepo using lerna - step by step tuto

## Preparation

- you should have lerna installed: `yarn global add lerna`

## [Step 1 - Init our monorepo](https://github.com/haikyuu/monorepo/commit/b3b1e5e6e4407c0b1104cb6a9a001384ad7edabc)

Let's run `lerna init`
![Lerna init](packages/assets/images/lerna_init.png)

Let's take a look at the content of those files:

![Lerna files](packages/assets/images/lerna_init_1.png)

## [Step 2 - let's create our first package](https://github.com/haikyuu/monorepo/commit/d015128d5d36c616b272cd6dd1ecb7c7c5a07e90)

Let's run `lerna create assets --private --yes`. This will create a folder in the packages folder with some default files.

![Lerna files](packages/assets/images/lerna_create_1.png)

## [Step 3 - let's change some things in the assets package]()

- let's add the images of the previous steps in the `images` folder.
- And let's change the `assets.js` to output the number of images.
