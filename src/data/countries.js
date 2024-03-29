const countries = [
  { name: "Cyprus", code: "CYP" },
  { name: "Eritrea", code: "ERI" },
  { name: "Liberia", code: "LBR" },
  { name: "Bermuda", code: "BMU" },
  { name: "Vatican City", code: "VAT" },
  { name: "Cook Islands", code: "COK" },
  { name: "Somalia", code: "SOM" },
  { name: "Zambia", code: "ZMB" },
  { name: "Venezuela", code: "VEN" },
  { name: "Turkmenistan", code: "TKM" },
  { name: "Albania", code: "ALB" },
  { name: "Croatia", code: "HRV" },
  { name: "United Kingdom", code: "GBR" },
  { name: "Sudan", code: "SDN" },
  { name: "Timor-Leste", code: "TLS" },
  { name: "Republic of the Congo", code: "COG" },
  { name: "Azerbaijan", code: "AZE" },
  { name: "Kenya", code: "KEN" },
  { name: "American Samoa", code: "ASM" },
  { name: "Ivory Coast", code: "CIV" },
  { name: "Senegal", code: "SEN" },
  { name: "Vietnam", code: "VNM" },
  { name: "El Salvador", code: "SLV" },
  { name: "Afghanistan", code: "AFG" },
  { name: "Saint Martin", code: "MAF" },
  { name: "Latvia", code: "LVA" },
  { name: "Guatemala", code: "GTM" },
  { name: "Kuwait", code: "KWT" },
  { name: "S\u00e3o Tom\u00e9 and Pr\u00edncipe", code: "STP" },
  { name: "Kyrgyzstan", code: "KGZ" },
  { name: "Poland", code: "POL" },
  { name: "Guam", code: "GUM" },
  { name: "Ghana", code: "GHA" },
  { name: "Lithuania", code: "LTU" },
  { name: "Armenia", code: "ARM" },
  { name: "Jersey", code: "JEY" },
  { name: "Grenada", code: "GRD" },
  { name: "Tajikistan", code: "TJK" },
  { name: "Ethiopia", code: "ETH" },
  { name: "Western Sahara", code: "ESH" },
  { name: "Morocco", code: "MAR" },
  { name: "Puerto Rico", code: "PRI" },
  { name: "Christmas Island", code: "CXR" },
  { name: "New Zealand", code: "NZL" },
  { name: "Brunei", code: "BRN" },
  { name: "French Guiana", code: "GUF" },
  { name: "Niue", code: "NIU" },
  { name: "Romania", code: "ROU" },
  { name: "Svalbard and Jan Mayen", code: "SJM" },
  { name: "Belarus", code: "BLR" },
  { name: "Panama", code: "PAN" },
  { name: "Cameroon", code: "CMR" },
  { name: "Czechia", code: "CZE" },
  { name: "Saint Barth\u00e9lemy", code: "BLM" },
  { name: "Greece", code: "GRC" },
  { name: "Mali", code: "MLI" },
  { name: "Martinique", code: "MTQ" },
  { name: "France", code: "FRA" },
  { name: "Pakistan", code: "PAK" },
  { name: "Peru", code: "PER" },
  { name: "Barbados", code: "BRB" },
  { name: "Greenland", code: "GRL" },
  { name: "Saint Pierre and Miquelon", code: "SPM" },
  { name: "Chad", code: "TCD" },
  { name: "Hungary", code: "HUN" },
  { name: "Comoros", code: "COM" },
  { name: "Bangladesh", code: "BGD" },
  { name: "Tokelau", code: "TKL" },
  { name: "Fiji", code: "FJI" },
  { name: "China", code: "CHN" },
  { name: "Colombia", code: "COL" },
  { name: "British Virgin Islands", code: "VGB" },
  { name: "Algeria", code: "DZA" },
  { name: "Maldives", code: "MDV" },
  { name: "Malaysia", code: "MYS" },
  { name: "Cayman Islands", code: "CYM" },
  { name: "Spain", code: "ESP" },
  { name: "Ireland", code: "IRL" },
  { name: "Estonia", code: "EST" },
  { name: "Paraguay", code: "PRY" },
  { name: "Uruguay", code: "URY" },
  { name: "South Africa", code: "ZAF" },
  { name: "Saint Lucia", code: "LCA" },
  { name: "Vanuatu", code: "VUT" },
  { name: "Finland", code: "FIN" },
  { name: "Sweden", code: "SWE" },
  { name: "British Indian Ocean Territory", code: "IOT" },
  { name: "Lebanon", code: "LBN" },
  { name: "United States", code: "USA" },
  { name: "Chile", code: "CHL" },
  { name: "Norfolk Island", code: "NFK" },
  { name: "Montserrat", code: "MSR" },
  { name: "Australia", code: "AUS" },
  { name: "Belize", code: "BLZ" },
  { name: "Guyana", code: "GUY" },
  { name: "Mongolia", code: "MNG" },
  { name: "Tuvalu", code: "TUV" },
  { name: "Dominican Republic", code: "DOM" },
  { name: "Equatorial Guinea", code: "GNQ" },
  { name: "Saint Kitts and Nevis", code: "KNA" },
  { name: "Bolivia", code: "BOL" },
  { name: "Nepal", code: "NPL" },
  { name: "French Southern and Antarctic Lands", code: "ATF" },
  { name: "Taiwan", code: "TWN" },
  { name: "Benin", code: "BEN" },
  { name: "Bulgaria", code: "BGR" },
  { name: "Moldova", code: "MDA" },
  { name: "Isle of Man", code: "IMN" },
  { name: "Bhutan", code: "BTN" },
  { name: "Cambodia", code: "KHM" },
  { name: "Antigua and Barbuda", code: "ATG" },
  { name: "Haiti", code: "HTI" },
  { name: "Cape Verde", code: "CPV" },
  { name: "Georgia", code: "GEO" },
  { name: "Burundi", code: "BDI" },
  { name: "Bahamas", code: "BHS" },
  { name: "Mauritius", code: "MUS" },
  { name: "Libya", code: "LBY" },
  { name: "Malawi", code: "MWI" },
  { name: "Mexico", code: "MEX" },
  { name: "Eswatini", code: "SWZ" },
  { name: "Papua New Guinea", code: "PNG" },
  { name: "Dominica", code: "DMA" },
  { name: "Liechtenstein", code: "LIE" },
  { name: "Russia", code: "RUS" },
  { name: "Israel", code: "ISR" },
  { name: "Singapore", code: "SGP" },
  { name: "Uganda", code: "UGA" },
  { name: "Slovakia", code: "SVK" },
  { name: "Tonga", code: "TON" },
  { name: "United Arab Emirates", code: "ARE" },
  { name: "Mayotte", code: "MYT" },
  { name: "Suriname", code: "SUR" },
  { name: "Uzbekistan", code: "UZB" },
  { name: "Saudi Arabia", code: "SAU" },
  { name: "Egypt", code: "EGY" },
  { name: "Italy", code: "ITA" },
  { name: "Madagascar", code: "MDG" },
  { name: "New Caledonia", code: "NCL" },
  { name: "Canada", code: "CAN" },
  { name: "United States Virgin Islands", code: "VIR" },
  { name: "Marshall Islands", code: "MHL" },
  { name: "Mauritania", code: "MRT" },
  { name: "Gambia", code: "GMB" },
  { name: "Trinidad and Tobago", code: "TTO" },
  { name: "Seychelles", code: "SYC" },
  { name: "Japan", code: "JPN" },
  { name: "Brazil", code: "BRA" },
  { name: "Syria", code: "SYR" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SHN" },
  { name: "Tanzania", code: "TZA" },
  { name: "Andorra", code: "AND" },
  { name: "Iran", code: "IRN" },
  { name: "Togo", code: "TGO" },
  { name: "Malta", code: "MLT" },
  { name: "South Korea", code: "KOR" },
  { name: "Samoa", code: "WSM" },
  { name: "Germany", code: "DEU" },
  { name: "Niger", code: "NER" },
  { name: "Bouvet Island", code: "BVT" },
  { name: "Jamaica", code: "JAM" },
  { name: "Nicaragua", code: "NIC" },
  { name: "Guinea", code: "GIN" },
  { name: "Anguilla", code: "AIA" },
  { name: "\u00c5land Islands", code: "ALA" },
  { name: "Belgium", code: "BEL" },
  { name: "Portugal", code: "PRT" },
  { name: "Denmark", code: "DNK" },
  { name: "Philippines", code: "PHL" },
  { name: "Wallis and Futuna", code: "WLF" },
  { name: "Austria", code: "AUT" },
  { name: "Guinea-Bissau", code: "GNB" },
  { name: "Monaco", code: "MCO" },
  { name: "Namibia", code: "NAM" },
  { name: "United States Minor Outlying Islands", code: "UMI" },
  { name: "Costa Rica", code: "CRI" },
  { name: "Bosnia and Herzegovina", code: "BIH" },
  { name: "Macau", code: "MAC" },
  { name: "Mozambique", code: "MOZ" },
  { name: "R\u00e9union", code: "REU" },
  { name: "Montenegro", code: "MNE" },
  { name: "North Korea", code: "PRK" },
  { name: "Northern Mariana Islands", code: "MNP" },
  { name: "Ukraine", code: "UKR" },
  { name: "Iraq", code: "IRQ" },
  { name: "South Georgia", code: "SGS" },
  { name: "Angola", code: "AGO" },
  { name: "Sierra Leone", code: "SLE" },
  { name: "Micronesia", code: "FSM" },
  { name: "Cuba", code: "CUB" },
  { name: "Turks and Caicos Islands", code: "TCA" },
  { name: "Serbia", code: "SRB" },
  { name: "Ecuador", code: "ECU" },
  { name: "Faroe Islands", code: "FRO" },
  { name: "Antarctica", code: "ATA" },
  { name: "Palestine", code: "PSE" },
  { name: "Turkey", code: "TUR" },
  { name: "Kiribati", code: "KIR" },
  { name: "Kazakhstan", code: "KAZ" },
  { name: "Gibraltar", code: "GIB" },
  { name: "Iceland", code: "ISL" },
  { name: "Palau", code: "PLW" },
  { name: "Qatar", code: "QAT" },
  { name: "Switzerland", code: "CHE" },
  { name: "French Polynesia", code: "PYF" },
  { name: "Pitcairn Islands", code: "PCN" },
  { name: "Jordan", code: "JOR" },
  { name: "Myanmar", code: "MMR" },
  { name: "Thailand", code: "THA" },
  { name: "Caribbean Netherlands", code: "BES" },
  { name: "Aruba", code: "ABW" },
  { name: "Guadeloupe", code: "GLP" },
  { name: "Nigeria", code: "NGA" },
  { name: "Bahrain", code: "BHR" },
  { name: "Laos", code: "LAO" },
  { name: "Cocos (Keeling) Islands", code: "CCK" },
  { name: "Djibouti", code: "DJI" },
  { name: "Solomon Islands", code: "SLB" },
  { name: "Heard Island and McDonald Islands", code: "HMD" },
  { name: "India", code: "IND" },
  { name: "San Marino", code: "SMR" },
  { name: "Luxembourg", code: "LUX" },
  { name: "Sint Maarten", code: "SXM" },
  { name: "Falkland Islands", code: "FLK" },
  { name: "Central African Republic", code: "CAF" },
  { name: "Botswana", code: "BWA" },
  { name: "Cura\u00e7ao", code: "CUW" },
  { name: "Guernsey", code: "GGY" },
  { name: "Norway", code: "NOR" },
  { name: "Gabon", code: "GAB" },
  { name: "Zimbabwe", code: "ZWE" },
  { name: "Lesotho", code: "LSO" },
  { name: "Slovenia", code: "SVN" },
  { name: "Argentina", code: "ARG" },
  { name: "Burkina Faso", code: "BFA" },
  { name: "Yemen", code: "YEM" },
  { name: "DR Congo", code: "COD" },
  { name: "Oman", code: "OMN" },
  { name: "Indonesia", code: "IDN" },
  { name: "Nauru", code: "NRU" },
  { name: "Rwanda", code: "RWA" },
  { name: "North Macedonia", code: "MKD" },
  { name: "Kosovo", code: "UNK" },
  { name: "Netherlands", code: "NLD" },
  { name: "Tunisia", code: "TUN" },
  { name: "South Sudan", code: "SSD" },
  { name: "Honduras", code: "HND" },
  { name: "Saint Vincent and the Grenadines", code: "VCT" },
  { name: "Sri Lanka", code: "LKA" },
  { name: "Hong Kong", code: "HKG" },
];

export default countries;
