
import React from "react";
import { Heart, MessageSquare, Eye } from "lucide-react";


const posts = [
  {
    id: 1,
    title: "Playing With Patterns",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    likes: 15,
    views: 123,
    comments: 4,
  },
  {
    id: 2,
    title: "Natalia’s Apartment Makeover",
    date: "Mar 21, 2023",
    readTime: "2 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    likes: 12,
    views: 96,
    comments: 2,
  },
  {
    id: 3,
    title: "Open House Staging",
    date: "Mar 21, 2023",
    readTime: "1 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    likes: 5,
    views: 80,
    comments: 1,
  },
  {
    id: 4,
    title: "Minimal Living Spaces",
    date: "Mar 22, 2023",
    readTime: "2 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Explore minimalist design ideas that balance comfort, simplicity, and function — creating peaceful interiors that inspire calm and clarity....",
    likes: 8,
    views: 110,
    comments: 3,
  },
  {
    id: 5,
    title: "Decorating with Contrast",
    date: "Mar 23, 2023",
    readTime: "3 min read",
    image: "/assets/images/projects/placeholder2.png",
    excerpt:
      "Learn how to combine light and dark elements to make your spaces stand out with depth, energy, and elegant balance....",
    likes: 10,
    views: 150,
    comments: 5,
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
                <span>Admin</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
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

