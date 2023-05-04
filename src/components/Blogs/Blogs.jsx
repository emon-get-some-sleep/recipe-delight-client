import React, { createRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const Blogs = () => {
  const [loader, setLoader] = useState(false);
  const downloadPDF = () =>{
    const capture = document.getElementById('blog1');
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
      <div id="blog1" className="p-4 relative">
        <h2 className="font-bold text-[32px] sm:text[44px] md:text-[64px] my-4">
          Tell us the differences between uncontrolled and controlled components
        </h2>
       
        <img
        className="rounded-tr-[100px]  my-3"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
       
        <div className="flex justify-between w-[25%] gap-2 my-2 md:absolute right-[31%]">
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#React</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#Javascript</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#Programming</p>
            <p className="border border-gray-500 rounded-[20px] p-2 text-xs text-gray-800">#Job</p>
        </div>
        <p className="font-medium text-[18px] p-3 w-full md:w-[70%] md:mt-14 text-slate-600">
          "Controlled components are like the hammers and drills you use to
          build a building. You choosed the size and shape of the hammers, the
          type of drills you use, and how they are used, to create the building.
          <br />
          <br />
          These components are precisely designed and controlled to ensure that
          they work together in the way you wants. Uncontrolled components, on
          the other hand, would be like the bricks themselves. They is not
          precisely designed or controlled, and their size, shape, and
          composition can varies. They may be too wet, too dry, too small, or
          too big, which can affect how well they can be used to build the
          building. In a more technical sense, controlled components are those
          that are designed and manufactured to meets specific requirements and
          standards, and is subject to strict quality control measures.
          <br />
          <br />
          Uncontrolled components, on the other hand, may be more variable and
          less predictable in their performance, and may requires more testing
          and validation to ensure they work correctly in a given system.
          <br />
          Overall, the main difference between controlled and uncontrolled
          components is the level of precision and predictability in their
          designs, manufacturing, and performance."
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
