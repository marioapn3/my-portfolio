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
          <div className="w-1 h-10 bg-accent rounded-full"></div>
          <h2 className="headline-2">Blog &amp; Articles</h2>
        </div>

        <p className="mt-3 mb-8 text-ink-muted max-w-[70ch] leading-relaxed border-l-2 border-accent pl-4 py-1">
          Sharing insights, tutorials, and thoughts about web development,
          programming, and the latest technologies I&apos;ve been working with.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                activeTab === category.id
                  ? 'bg-accent/10 text-accent border-accent/30'
                  : 'bg-surface-2 text-ink-muted border-line hover:text-ink hover:border-line-strong'
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
              className="group bg-surface-2 border border-line rounded-2xl p-6 hover:border-accent/40 hover:bg-surface-3 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-8 h-8 border border-line bg-surface rounded p-1"
                />
                <div className="flex-1">
                  <span className="text-xs text-ink-faint tracking-wide">
                    {post.category}
                  </span>
                </div>
                <span className="text-xs text-ink-faint">{post.readTime}</span>
              </div>

              <h3 className="headline-4 mb-3">
                {post.title}
              </h3>

              <p className="text-ink-muted text-sm mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs text-ink-faint">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <button
                  onClick={() => handleReadMore(post.id)}
                  className="text-accent text-sm font-medium hover:bg-accent/10 px-2 py-1 border border-accent/30 rounded-md transition-colors"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 border border-line bg-surface-2 rounded-xl p-8">
            <p className="text-ink-muted">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogspot;
