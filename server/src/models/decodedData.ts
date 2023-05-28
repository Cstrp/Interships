import { JwtPayload } from 'jsonwebtoken';

export interface DecodedData extends JwtPayload {
  userId: string;
  token: string;
}
