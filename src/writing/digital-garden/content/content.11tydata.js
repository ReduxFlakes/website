import slugify from '@sindresorhus/slugify';

export default {
    eleventyComputed: {
        eleventyNavigation: {
            parent: (data) => `${slugify(data.digitalGarden.category)}`,
        },
    },
};