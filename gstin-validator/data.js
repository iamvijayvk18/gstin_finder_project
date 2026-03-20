const companies = [
  {
    gstin: "33AAACT2838H1ZL",
    name: "Tata Consultancy Services",
    info: "Verified via GST portal; OMR office",
    address: "456 Anna Salai, Teynampet, Chennai - 600018"
  },
  {
    gstin: "33AAACD3312M6ZV",
    name: "Cognizant Technology Solutions India Pvt Ltd",
    info: "IT services giant, Chennai knowyourgst",
    address: "SDB4 1 to 14 flrs, Madras Export Processing (MEPZ-SIP cot)"
  },
  {
    gstin: "33AAACL1681P3Z8",
    name: "LTIMindtree Limited",
    info: "IT consulting, merger of LTI & Mindtree piceapp",
    address: "Chennai registered"
  },
  {
    gstin: "33AAECI2431E2Z5",
    name: "Information Technology (Intlosol Works Pvt Ltd)",
    info: "Private Ltd, registered Jul 2017 piceapp",
    address: "Chennai"
  },
  {
    gstin: "33AAACC1756E2Z5",
    name: "TLG India Private Limited",
    info: "Chennai-based IT microvistatech",
    address: "Ground & First Floor, Old No 119 New No 269 Rayana Square, TTK Road, Alwarpet"
  },
  {
    gstin: "33AAACP6597N1ZT",
    name: "Best IT World India Pvt Ltd",
    info: "Private Ltd, registered Jul 2017 microvistatech",
    address: "2nd and 3rd Floor, 50/68 Leader Palace, Swamy Pandaram Street, Chintadripet, Chennai-600002"
  },
  {
    gstin: "33AAACN0500F2ZC",
    name: "Newgen Software Technologies Limited",
    info: "Public Ltd, active returns scribd",
    address: "D-17, Plot No.13, 4th Main Road, SIPCOT IT Park, Siruseri, Chennai-603103"
  },
  {
    gstin: "33AAACF2351C1ZE",
    name: "Financial Software Systems P Ltd",
    info: "Software development microvistatech",
    address: "Ground Floor, No.42 Sharada Apartment, 3rd Main Road, Gandhi Nagar, Adyar, Chennai-600020"
  },
  {
    gstin: "33AAACI8904N1ZD",
    name: "Firstsource Solutions Ltd",
    info: "BPO/IT services knowyourgst",
    address: "ETA Technopark Block 4 5th Floor 33, Old Mahabalipuram Road, Chingleput"
  },
  {
    gstin: "33BGNPM0445F1ZL",
    name: "Sun Computers (Akkini Murugan Prop.)",
    info: "Retail IT, active gstzen",
    address: "Madurai jurisdiction"
  },
  {
    gstin: "33AADCC3694E1ZU",
    name: "Shyam Spectra Pvt Ltd (TN)",
    info: "Tech/IT spectra",
    address: "Chennai-600034 area"
  },
  {
    gstin: "33AAACE4809L2ZO",
    name: "Electronics Corporation of India Ltd",
    info: "IT/electronics microvistatech",
    address: "Chennai"
  },
  {
    gstin: "33AACCT0883D1ZN",
    name: "Tamil Nadu State Transport Corporation (Madurai) Ltd",
    info: "Government STU, public limited",
    address: "18 Bye Pass Road, Madurai Railway Colony, Madurai-625010"
  },
  {
    gstin: "33AAJCM0143Q1ZB",
    name: "Madurai Trans Carrier Limited",
    info: "Cargo carrier",
    address: "Auras Corporate, 98 A Dr Radhakrishnan Salai, Mylapore (Madurai ops)"
  },
  {
    gstin: "33AAXPS4651E2ZB",
    name: "Gokul Transport Company",
    info: "Proprietorship, active returns",
    address: "178/1-A, Madurai Main Road, Nagamangalam, Tiruchirappalli (Madurai routes)"
  },
  {
    gstin: "33ABAFM3776E1ZG",
    name: "Madurai Radha Logistics",
    info: "Local logistics firm",
    address: "9 West Avani Moola Street, Madurai-625001"
  },
  {
    gstin: "33BEVPM9090Q1ZB",
    name: "Sri Lakshmi Transport",
    info: "Proprietorship, registered 2017",
    address: "Madurai area (specific not listed)"
  },
  {
    gstin: "33AAACV9246D1Z5",
    name: "TNSTC - Villupuram Division",
    info: "Government transport, Villupuram HQ, Madurai routes",
    address: "Villupuram Bus Stand Complex, NH45, Villupuram-605602"
  },
  {
    gstin: "33AAACK5437R1ZQ",
    name: "KPN Travels India Pvt Ltd",
    info: "Private bus operator, premium AC services",
    address: "No. 10, GST Road, Chrompet, Chennai-600044 (Madurai depot)"
  },
  {
    gstin: "33AAECP6025C1Z4",
    name: "Parveen Travels Pvt Ltd",
    info: "Long-distance luxury buses, Madurai-Chennai",
    address: "Parveen Towers, 711A, Anna Salai, Chennai-600002"
  },
  {
    gstin: "33AAACT1140D1Z1",
    name: "SETC - State Express Transport Corporation",
    info: "TN Govt premium services, statewide",
    address: "Pallavan Illam, 288, Anna Salai, Chennai-600006"
  },
  {
    gstin: "33AAGCS6890Q1ZJ",
    name: "SRS Travels (India) Pvt Ltd - TN Branch",
    info: "Interstate buses, Madurai terminal",
    address: "Madurai Bypass, Near Meenakshi Temple"
  },
  {
    gstin: "33AAFCV3730P1ZM",
    name: "Royal Roadways",
    info: "Madurai-based cargo and passenger",
    address: "No. 45, Periyar Bus Stand Road, Madurai-625001"
  },
  {
    gstin: "33ABMPR2676G1Z8",
    name: "Pothys Roadways",
    info: "Textile group transport arm, intra-TN",
    address: "Pothys Complex, Madurai"
  },
  {
    gstin: "33AACCM1819K1Z0",
    name: "Metro Transports",
    info: "Urban and mofussil services, Madurai",
    address: "Arappalayam Bus Stand, Madurai-625016"
  },
  {
    gstin: "33AAKCS4709D1Z2",
    name: "Southern Roadways Ltd",
    info: "Government undertaking, Madurai division",
    address: "Tirunelveli Road, Madurai"
  },
  {
    gstin: "33AABCU6142Q1ZN",
    name: "VRL Logistics Ltd - Madurai",
    info: "Pan-India cargo, strong TN presence",
    address: "Sy No 1/1B, Mattuthavani, Madurai-625007"
  }
];

export { companies };

