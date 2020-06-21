export interface Configuration {
    apiKey: string | undefined;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

export interface AdditionalData {
    displayName?: string;
}
