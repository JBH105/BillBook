import {
  Page,
  Text,
  Document,
  StyleSheet,
  View,
  PDFViewer,
} from "@react-pdf/renderer";
import { BiRupee } from "react-icons/bi";
import converter from "number-to-words";
import Invoice from "../Brand/SaleInvoice/Invoice";
import CreateUser from "../Brand/User/Create-User";

const MyPDFDocument = (props) => {
  console.log("🚀 ~ file: CreatePDF.js:5 ~ MyPDFDocument ~ props:", props);

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#ffffff",
      padding: 24,
    },
    text: {
      fontSize: 16,
      marginBottom: 12,
      marginTop: 100,
    },
  });

  return (
    <Document>
      <Page>
        
      </Page>
    </Document>
  );
};

export default MyPDFDocument;
