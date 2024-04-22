interface Address {
    addressLine1: string;
    city: string;
    stateOrUT: string;
    pincode: string;
    country: string;
}

interface Geolocation {
    latitude: number;
    longitude: number;
}

export interface Venue {
    address: Address;
    geolocation: Geolocation;
    name: string;
    _id: string;
}

interface ExtraInfo {
    title: string;
    text: string;
    imageUrl: string;
    _id: string;
}

export interface Faq {
    question: string;
    answer: string;
    _id?: string;
}

export interface Event {
    _id: string;
    name: string;
    slug: string;
    description: string;
    category: string;
    eventType: string;
    city: string;
    venue: Venue | null;
    verticalCoverImage: string;
    horizontalCoverImage: string;
    extraInfo: ExtraInfo[];
    terms: string[];
    safetyMesures: string[];
    faqs: Faq[];
    shareImages: string[];
    tags: string[];
    soldOut: boolean;
    isFeatured: boolean;
    performances: any[];
    showStartDate: string;
    showStartTime: string;
    showEndDate: string;
    showEndTime: string;
    dateTimeString: string;
    priceDisplayString: string;
    locationDisplayString: string;
    likesCount: number;
    eventStatus: string;
    __v: number;
}

export interface EventApiResponse {
    result: string;
    data: Event[];
};

export interface EventBySlugApiResponse {
    result: string;
    data: Event;
};

export interface CategoryList {
    label: string;
    value: string;
};