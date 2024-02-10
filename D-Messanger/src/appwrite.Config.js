import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = "65c73c2fe693da09f23c"
export const DATABASE_ID = "65c73d89a01c64c8e73f"
export const COLLECTION_ID_MESSAGES = "65c73db397bdb1b06d55"

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65c73c2fe693da09f23c');

export const account = new Account(client);
export const databases = new Databases(client);

export default client