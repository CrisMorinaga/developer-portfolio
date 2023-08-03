import { NextRequest, NextResponse } from 'next/server';

const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        const name = (data.lastName?.toLowerCase() || '') + ' ' + (data.firstName?.toLowerCase() || '') as string;
        const email = data.email as string
        const content = data.content as string        

        const transporter = nodemailer.createTransport({
            host : process.env.EMAIL_SERVICE,
            port: 587,
            auth : {
                user : process.env.EMAIL_USERNAME,
                pass : process.env.EMAIL_PASSWORD
            }
        })

        const options = {
            from : `Contact Page ${process.env.EMAIL_USERNAME}`, 
            to: process.env.EMAIL_USERNAME, 
            subject: "Someone is interested in your Portfolio!", 
            text: `Message from: ${name}\nEmail: ${email}\n\n${content}`
        }

        await transporter.sendMail(options)

        return NextResponse.json({message: 'Works', success: true})

    } catch (error) {
        return NextResponse.json({message: 'There was an error.', error: error, success: false})
    }
}
