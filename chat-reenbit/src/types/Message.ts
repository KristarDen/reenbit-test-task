import { User } from "./User";

interface IMessage{
    transmitter: User;
    receiver: User;
    text: string;
    date: number;
}
class Message implements IMessage{
    transmitter: User;
    receiver: User;
    text: string;
    date: number;
    constructor(
        transmitter: User,
        receiver: User,
        text: string,
        date: number,
    ){
        this.transmitter = transmitter;
        this.receiver = receiver;
        this.text = text;
        this.date = date;
    }
} 
export { Message };
export type { IMessage };