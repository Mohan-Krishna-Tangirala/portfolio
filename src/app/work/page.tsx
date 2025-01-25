'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
  const projects = [

    {
      title: "Happy - Sad Classification",
      description: "A binary image classification model designed to classify images into Happy and Sad.",
      image: "/assets/happy-sad.jpg?height=400&width=600",
      tags: ["Python", "TensorFlow", "OpenCV"],
      link: "https://happy-sad-classification-mohan-krishna-tangirala.streamlit.app/"
    },
    {
      title: "Whatsapp Chat Analysis",
      description: "Unlock the Secrets of Your Chats: Analyze, Visualize, and Understand Your WhatsApp Conversations!",
      image: "/whatsapp.png?height=400&width=600",
      tags: ["Python", "Pandas", "Matplotlib"],
      link: "https://whatsapp-chat-analysis-mohan-krishna-tangirala.streamlit.app/"
    },
    {
      title: "Comment Toxicity",
      description: "A Deep Learning Model for Predicting and Classifying Comment Toxicity as Toxic or Non-Toxic.",
      image: "/cmt.png?height=400&width=600",
      tags: ["Python", "TensorFlow", "OpenCV"],
      link: "https://comment-toxicity-mohan-krishna-tangirala.streamlit.app/"
    },
    
    {
      title: "EDA - Bank Marketing",
      description: "Bank marketing EDA involves analyzing customer data to uncover patterns and identify factors influencing behavior, enhancing marketing strategies.",
      image: "/EDA.jpg?height=400&width=600",
      tags: ["Python", "Numpy", "Pandas", "Seaborn"],
      link: "https://bank-marketing-eda-mohan-krishna.streamlit.app/"
    },
    {
      title: "Shop-Nest-Retail PowerBI",
      description: "Bank marketing EDA involves analyzing customer data to uncover patterns and identify factors influencing behavior, enhancing marketing strategies.",
      image: "/powerbi.jpg?height=400&width=600",
      tags: ["PowerBI","EDA"],
      link: "https://app.powerbi.com/groups/me/reports/6ad5bf73-7d28-4a1a-b1e1-cf4eb5101cb7/fa626edc6186b808e0b6?experience=power-bi"
    },


    
    // Add more projects as needed
  ]

  return (
    <main className="pt-32">
      <div className="container mx-auto px-4">
        <h1 className="gothic-heading text-5xl mb-12">My Work</h1>
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </Link>
              </div>
              <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-3xl font-semibold mb-4 cursor-pointer transition-colors hover:text-blue-500">
                    {project.title}
                  </h2>
                </Link>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#333] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
