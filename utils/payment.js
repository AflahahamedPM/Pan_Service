import { v4 as uuidv4 } from "uuid";
import sha256 from "crypto-js/sha256";
import axios from "axios";

const pay = async () => {
  const merchantTranscationId = "MT-" + uuidv4().toString(36).slice(-6);
  console.log("merchant id - ", merchantTranscationId);

  const payload = {
    merchantId: "PGTESTPAYUAT86",
    merchantTransactionId: merchantTranscationId,
    merchantUserId: "MUID" + uuidv4().toString(36).slice(-6),
    amount: 10000,
    redirectUrl: `http://localhost:3000/api/status/${merchantTranscationId}`,
    redirectMode: "POST",
    callbackUrl: `http://localhost:3000/api/status/${merchantTranscationId}`,
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const dataPayload = JSON.stringify(payload);
  console.log(payload);
  const dataBase64 = Buffer.from(dataPayload).toString("base64");
  console.log(dataBase64);

  const fullURL =
    dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_PHONEPE_SALT_KEY;
  const dataSha256 = sha256(fullURL);

  const checksum =
    dataSha256 + "###" + process.env.NEXT_PUBLIC_PHONEPE_SALT_INDEX;
  console.log("c ==== ", checksum);

  const response =  await axios.post(
    "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
    {
      request: dataBase64,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
    }
  );
    
  const redirectUrl = response.data?.data?.instrumentResponse?.redirectInfo?.url
  return redirectUrl
  
};

export default pay