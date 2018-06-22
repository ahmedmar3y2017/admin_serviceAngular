export interface Admin {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: number;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    postalCode: number;
    lastActive: Date;
    registerDate: Date;
    role: string;
    username: string;
    adminLevel: string;
    available: boolean;
}