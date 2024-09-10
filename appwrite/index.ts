import { Client, Account, ID } from "react-native-appwrite";


class AppwriteService {
     client:Client = new Client();
     account:Account
    constructor(){
        this.client.setEndpoint("https://cloud.appwrite.io/v1"),
        this.client.setProject("66dfc410003b5aa86600"),
        this.client.setPlatform("com.rparida1053.notable"),
        this.account = new Account(this.client);
    }
    async loginUser(email:string, password:string) {
        await this.account.createEmailPasswordSession(email, password);
        console.log("Logged in as ", await this.account.get());
        return await this.account.get();
    }
    async registerUser(email:string, password:string, name:string) {
        await this.account.create(email, password, name);
        console.log("Registered as ", await this.account.get());
        return await this.account.get();
    }
    async getUser(){
        return await this.account.get();
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;