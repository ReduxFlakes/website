function calcDays(startDate) {
    let start = new Date(startDate);
    let end = new Date();
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.round(daysDifference);
}

export default {
    eleventyNavigation: (data) => {
        if (data.eleventyNavigation) return data.eleventyNavigation;
        // Skip adding navigation for pages that opt out using either
        // `eleventyExcludeFromCollections` (older name) or `excludeFromNav` (templates)
        if (!data.eleventyExcludeFromCollections && !data.excludeFromNav) {
            return {
                key: data.key || data.title,
                parent: data.parent || null,
                order: data.order,
                collection: data.collection,
                marker: data.marker,
                for: data.for
            };
        }
        return false;
    },
    isRefresh: (data) => {
        if (!data.isRefresh && data.modified && calcDays(data.modified) < 16) {
            return true;
        }
        return data.isRefresh || undefined;
    }
}