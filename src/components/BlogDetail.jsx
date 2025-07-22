import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostById } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostById(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-100 mb-4">Post Not Found</h1>
          <p className="text-zinc-400 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-sky-400 text-zinc-950 px-6 py-2 rounded-lg font-medium hover:bg-sky-300 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-zinc-900/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="text-zinc-400 hover:text-zinc-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 rounded-lg bg-zinc-700 p-2"
              />
              <div className="flex-1">
                <span className="text-sm text-zinc-400 uppercase tracking-wide">
                  {post.category}
                </span>
              </div>
              <span className="text-sm text-zinc-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-zinc-400 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center">
                    <span className="text-zinc-950 font-bold text-sm">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-zinc-300">{post.author}</span>
                </div>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-zinc-100 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-zinc-300 prose-ul:mb-6
              prose-li:mb-2
              prose-strong:text-zinc-100 prose-strong:font-semibold
              prose-code:text-sky-400 prose-code:bg-zinc-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700 prose-pre:p-6 prose-pre:rounded-lg
              prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-sky-400 prose-blockquote:pl-6 prose-blockquote:italic
              prose-blockquote:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* You can add related articles here based on category or tags */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <p className="text-zinc-400 text-sm">More articles coming soon...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetail; 