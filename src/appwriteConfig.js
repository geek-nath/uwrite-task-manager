import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('647a6e73beaa05950edd'); // Your project ID

export const account = new Account(client);