function calcDays(startDate) {
    let start = new Date(startDate);
    let end = new Date();
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.round(daysDifference);
}

export default {
    permalink: (data) => {
        if (data.permalink === false) return false;
        if (typeof data.permalink === "string" && data.permalink !== "") {
            return data.permalink;
        }
        const stem = data.page.filePathStem;
        if (stem === "/index") return "/";

        const segments = stem.split('/').filter(Boolean);

        const isIndexFile = segments[segments.length - 1] === "index";

        if (segments.length > 1) {
            if (isIndexFile && segments.length === 2) {
                return `/${segments[0]}/`;
            }
            segments.shift();
        }

        let finalPath = "/" + segments.join("/") + "/";

        return finalPath.replace(/\/index\/$/, "/");
    },
    eleventyNavigation: (data) => {
        if (data.eleventyNavigation) return data.eleventyNavigation;
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
        if (!data.isRefresh && (data.modified && calcDays(data.modified) < 6)) {
            return true;
        }
        return data.isRefresh || undefined;
    }
}