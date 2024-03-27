import { MessagesRepository } from "./msg.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // Service is creating its own dependencies
        // DONT DO THIS ON REAL APPS
        this.messagesRepo = new MessagesRepository();
    }

    async fineOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll()
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}