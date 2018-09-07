export class Message {
  constructor(
    public MsgId: number,
    public PublisherId: number,
    public PublisherName: string,
    public MessageText: string,
    public time: Date,
  ) {

  }
}
