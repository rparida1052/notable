import { Client, Account, ID, Databases } from "react-native-appwrite";
import appwriteConfig from "./config";


class AppwriteService {
     client:Client = new Client();
     account:Account
     database:Databases;
    constructor(){
        this.client.setEndpoint("https://cloud.appwrite.io/v1"),
        this.client.setProject("66dfc410003b5aa86600"),
        this.client.setPlatform("com.rparida1053.notable"),
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
    }
    async loginUser(email:string, password:string) {
        await this.account.createEmailPasswordSession(email, password);
        console.log("Logged in as ", await this.account.get());
        return await this.account.get();
    }

    async logoutUser(){
        await this.account.deleteSession("current");
        console.log("Logged out");
    }
    async registerUser(email:string, password:string, name:string) {
        await this.account.create(email, password, name);
        console.log("Registered as ", await this.account.get());
        return await this.account.get();
    }
    async getUser(){
        return await this.account.get();
    }
    async addNote(title:string,description:string){
        try{
            const response = await this.database.createDocument(appwriteConfig.databaseId,appwriteConfig.noteCollectionId,ID.unique(),{noteTitle:title,noteDesc:description,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()});
            console.log(response);
            return response;
        }catch(error){
            console.log("Error adding note",error);
            throw error;
        }
    }

    async fetchNotes(){
        try{
            const response = await this.database.listDocuments(appwriteConfig.databaseId,appwriteConfig.noteCollectionId);
            console.log(response);
            return response;
        }catch(error){
            console.log("Error fetching notes",error);
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;