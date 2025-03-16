import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import "boxicons";

function ArticleSection() {
  return (
    <>
      {/* Mobile */}
      <article className="md:hidden">
        <div className="p-4">
          <h1 className="font-semibold text-2xl text-[#26231E]">
            Latest articles
          </h1>
        </div>
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
      </article>
      {/* Desktop */}
      <article className="max-md:hidden flex flex-col gap-8">
        <div>
          <span className="font-semibold text-2xl text-[#26231E]">
            Latest articles
          </span>
        </div>
        <div className="flex flex-row justify-between rounded-2xl bg-[#EFEEEB] pt-4 pb-4 pl-6 pr-6">
          <div>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Highlight</MenubarTrigger>
                <MenubarTrigger>Cat</MenubarTrigger>
                <MenubarTrigger>Inspiration</MenubarTrigger>
                <MenubarTrigger>General</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
          <div className="relative">
            <Input type="text" placeholder="Search" />
            <box-icon
              className="absolute top-2 right-2"
              name="search-alt"
            ></box-icon>
          </div>
        </div>
      </article>
    </>
  );
}

export default ArticleSection;
