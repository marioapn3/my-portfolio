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

        <h2 className="headline-2">
        Blog & Articles
        </h2>

        <p className="mt-3 mb-8 text-zinc-400 max-w-[70ch]">
        Sharing insights, tutorials, and thoughts about web development, 
        programming, and the latest technologies I&apos;ve been working with.
        </p>


        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-sky-400 text-zinc-950'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300'
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
              className="group bg-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-800/70 transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-8 h-8 rounded-lg bg-zinc-700 p-1"
                />
                <div className="flex-1">
                  <span className="text-xs text-zinc-400 uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <span className="text-xs text-zinc-500">{post.readTime}</span>
              </div>

              <h3 className="headline-4 mb-3 group-hover:text-sky-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="text-sky-400 text-sm font-medium hover:text-sky-300 transition-colors"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogspot; 