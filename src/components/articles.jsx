import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "boxicons";
import BlogCard from "./blog-card";
import { blogPosts } from "@/data/blogPosts";

function ArticleSection() {
  return (
    <>
      {/* Mobile */}
      <article className="md:hidden">
        {/* Latest Articles */}
        <div className="p-4">
          <h1 className="font-semibold text-2xl text-[#26231E]">
            Latest articles
          </h1>
        </div>
        {/* Search Box */}
        <div className="flex flex-col p-4 gap-4">
          <div className="relative">
            <Input type="text" placeholder="Search" />
            <box-icon
              className="absolute right-2 top-2"
              name="search"
            ></box-icon>
          </div>
          <div className="flex flex-col gap-1">
            <Label className="text-[16px]" htmlFor="text">
              Category
            </Label>
            <div className="relative">
              <Input type="text" id="category" placeholder="Highlight" />
              <box-icon
                className="absolute right-2 top-2"
                name="chevron-down"
              ></box-icon>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="pt-6 pb-20 px-4">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((blogPostsObj) => (
              <BlogCard key={blogPostsObj.id} blogPostsObj={blogPostsObj} />
            ))}
          </div>
        </div>
      </article>
      {/* Desktop */}
      <article className="max-md:hidden flex flex-col gap-8">
        {/* Latest Articles */}
        <div>
          <span className="font-semibold text-2xl text-[#26231E]">
            Latest articles
          </span>
        </div>
        {/* Search Box */}
        <div className="flex flex-row justify-between rounded-2xl bg-[#EFEEEB] pt-4 pb-4 pl-6 pr-6">
          <div>
            <Tabs>
              <TabsList className="gap - 2">
                <TabsTrigger value="highlight">Highlight</TabsTrigger>
                <TabsTrigger value="cat">Cat</TabsTrigger>
                <TabsTrigger value="inspiration">Inspiration</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="relative">
            <Input type="text" placeholder="Search" />
            <box-icon
              className="absolute top-2 right-2"
              name="search-alt"
            ></box-icon>
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-2 gap-5">
          {blogPosts.map((blogPostsObj) => (
            <BlogCard key={blogPostsObj.id} blogPostsObj={blogPostsObj} />
          ))}
        </div>
      </article>
    </>
  );
}

export default ArticleSection;
