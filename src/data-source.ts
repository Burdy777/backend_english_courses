import { DataSource } from 'typeorm';
import ActiveSession from "./models/activeSession";
import Quizz from "./models/quizz";
import Role from "./models/role";
import User from "./models/user";

export const options = new DataSource({
    type: 'sqlite',
    database: process.env.SQLITE_PATH,
    entities: [User, ActiveSession, Role, Quizz],
    migrations: [],
    logging: true,
    synchronize: true
})