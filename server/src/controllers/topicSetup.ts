import { Server, Socket } from "socket.io";
import Topic from "../models/topic";

export class TopicSetup {
  private socketIO: Server;
  private socket: Socket;

  constructor(socketIO: Server, socket: Socket) {
    this.socket = socket;
    this.socketIO = socketIO;

    this.handleTopicCreate();
    this.handleTopicDelete();
  }

  private handleTopicCreate() {
    this.socket.on("topic:create", async (name: string) => {
      const newTopic = new Topic({ name });
      await newTopic.save();

      this.socketIO.emit("topic:created", newTopic);

      try {
      } catch (err) {
        console.log(`Error while create new topic ${err}`);
      }
    });
  }
  private handleTopicDelete() {
    this.socket.on("", async (topicId: string) => {
      await Topic.findByIdAndDelete(topicId);

      this.socketIO.emit("topic:delete", topicId);
      try {
      } catch (err) {
        console.log(`Error while delete topic ${err}`);
      }
    });
  }
}
