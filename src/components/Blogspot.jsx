import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogPostsByCategory } from "../data/blogPosts";

const Blogspot = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'react', name: 'React' },
    { id: 'css', name: 'CSS' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const filteredPosts = getBlogPostsByCategory(activeTab);

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blogspot" className="section">
      <div className="container">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-12 bg-teal-400 border-2 border-black"></div>
          <h2 className="headline-2">
            Blog & Articles
          </h2>
        </div>

        <p className="mt-3 mb-8 text-black max-w-[70ch] font-mono border-l-4 border-black pl-4 py-2">
          Sharing insights, tutorials, and thoughts about web development, 
          programming, and the latest technologies I&apos;ve been working with.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 text-sm font-bold border-2 border-black font-mono uppercase ${
                activeTab === category.id
                  ? 'bg-teal-400 text-black'
                  : 'bg-white text-black hover:bg-teal-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white border-4 border-black p-6 hover:bg-teal-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-8 h-8 border-2 border-black bg-white p-1"
                />
                <div className="flex-1">
                  <span className="text-xs text-black uppercase tracking-wide font-mono font-bold">
                    {post.category}
                  </span>
                </div>
                <span className="text-xs text-black font-mono font-bold">{post.readTime}</span>
              </div>

              <h3 className="headline-4 mb-3 group-hover:text-black">
                {post.title}
              </h3>

              <p className="text-black text-sm mb-4 line-clamp-3 font-mono">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t-2 border-black pt-4">
                <span className="text-xs text-black font-mono font-bold">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="text-black text-sm font-bold hover:bg-black hover:text-teal-400 px-2 py-1 border-2 border-black font-mono uppercase"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 border-4 border-black bg-white p-8">
            <p className="text-black font-mono font-bold">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogspot; 