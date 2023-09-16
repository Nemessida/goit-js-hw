const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

// refs.input.addEventListener('input', _.debounce(onFilterChange,300))

// const listItemsMarkup = createListItemsMarkup(tech);

// refs.list.innerHTML = listItemsMarkup;

// function createListItemsMarkup(items) {
//     return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//     const filter = evt.target.value.toLowerCase();

//     const filteredItems = tech.filter(t=>t.label.toLowerCase().includes(filter),)

//     const listItemsMarkup = createListItemsMarkup(filteredItems);
    
//     refs.list.innerHTML = listItemsMarkup;

// };


refs.input.addEventListener('input', onFilterChange)

const listItemsMarkup = createListItemsMarkup(tech);

refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();
    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
    const listItemsMarkup = createListItemsMarkup(filteredItems);
    refs.list.innerHTML = listItemsMarkup;
}

