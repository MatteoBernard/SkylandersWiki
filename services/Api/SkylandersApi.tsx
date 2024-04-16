
const BASE_URL = 'https://silly-pink-belt.cyclic.app/';
export const getSkylanders = async () => {
    try {
        const response = await fetch(`${BASE_URL}/skylanders`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getSkylandersByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/skylandersByName/${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getElements = async () => {
    try {
        const response = await fetch(`${BASE_URL}/elements`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getElementByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/elements/${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getGames = async () => {
    try {
        const response = await fetch(`${BASE_URL}/games`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getGamesByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/games/${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getFigures = async () => {
    try {
        const response = await fetch(`${BASE_URL}/figures`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};

export const getFiguresByName = async (name: string) => {
    try {
        const response = await fetch(`${BASE_URL}/figures/name/${name}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        return { data: null };
    }
};