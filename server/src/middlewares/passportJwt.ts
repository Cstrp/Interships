import {
  ExtractJwt,
  Strategy as JwtStrategy,
  VerifiedCallback,
} from "passport-jwt";
import { SECRET_KEY } from "../config";
import { PassportStatic } from "passport";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const _passportJwt = (passport: PassportStatic): void => {
  passport.use(
    new JwtStrategy(options, async (payload, done: VerifiedCallback) => {
      try {
        done(null, payload);
      } catch (err) {
        console.log(err);
        return err;
      }
    })
  );
};

export { _passportJwt };
