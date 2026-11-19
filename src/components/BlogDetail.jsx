import { useParams, useNavigate } from 'react-router-dom';
import { getBlogPostById } from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostById(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center border border-line-strong bg-surface-2 rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-ink mb-4">Post Not Found</h1>
          <p className="text-ink-muted mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-md border-b border-line">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/#blogspot')}
            className="text-ink-muted hover:text-accent border border-line hover:border-accent/50 px-4 py-2 font-medium rounded-lg flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto border border-line-strong rounded-2xl p-8 bg-surface-2">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 border border-line bg-surface rounded-lg p-2"
              />
              <div className="flex-1">
                <span className="text-sm text-ink-faint tracking-wide">
                  {post.category}
                </span>
              </div>
              <span className="text-sm text-ink-faint">{post.readTime}</span>
            </div>

            <h1 className="headline-1 mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-ink-muted mb-6 leading-relaxed border-l-2 border-accent pl-4">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 border-t border-line pt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/15 border border-accent/30 rounded-lg flex items-center justify-center">
                    <span className="text-accent font-semibold text-sm">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-ink-muted">{post.author}</span>
                </div>
                <span className="text-ink-faint">•</span>
                <span className="text-ink-muted">
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
                    className="px-3 py-1 bg-surface text-ink-muted text-sm border border-line rounded-md"
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
              prose-headings:text-ink prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-line prose-h2:pb-2
              prose-h3:mt-8 prose-h3:mb-4 prose-h3:border-l-2 prose-h3:border-accent prose-h3:pl-4
              prose-p:text-ink-muted prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-ink prose-strong:font-semibold
              prose-code:text-accent prose-code:bg-surface-3 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-surface-3 prose-pre:border prose-pre:border-line
              prose-blockquote:border-l-accent prose-blockquote:bg-surface-3 prose-blockquote:text-ink-muted prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-li:text-ink-muted
              prose-img:rounded-xl prose-img:border prose-img:border-line"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-8 border-t border-line">
          <h2 className="text-2xl font-semibold text-ink mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-surface-2 border border-line rounded-xl p-6">
              <p className="text-ink-muted text-sm">More articles coming soon...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetail;
