import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | EarleyBird Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://ebirdtech.com/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen pb-24">
        <div className="pt-[140px] px-4 md:px-10 max-w-[1000px] mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        <article className="pt-8 px-4 md:px-10 max-w-[1000px] mx-auto">
          <header className="text-center pb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-5">
              {post.category}
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance mx-auto max-w-4xl mb-6 text-black">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              <span>{post.date}</span>
              <span>{post.author}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="h-[280px] md:h-[420px] bg-panel-bg rounded-[32px] mb-12 p-8 flex items-center justify-center">
            <div className="w-full h-full rounded-[24px] bg-white-soft flex items-center justify-center">
              <span className="text-black text-5xl md:text-7xl font-black">EB</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 bg-white rounded-[32px] p-8 md:p-10">
              <div className="space-y-6">
                {post.body.map((paragraph) => (
                  <p key={paragraph} className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-black mb-4">Related EarleyBird Pages</h2>
                <div className="flex flex-wrap gap-3">
                  {post.links.map((link) => (
                    <Link key={link.href} href={link.href} className="bg-gray-50 hover:bg-gray-100 text-black rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-black text-white rounded-[32px] p-8 shadow-lg">
                <h2 className="text-xl font-bold mb-3">Author Bio</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Jerel Earley leads EarleyBird Technology Solutions with a focus on practical education, proactive risk prevention, and human-centered technology support for facilities, businesses, and families.
                </p>
              </div>

              <div className="bg-white rounded-[32px] p-8">
                <h2 className="text-xl font-bold text-black mb-4">Share</h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    className="bg-gray-50 text-black font-bold rounded-xl py-3 px-4 text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors text-center"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    className="bg-gray-50 text-black font-bold rounded-xl py-3 px-4 text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors text-center"
                  >
                    X / Twitter
                  </a>
                  <a
                    href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                    className="bg-gray-50 text-black font-bold rounded-xl py-3 px-4 text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors text-center"
                  >
                    Email
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
