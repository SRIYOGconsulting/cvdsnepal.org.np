import React from "react";
import { Heart, MessageSquare, Eye } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Establishment of CVDS Nepal",
    date: "March 15, 2005", // updated full date
    readTime: "2 min read", // updated
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Conflict Victim and Disable Society-Nepal (CVDS-Nepal) was founded with the mission to uplift lives of conflict victims and children with disabilities across Nepal. The organization began with limited resources but strong determination to create social change and provide essential support to marginalized communities.",
    likes: 25,
    views: 300,
    comments: 10,
    author: "Yub Raj Thapa", // updated author
  },
  {
    id: 2,
    title: "First Rehabilitation Initiative",
    date: "June 12, 2007",
    readTime: "3 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "CVDS began providing food, shelter, and medical care to children with physical and mental disabilities. Early rehabilitation efforts focused on creating a safe environment and raising awareness about disability inclusion in Kathmandu and surrounding areas.",
    likes: 18,
    views: 250,
    comments: 6,
    author: "Rehabilitation Team",
  },
  {
    id: 3,
    title: "Cerebral Palsy Support Center",
    date: "September 5, 2010",
    readTime: "4 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Established the ‘Rehabilitation Center for Children with Disability due to Cerebral Palsy (CP)’ project. The center offers physiotherapy, educational support, and personalized care for children, helping them gain independence and improve quality of life.",
    likes: 20,
    views: 280,
    comments: 8,
    author: "Physiotherapy Department",
  },
  {
    id: 4,
    title: "Partnership with Social Welfare Council",
    date: "January 20, 2013",
    readTime: "2 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "CVDS Nepal registered and affiliated with the Social Welfare Council, strengthening its governance, transparency, and credibility. This milestone enabled collaboration with national and international NGOs and opened doors for program expansion.",
    likes: 15,
    views: 220,
    comments: 5,
    author: "CVDS Admin Team",
  },
  {
    id: 5,
    title: "Community Outreach & Awareness",
    date: "July 18, 2016",
    readTime: "3 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Expanded programs to rural municipalities, promoting education, inclusion, and awareness for persons with disabilities. Field surveys, workshops, and community engagement helped reduce stigma and provided essential support to marginalized individuals.",
    likes: 22,
    views: 260,
    comments: 7,
    author: "Community Outreach Team",
  },
  {
    id: 6,
    title: "Educational & Therapeutic Expansion",
    date: "October 30, 2019",
    readTime: "4 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Introduced special education classes, physiotherapy sessions, and vocational workshops. Programs aimed to foster independence and life skills among children with disabilities, while also providing counseling for parents and caregivers.",
    likes: 19,
    views: 240,
    comments: 6,
    author: "Special Education Dept",
  },
  {
    id: 7,
    title: "Digital Empowerment & Advocacy",
    date: "March 22, 2022",
    readTime: "5 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Launched campaigns to raise awareness through online platforms, empowering individuals with disabilities using technology. Digital literacy programs and webinars connected communities and provided learning opportunities nationwide.",
    likes: 21,
    views: 270,
    comments: 9,
    author: "Digital Empowerment Team",
  },
  {
    id: 8,
    title: "Vocational & Livelihood Initiatives",
    date: "February 10, 2024",
    readTime: "5 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Started a long-term project to establish a vocational school supporting 1,000 persons with disabilities and marginalized groups. Training in tailoring, handicrafts, computer literacy, and entrepreneurship aims to promote independence and economic empowerment.",
    likes: 24,
    views: 310,
    comments: 11,
    author: "Vocational Training Dept",
  },
];

const Blog = () => {
  return (
    <div className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-md grayscale hover:grayscale-0 transition duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 w-full space-y-4">
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span>{post.author}</span> {/* updated author */}
                <span>•</span>
                <span>{post.date}</span> {/* full date */}
                <span>•</span>
                <span>{post.readTime}</span> {/* different minute read */}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye size={16} />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare size={16} />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-black">
                  <Heart size={16} />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* View All Posts Button */}
        <div className="text-center pt-8">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
            View All Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
