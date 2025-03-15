import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ArticleSection() {
  return (
    <>
      <div className="p-4">
        <h1 className="font-semibold text-2xl text-[#26231E]">
          Latest articles
        </h1>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <Input type="text" placeholder="Search" />
        <div className="flex flex-col gap-1">
          <Label className="text-[16px]" htmlFor="text">
            Category
          </Label>
          <Input type="text" id="category" placeholder="Highlight" />
        </div>
      </div>
    </>
  );
}

export default ArticleSection;
