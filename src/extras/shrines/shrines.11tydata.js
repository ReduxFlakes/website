export default {
    shrine: true,
    eleventyComputed: {
        layout: (data) => "/shrines/" + data.shrineId + ".njk",
        eleventyNavigation: {
            parent: 'Shrines',
        },
    },
}