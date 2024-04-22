import { CategoryList, Event } from "../../../types/event.type";

export const generateDistinctCategoryList = (eventData: Event[]): CategoryList[] => {
    const distinctCategories: string[] = [];
    eventData.forEach(event => {
        if (!distinctCategories.includes(event.category)) {
            distinctCategories.push(event.category);
        }
    });

    const distinctList = distinctCategories.map(category => ({
        label: `${category} (${eventData.filter(event => event.category === category).length})`,
        value: category,
    }));

    return [{ label: 'All Events', value: 'all' }, ...distinctList];
};