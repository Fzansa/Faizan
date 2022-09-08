import React from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const SingleItem = (props) => {
    const {img,title,ingredient,shareAs} = props;
    
   function printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
   
  return (
    <>
        <div className="singleCard">
        <h1  className='singleHeading '>{title}</h1>
        <div className="row">
        <img className='SingleImg col img-fluid' src={img} alt="img" />
        <div className="col" id='divToPrint'>
            <h3 className='singleSubH'>All <mark>Ingredient</mark> for {title}</h3>
        {
            ingredient.map(res => <p className='singleIngradient'>{res}</p>)
        }
        </div>
        </div>
       
    </div>
      <div>
        <a target="_blank" href={shareAs} className="know-more">Know More</a>
        <button className='btn btn-success btn-large px-5 py-3 mx-2 fs-5 btn-responsive' onClick={printDocument}>Download Ingradient</button>
      </div>
    </>
  )
}

export default SingleItem