import slugify from '@sindresorhus/slugify';

export const getBlogPosts = collection => {
    return [
        ...collection.getFilteredByGlob("src/writing/blog/content/**/*.md"),
    ].reverse();
};
export const getBlogPostsTags = collectionApi => {
    const tagSet = new Set();
    const posts = collectionApi.getFilteredByGlob("src/writing/blog/content/**/*.md");
    posts.forEach(item => {
        if ("tags" in item.data) {
            let tags = item.data.tags;
            if (typeof tags === "string") {
                tags = [tags];
            }
            for (const tag of tags) {
                if (tag !== "posts" || tag !== "digital-garden") {
                    tagSet.add(tag);
                }
            }
        }
    });

    return Array.from(tagSet).sort();
}

export const getDigitalGardenCollections = collectionApi => {
    const allItems = collectionApi.getFilteredByGlob("src/writing/digital-garden/content/**/*.md").reverse();
    const categoryMap = new Map();

    allItems.forEach(item => {
        const dg = item.data.digitalGarden;

        if (dg && dg.category) {
            const categorySlug = slugify(dg.category);
            if (!categoryMap.has(dg.category)) {
                categoryMap.set(dg.category, {
                    title: dg.category,
                    key: categorySlug,
                    url: `/digital-garden/${categorySlug}/`,
                    description: dg.description,
                    icon: dg.icon,
                    tagSet: new Set(),
                    children: []
                });
            }

            const categoryEntry = categoryMap.get(dg.category);

            const itemTags = item.data.tags || [];

            itemTags.filter(tag => !['digital-garden', 'posts'].includes(tag))
                .forEach(tag => categoryEntry.tagSet.add(tag));

            categoryEntry.children.push({
                title: item.data.title,
                url: item.url,
                description: item.data.description,
                date: item.date,
                status: item.data.status || 1,
                eleventyNavigation: {
                    key: item.data.title,
                    parent: categorySlug
                },
                tags: itemTags
            });
        }
    });

    console.log(Array.from(categoryMap.values()).map(cat => ({
        ...cat,
        tags: Array.from(cat.tagSet).sort(),
    })))

    return Array.from(categoryMap.values()).map(cat => ({
        ...cat,
        tags: Array.from(cat.tagSet).sort(),
    }));
};

export const getDigitalGardenTags = collectionApi => {
    const tagSet = new Set();
    const pages = collectionApi.getFilteredByGlob("src/writing/digital-garden/content/**/*.md");
    pages.forEach(item => {
        if ("tags" in item.data) {
            let tags = item.data.tags;
            if (typeof tags === "string") {
                tags = [tags];
            }
            for (const tag of tags) {
                if (tag !== "posts" || tag !== "digital-garden") {
                    tagSet.add(tag);
                }
            }
        }
    });
    console.log(Array.from(tagSet).sort());
    return Array.from(tagSet).sort();
}

export const getShrines = collection => {
    return collection.getFilteredByGlob("src/extras/shrines/**/index.md");
};

// export const recommended = collectionApi => {
//     return collectionApi.getAll().filter(item => {
//         const markers = item.data.marker;
//         if (Array.isArray(markers))
//             return markers.includes("Recommended");
//         return markers === "Recommended";
//     });
// };