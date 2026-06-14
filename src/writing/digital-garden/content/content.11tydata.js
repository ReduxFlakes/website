import slugify from '@sindresorhus/slugify';

export default {
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => `${slugify(data.title)}`,
            parent: (data) => `${slugify(data.digitalGarden.category)}`,
        },
    },
};