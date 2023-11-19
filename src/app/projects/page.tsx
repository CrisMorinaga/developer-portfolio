'use client'
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import {FeaturedProject, Project} from "@/components/Projects/ProjectCards";

import smartbrain from "@/public/Projects/SmartBrain.webp"
import tictactoe from "@/public/Projects/TicTacToe.webp"
import chatroom from "@/public/Projects/ChatRoom.webp"

const featuredProject = {
    title: 'SmartBrain',
    img: smartbrain,
    type: "Featured Project",
    summary: "A website that uses Clarifai API to scan an image and detect faces on it.",
    backend: ['Clarifai','Flask', 'SQLAlchemy', 'Flask-login', 'Werkzeug Security'],
    frontend: ['React', 'Next.js 13', 'Tailwind', 'Zod', 'Next-auth', 'Axios', 'Shadcn-UI'],
    database: ['PostgreSQL'],
    cloudStorage: ['Firebase'],
    link: "https://smartbrai.vercel.app/",
    github: "https://github.com/CrisMorinaga/SmartBrain"
}

const project1 = {
    title: 'AI Tic-Tac-Toe',
    img: tictactoe,
    type: "Python Project",
    summary: "A Tic-Tac-Toe game build using Pygame with an 3 level difficulty AI.",
    link: "https://github.com/CrisMorinaga/Tic-Tac-Toe",
    github: "https://github.com/CrisMorinaga/Tic-Tac-Toe"
}
const project2 = {
    title: 'Chat Room',
    img: chatroom,
    type: "Python - React/Next.Js 13 Project",
    summary: "A chat room built using Flask-Socketio and React/Next.js.",
    link: "https://github.com/CrisMorinaga/ChatRoom",
    github: "https://github.com/CrisMorinaga/ChatRoom"
}

export default function Projects() {
    
    return (
      <>
        <div className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Check my projects" className="mb-16"/>
                <div className="grid grid-cols-12 xl:gap-24 lg:gap-16 md:gap-10 gap-5">
                    <div className="col-span-12">
                        <FeaturedProject
                            title={featuredProject.title}
                            img={featuredProject.img}
                            type={featuredProject.type}
                            backend={featuredProject.backend}
                            frontend={featuredProject.frontend}
                            database={featuredProject.database}
                            cloudStorage={featuredProject.cloudStorage}
                            summary={featuredProject.summary}
                            link={featuredProject.link}
                            github={featuredProject.github}
                        />
                    </div>
                    <div 
                    className="md:col-span-6 col-span-12 m-4">
                        <Project 
                        title={project1.title}
                        img={project1.img}
                        imgClassName={'lg:!h-auto md:!h-48 sm:!h-36 !h-32'}
                        type={project1.type}
                        link={project1.link}
                        github={project1.github}
                        />
                    </div>
                    <div 
                    className="md:col-span-6 col-span-12 m-4">
                        <Project 
                        title={project2.title}
                        img={project2.img}
                        imgClassName={'lg:!h-auto md:!h-48 sm:!h-36 !h-32 lg:mt-[30%] rounded-xl'}
                        type={project2.type}
                        link={project2.link}
                        github={project2.github}
                        />
                    </div>
                </div>
            </Layout>
        </div>
      </>
    )
  }
  