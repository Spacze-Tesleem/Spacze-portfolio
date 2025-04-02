import Blog from "../../assets/blog1.png";
import Blog1 from "../../assets/blog2.png";
import Blog2 from "../../assets/blog3.png";
import Blog3 from "../../assets/blog4.png";
import Blog4 from "../../assets/blog5.png";

const articles = [
  {
    id: 1,
    image: Blog,
    title: "Learning JavaScript: The Ultimate Guide",
    date: "Mar. 14th, 2025",
  },
  {
    id: 2,
    image: Blog1,
    title: "Never Giving Up",
    date: "Mar. 20th, 2025",
  },
  {
    id: 3,
    image: Blog2,
    title: "The revolution of AI",
    date: "Jan. 14th, 2025",
  },
  {
    id: 4,
    image: Blog3,
    title: "Startup vs corporate: What job suits you best?",
    date: "Apr. 14th, 2022",
  },
  {
    id: 5,
    image: Blog4,
    title: "Thought you loved Python? Wait until you meet Rust",
    date: "Apr. 14th, 2022",
  },
];

export default function BlogGrid() {
  return (
    <div className="blog-main mt-5">
      <div className="section-title text-center">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <p className="text-gray-600 mb-5 mt-2">
          Stay updated with the latest trends and insights in tech.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-6">
          {articles.slice(0, 2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <div>
          <ArticleCard article={articles[2]} fullHeight />
        </div>
        <div className="flex flex-col space-y-6">
          {articles.slice(3, 5).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, fullHeight }) {
  return (
    <a href="/single">
      <div
        className={`relative bg-gradient-to-b from-black/50 to-black/20 text-white rounded-lg overflow-hidden ${
          fullHeight ? "h-full" : "h-64"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        <div className="relative p-6 z-10 flex flex-col justify-end h-full">
          <span className="text-sm text-gray-300">{article.date}</span>
          <h2 className="text-lg font-bold leading-tight mt-2">
            {article.title}
          </h2>
        </div>
      </div>
    </a>
  );
}
