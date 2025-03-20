import Image from "next/image";

const founders = [
  {
    name: "Sam",
    role: "Co-founder & Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1518281878818-b69cf2e9fba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhZHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Sid",
    role: "Co-founder & Craftsman",
    imageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const values = [
  {
    title: "Quality Craftsmanship",
    description:
      "We pour our hearts into every piece, ensuring that each item meets our high standards of excellence.",
  },
  {
    title: "Personal Touch",
    description:
      "We believe in creating relationships, not just transactions. Your story matters to us.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "We're committed to using responsibly sourced materials to create beautiful jewelry you can feel good about wearing.",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Story</h1>
      <div className="mb-16">
        <p className="text-gray-700 mb-4">
          SS Jewelry Store was born from a lifelong friendship between Sarah and
          Sam, two passionate jewelry enthusiasts who turned their shared dream
          into reality. What started as a small workshop in 2020 has grown into
          a beloved local jewelry store, known for its unique designs and
          personalized service.
        </p>
        <p className="text-gray-700">
          Our journey has been one of learning, growth, and above all, a
          dedication to creating pieces that resonate with the stories of our
          customers. Every day, we&apos;re inspired by the love, milestones, and
          personal triumphs that our jewelry gets to be a part of.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Meet the Founders
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {founders.map((founder) => (
            <div key={founder.name} className="text-center">
              <Image
                src={founder.imageUrl || "/placeholder.svg"}
                alt={founder.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
