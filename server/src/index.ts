import { Faker, fr, LocaleDefinition, pl, ru } from "@faker-js/faker";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.get("/api/generate", async (req: Request, res: Response) => {
  try {
    const region = req.query.region as string;

    const regions: { [key: string]: LocaleDefinition } = {
      "ru": ru,
      "fr": fr,
      "pl": pl
    };


    const data = Array.from({ length: 20 }, () => {
      const faker = new Faker({ locale: regions[region] });

      const firstname = faker.person.firstName();
      const lastname = faker.person.lastName();
      const address = faker.location.city() + " " + faker.location.streetAddress();
      const phone = faker.phone.number();

      return {
        identify: faker.string.uuid(), firstname, lastname, address, phone
      };

    });


    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));


(() => {
  try {
    app.listen(3000, () => {
      console.log("Server listening on port http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
  }

})();


process.on("SIGINT", () => {
  process.exit(0);
});



