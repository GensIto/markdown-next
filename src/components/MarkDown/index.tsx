import { useState } from "react";
import PostPreview from "./PostPreview";

export const MarkDown = () => {
  const [markdown, setMarkdown] = useState();

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return (
    <div className='h-screen flex flex-col'>
      <div className='editor'>
        <form>
          <div className='flex justify-between w-screen gap-6'>
            <div className='w-2/4 ml-10'>
              <textarea
                name='md'
                id='md'
                placeholder='Markdownで記述'
                className='markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2'
                value={markdown}
                onChange={setData}></textarea>
            </div>
            <div className='w-2/4 mr-10'>
              <PostPreview markdown={markdown} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
