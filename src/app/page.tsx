'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="gothic-heading text-5xl mb-4">
            Mohan Krishna Tangirala 
          </h1>
          <p className="text-xl text-gray-400">
          A data enthusiast with a knack for transforming numbers into meaningful narratives, fueling strategic business success and innovation.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="gothic-heading text-4xl">My Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Happy - Sad Classification"
            description="A binary image classification model designed to classify images into Happy and Sad."
            image="/happy-sad.jpg?height=300&width=400"
          />
          
          <ProjectCard
            title="Whatsapp Chat Analysis"
            description="Unlock the Secrets of Your Chats: Analyze, Visualize, and Understand Your WhatsApp Conversations!"
            image="/whatsapp.png?height=350&width=400"
          />
          <ProjectCard
            title="Comment Toxicity"
            description="A Deep Learning Model for Predicting and Classifying Comment as Toxic or Non-Toxic."
            image="/cmt.png?height=300&width=400"
          />
        </div>
        <div className="text-center mt-12">
          <Link
            href="/work"
            className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
          >
            See more →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="border-2 border-white rounded-full p-2">
              <div className="relative rounded-full overflow-hidden aspect-square">
                <Image
                  src="/mohan.jpg?"
                  alt="Mohan Krishna"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="gothic-heading text-4xl mb-6">Who is Mohan Krishna?</h2>
            <p className="text-gray-400 mb-4">
            Mohan Krishna Tangirala is an aspiring Machine Learning Engineer with a deep passion for Artificial Intelligence 
            and Machine Learning. A graduate of Koneru Lakshmaiah University, India, he is currently seeking 
            full-time opportunities to contribute and grow in the field.

            </p>
            <p className="text-gray-400 mb-4">
            With almost a year of experience as a Trainee Decision Scientist at MuSigma, 
            Mohan is deeply committed to continuous learning and expanding his knowledge by exploring new concepts and techniques. 
            His enthusiasm for growth drives him to stay curious in data science and machine learning.
            </p>
            <p className="text-gray-400 mb-8">
            Mohan is enthusiastic about expanding his knowledge and is eager to dive deeper into the world of AI and 
            Machine Learning. Actively seeking opportunities to learn and grow in this dynamic field, he is always open 
            to connecting with others passionate about data. Feel free to reach out and say hello!
            </p>
            <button
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white px-8 py-3 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Get in touch →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Link href="/work" className="project-card block">
      <div className="bg-[#222] rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  )
}

