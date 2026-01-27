import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostById } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostById(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center border-4 border-black">
        <div className="text-center border-4 border-black p-8 bg-teal-400">
          <h1 className="text-2xl font-bold text-black mb-4 font-mono uppercase">Post Not Found</h1>
          <p className="text-black mb-6 font-mono">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-black text-teal-400 px-6 py-2 border-2 border-black font-bold hover:bg-teal-400 hover:text-black font-mono uppercase"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/#blogspot')}
            className="text-black hover:bg-teal-400 border-2 border-black px-4 py-2 font-bold font-mono uppercase flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto border-4 border-black p-8 bg-white">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 border-2 border-black bg-white p-2"
              />
              <div className="flex-1">
                <span className="text-sm text-black uppercase tracking-wide font-mono font-bold">
                  {post.category}
                </span>
              </div>
              <span className="text-sm text-black font-mono font-bold">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight font-mono uppercase">
              {post.title}
            </h1>

            <p className="text-xl text-black mb-6 leading-relaxed font-mono border-l-4 border-black pl-4">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 border-t-4 border-black pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-400 border-2 border-black flex items-center justify-center">
                    <span className="text-black font-bold text-sm font-mono">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-black font-mono font-bold">{post.author}</span>
                </div>
                <span className="text-black font-bold">•</span>
                <span className="text-black font-mono">
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
                    className="px-3 py-1 bg-white text-black text-sm border-2 border-black font-mono font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-black prose-headings:font-bold prose-headings:font-mono prose-headings:uppercase
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-2
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:border-l-4 prose-h3:border-black prose-h3:pl-4
              prose-p:text-black prose-p:leading-relaxed prose-p:mb-6 prose-p:font-mono
              prose-ul:text-black prose-ul:mb-6 prose-ul:font-mono prose-ul:list-none prose-ul:border-2 prose-ul:border-black prose-ul:p-4
              prose-li:mb-2 prose-li:before:content-['>'] prose-li:before:text-teal-400 prose-li:before:font-bold prose-li:before:mr-2
              prose-strong:text-black prose-strong:font-bold prose-strong:bg-teal-400 prose-strong:px-1
              prose-code:text-black prose-code:bg-white prose-code:px-2 prose-code:py-1 prose-code:border-2 prose-code:border-black prose-code:font-mono prose-code:font-bold
              prose-pre:bg-white prose-pre:border-4 prose-pre:border-black prose-pre:p-6 prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-teal-400 prose-blockquote:py-2 prose-blockquote:pr-2
              prose-blockquote:text-black prose-blockquote:font-mono prose-blockquote:font-bold"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t-4 border-black">
          <h2 className="text-2xl font-bold text-black mb-6 font-mono uppercase">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* You can add related articles here based on category or tags */}
            <div className="bg-white border-4 border-black p-6">
              <p className="text-black text-sm font-mono font-bold">More articles coming soon...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetail; 