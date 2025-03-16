import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "boxicons";

function ArticleSection() {
  return (
    <>
      <div className="p-4">
        <h1 className="font-semibold text-2xl text-[#26231E]">
          Latest articles
        </h1>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="relative">
          <Input type="text" placeholder="Search" />
          <box-icon className="absolute right-2 top-2" name="search"></box-icon>
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
    </>
  );
}

export default ArticleSection;
