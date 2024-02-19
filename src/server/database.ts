/* eslint-disable import/no-mutable-exports */
import { options } from 'joi';
import sqlite3 from 'sqlite3';
import ActiveSession from 'src/models/activeSession';
import { Photo } from 'src/models/photo-entity';

import Quizz from 'src/models/quizz';
import Role from 'src/models/role';
import User from 'src/models/user';
import { Connection, DataSource, createConnection } from 'typeorm';



if (!process.env.SQLITE_PATH) {
  throw new Error('SQLITE_PATH environment variable is not set.');
}

const AppDataSource = new DataSource({
  type: 'sqlite',
    database: process.env.SQLITE_PATH,
    entities: [User, ActiveSession, Role, Quizz],
    migrations: [],
    logging: true,
    synchronize: true
})

export let connection : Connection | undefined;


AppDataSource.initialize()
    .then(async() => {
      const conn = await createConnection(AppDataSource);
      connection = conn;
      console.log(`Database connection success. Connection name: '${conn?.name}' Database: '${conn?.options?.database}'`);
    })
    .catch((error) => console.log(error))

export const PrepareDB = () => new sqlite3.Database(':memory:');
