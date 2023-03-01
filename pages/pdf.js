import { pdf } from "@react-pdf/renderer";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyPDFDocument from "../components/Pdfdata/CreatePDF";

const MyPage = () => {
  const invoice = useSelector((state) => state.PDFInvoice.pdfInvoice);
  console.log("🚀 ~ file: pdf.js:7 ~ MyPage ~ invoice:", invoice);
  const [url, setUrl] = useState();

  const downloadPDF = async () => {
    const blob = await pdf(<MyPDFDocument InvoiceData={invoice} />).toBlob();
    const url = URL.createObjectURL(blob);
    setUrl(url);
    window.open(url, "_blank");
  };

  return (
    <div>
      <h1>My Page</h1>
      <button onClick={downloadPDF}>Download PDF</button>
      <>{url}</>
    </div>
  );
};

export default MyPage;
