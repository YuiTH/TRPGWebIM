import {User} from '../user';

export class Message {
  public static MsgIDCount = 0; // TODO:MsgIDCount
  public MsgID: number;
  public Publisher: User;
  public MessageText: string;
  public Date: Date;
  constructor(Text: string, Publisher: User) {
      this.MessageText = Text;
      this.Publisher = Publisher;
      this.Date = new Date();
      this.MsgID = Message.MsgIDCount + 1; // TODO:MsgID
  }
}
