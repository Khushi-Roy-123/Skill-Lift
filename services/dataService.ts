import { Opportunity, CareerPath, InspirationalPerson } from '../types';

let opportunities: Opportunity[] | null = null;
let careerPaths: CareerPath[] | null = null;
let inspirations: InspirationalPerson[] | null = null;


export const getOpportunities = async (): Promise<Opportunity[]> => {
    if (opportunities) {
        return opportunities;
    }
    try {
        const response = await fetch('/data/opportunities.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch opportunities: ${response.statusText}`);
        }
        const data = await response.json();
        opportunities = data as Opportunity[];
        return opportunities || [];
    } catch (error) {
        console.error("Error loading opportunities data:", error);
        return [];
    }
};

export const getCareerPaths = async (): Promise<CareerPath[]> => {
    if (careerPaths) {
        return careerPaths;
    }
    try {
        const response = await fetch('/data/careers.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch career paths: ${response.statusText}`);
        }
        const data = await response.json();
        careerPaths = data.paths as CareerPath[];
        return careerPaths || [];
    } catch (error) {
        console.error("Error loading career paths data:", error);
        return [];
    }
};

export const getInspirations = async (): Promise<InspirationalPerson[]> => {
    if (inspirations) {
        return inspirations;
    }
    try {
        const response = await fetch('/data/inspirations.json');
        if (!response.ok) {
            // Return empty if file not found, avoiding crash
            return [];
        }
        const data = await response.json();
        inspirations = data as InspirationalPerson[];
        return inspirations || [];
    } catch (error) {
        console.error("Error loading inspirations data:", error);
        return [];
    }
};
