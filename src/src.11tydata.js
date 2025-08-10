export default {
    layout: "base",
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => {
                if (!data.key) {
                    return data.title
                } else {
                    return data.key
                }
            },
            parent: (data) => {
                if (!data.parent) {
                    return null
                } else {
                    return data.parent
                }
            },
            order: (data) => data.order,
            collection: (data) => data.collection,
            marker: (data) => data.marker,
        },
    },
}