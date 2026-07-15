'use client';

import { useMemo, useState } from 'react';
import { blogCategories, blogPosts } from '@/lib/blog-posts';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen pb-24">
        <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
          <span className="inline-flex text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
            EarleyBird Insights
          </span>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Tech Insights, Security Alerts &amp; Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay proactive with practical scam alerts, senior tech and wellness notes, small business technology guidance, and how-to guides for everyday devices.
          </p>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-3xl">
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${selectedCategory === category ? 'bg-black text-white shadow-sm' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="bg-white rounded-[32px] overflow-hidden flex flex-col justify-between group hover:bg-soft-card-2 transition-colors"
                >
                  <div className="h-48 bg-panel-bg relative flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white-soft rounded-[24px] flex items-center justify-center relative z-10">
                      <span className="text-black font-black text-3xl">EB</span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow">
                    <h2 className="text-xl font-bold text-black mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="px-8 pb-8 pt-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center text-xs text-gray-400 font-medium">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <span className="inline-flex text-xs font-bold text-black group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                      Read Full Article
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-[32px] max-w-lg mx-auto">
              <p className="text-gray-400 font-semibold mb-2">No articles found</p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search query or selecting a different category.
              </p>
            </div>
          )}
        </section>

        <section className="max-w-[1200px] mx-auto px-4 mt-16">
          <div className="bg-black text-white rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe for Urgent Security Alerts</h2>
              <p className="text-gray-300 leading-relaxed">
                Get practical scam alerts, technology tips, and client-ready guidance from EarleyBird.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/50 min-w-0 lg:min-w-72"
              />
              <button type="button" className="bg-white text-black font-bold rounded-xl px-6 py-3 text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
