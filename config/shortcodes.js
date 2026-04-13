export const postCard = item => {
    const tags = item.tags ? item.tags.map(tag => `<span class="label">${tag}</span>`).join('') : '';
    const actions = item.actions ? item.actions.map(action => `<a href="${action.url}" class="button">${action.label}</a>`).join('') : '';
    return `<section class="card stack" style="--spacer:0.5em;">
    <h3>${item.title}</h3>
    ${tags ? `<div class="auto-flex">${tags}</div>` : ''}
    <p>${item.description}</p>
    ${actions ? `<div class="auto-flex">${actions}</div>` : ''}
    </section>`;
};

export const externalLink = (url, title) => {
    return `<a href="${url}">${title}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg></a>`;
};

export const ogImage = () => {
    return null;
}