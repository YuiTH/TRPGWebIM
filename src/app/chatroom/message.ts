import {User} from '../user';

export class Message {
  public MsgID: number;
  public Publisher: User;
  public MessageText: string;
  constructor(Text: string, Publisher: User) {
      this.MessageText = Text;
      this.Publisher = Publisher;
  }
}
