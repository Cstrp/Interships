export interface ServerToClient {
  chat: (evt: any) => void;
}

export interface ClientToServer {
  chat: (evt: any) => void;
  join: (evt: { user: any; room: string }) => void;
  leave: (evt: { user: any; room: string }) => void;
}
