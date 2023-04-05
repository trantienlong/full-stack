require('dotenv').config()
import 'reflect-metadata'
import express from 'express'
import { DataSource } from 'typeorm'

const main = async () => {
    const AppDataSource = new DataSource({
        type: 'postgres',
        database: 'reddit',
        username: process.env.DB_USERNAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        logging: true,
        synchronize: true

    })
    const app = express()

    app.listen(400,()=>console.log('sever started on port 4000'))
}

main().catch(error =>console.log(error))