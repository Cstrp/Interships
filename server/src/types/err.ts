export interface Err extends Error {
  status: number;
  statusCode: number;
  message: string;
}
