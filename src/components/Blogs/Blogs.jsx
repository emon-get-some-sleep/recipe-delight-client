import React, { createRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LazyLoad from "react-lazy-load";



const Blogs = ({blog}) => {
  // console.log(blog);
  const {id, title, image, article, tags} = blog;
  const [loader, setLoader] = useState(false);
  const downloadPDF = () =>{
    const capture = document.getElementById(id);
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('blog.pdf');
    })
  }
  return (
    <div>
      <div id={id} className="p-4 relative">
        <h2 className="font-bold text-[32px] sm:text[44px] md:text-[64px] my-4">
          {title}
        </h2>
       
       <LazyLoad>
       <img
        className="rounded-tr-[100px]  my-3"
          src={image}
          alt=""
        />
       </LazyLoad>
       
        <div className="flex justify-between w-[25%] gap-2 my-2 md:absolute right-[31%]">
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#{tags[0]}</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#{tags[1]}</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#{tags[2]}</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#{tags[3]}</p>
        </div>
        <p className="font-medium text-[18px] p-3 w-full md:w-[70%] md:mt-14 text-slate-600">
          {article}
        </p>
       
         
        <button onClick={downloadPDF} disabled={!(loader===false)} className="flex items-center gap-2 border border-red-500 p-3 rounded-lg text-sm">
            <FaFilePdf className="text-red-500" />
            <span className="font-bold">{loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )} as PDF</span>
        </button>
        
   

      
      
      </div>
    </div>
  );
};




export default Blogs;
