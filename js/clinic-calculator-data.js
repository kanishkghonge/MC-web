/**
 * Clinic Calculator Data
 * Contains mappings for States, Cities (with Tiers), and Medical Specialties.
 */

const LOCATION_DATA = {
    "Andaman Nicobar": {
        "Nicobar": { tier: 3 }, "Andaman Nicobar": { tier: 3 }, "North Middle Andaman": { tier: 3 }, "South Andaman": { tier: 3 }
    },
    "Andhra Pradesh": {
        "Alluri Sitarama Raju": { tier: 3 }, "Anakapalli": { tier: 3 }, "Anantapur": { tier: 3 }, "Annamaya": { tier: 3 },
        "Bapatla": { tier: 3 }, "Chittoor": { tier: 3 }, "East Godavari": { tier: 3 }, "Eluru": { tier: 3 },
        "Guntur": { tier: 2 }, "Kadapa": { tier: 3 }, "Kakinada": { tier: 3 }, "Konaseema": { tier: 3 },
        "Krishna": { tier: 3 }, "Kurnool": { tier: 3 }, "Manyam": { tier: 3 }, "N T Rama Rao": { tier: 3 },
        "Nandyal": { tier: 3 }, "Nellore": { tier: 2 }, "Palnadu": { tier: 3 }, "Prakasam": { tier: 3 },
        "Sri Balaji": { tier: 3 }, "Sri Satya Sai": { tier: 3 }, "Srikakulam": { tier: 3 },
        "Visakhapatnam": { tier: 2 }, "Vizianagaram": { tier: 3 }, "West Godavari": { tier: 3 }
    },
    "Arunachal Pradesh": {
        "Anjaw": { tier: 3 }, "Bichom": { tier: 3 }, "Changlang": { tier: 3 }, "Dibang Valley": { tier: 3 },
        "East Kameng": { tier: 3 }, "East Siang": { tier: 3 }, "Kamle": { tier: 3 }, "Keyi Panyor": { tier: 3 },
        "Kra Daadi": { tier: 3 }, "Kurung Kumey": { tier: 3 }, "Lepa Rada": { tier: 3 }, "Lohit": { tier: 3 },
        "Longding": { tier: 3 }, "Lower Dibang Valley": { tier: 3 }, "Lower Siang": { tier: 3 },
        "Lower Subansiri": { tier: 3 }, "Namsai": { tier: 3 }, "Pakke Kessang": { tier: 3 },
        "Papum Pare": { tier: 3 }, "Shi Yomi": { tier: 3 }, "Siang": { tier: 3 }, "Tawang": { tier: 3 },
        "Tirap": { tier: 3 }, "Upper Siang": { tier: 3 }, "Upper Subansiri": { tier: 3 },
        "West Kameng": { tier: 3 }, "West Siang": { tier: 3 }
    },
    "Assam": {
        "Bajali": { tier: 3 }, "Baksa": { tier: 3 }, "Barpeta": { tier: 3 }, "Biswanath": { tier: 3 },
        "Bongaigaon": { tier: 3 }, "Cachar": { tier: 3 }, "Charaideo": { tier: 3 }, "Chirang": { tier: 3 },
        "Darrang": { tier: 3 }, "Dhemaji": { tier: 3 }, "Dhubri": { tier: 3 }, "Dibrugarh": { tier: 3 },
        "Dima Hasao": { tier: 3 }, "Goalpara": { tier: 3 }, "Golaghat": { tier: 3 }, "Hailakandi": { tier: 3 },
        "Hojai": { tier: 3 }, "Jorhat": { tier: 3 }, "Kamrup Metropolitan": { tier: 2 }, "Kamrup Rural": { tier: 3 },
        "Karbi Anglong": { tier: 3 }, "Karimganj": { tier: 3 }, "Kokrajhar": { tier: 3 }, "Lakhimpur": { tier: 3 },
        "Majuli": { tier: 3 }, "Morigaon": { tier: 3 }, "Nagaon": { tier: 3 }, "Nalbari": { tier: 3 },
        "Sivasagar": { tier: 3 }, "Sonitpur": { tier: 3 }, "South Salmara-Mankachar": { tier: 3 },
        "Tamulpur": { tier: 3 }, "Tinsukia": { tier: 3 }, "Udalguri": { tier: 3 }, "West Karbi Anglong": { tier: 3 }
    },
    "Bihar": {
        "Araria": { tier: 3 }, "Arwal": { tier: 3 }, "Aurangabad": { tier: 3 }, "Banka": { tier: 3 },
        "Begusarai": { tier: 3 }, "Bhagalpur": { tier: 3 }, "Bhojpur": { tier: 3 }, "Buxar": { tier: 3 },
        "Darbhanga": { tier: 3 }, "East Champaran": { tier: 3 }, "Gaya": { tier: 3 }, "Gopalganj": { tier: 3 },
        "Jamui": { tier: 3 }, "Jehanabad": { tier: 3 }, "Kaimur": { tier: 3 }, "Katihar": { tier: 3 },
        "Khagaria": { tier: 3 }, "Kishanganj": { tier: 3 }, "Lakhisarai": { tier: 3 }, "Madhepura": { tier: 3 },
        "Madhubani": { tier: 3 }, "Munger": { tier: 3 }, "Muzaffarpur": { tier: 3 }, "Nalanda": { tier: 3 },
        "Nawada": { tier: 3 }, "Patna": { tier: 2 }, "Purnia": { tier: 3 }, "Rohtas": { tier: 3 },
        "Saharsa": { tier: 3 }, "Samastipur": { tier: 3 }, "Saran": { tier: 3 }, "Sheikhpura": { tier: 3 },
        "Sheohar": { tier: 3 }, "Sitamarhi": { tier: 3 }, "Siwan": { tier: 3 }, "Supaul": { tier: 3 },
        "Vaishali": { tier: 3 }, "West Champaran": { tier: 3 }
    },
    "Chandigarh": { "Chandigarh": { tier: 2 } },
    "Chhattisgarh": {
        "Balod": { tier: 3 }, "Baloda Bazar": { tier: 3 }, "Balrampur": { tier: 3 }, "Bastar": { tier: 3 },
        "Bemetara": { tier: 3 }, "Bijapur": { tier: 3 }, "Bilaspur": { tier: 3 }, "Dantewada": { tier: 3 },
        "Dhamtari": { tier: 3 }, "Durg": { tier: 2 }, "Gariaband": { tier: 3 }, "Gaurela Pendra Marwahi": { tier: 3 },
        "Janjgir Champa": { tier: 3 }, "Jashpur": { tier: 3 }, "Kabirdham": { tier: 3 }, "Kanker": { tier: 3 },
        "Khairagarh": { tier: 3 }, "Kondagaon": { tier: 3 }, "Korba": { tier: 3 }, "Koriya": { tier: 3 },
        "Mahasamund": { tier: 3 }, "Manendragarh": { tier: 3 }, "Mohla Manpur": { tier: 3 }, "Mungeli": { tier: 3 },
        "Narayanpur": { tier: 3 }, "Raigarh": { tier: 3 }, "Raipur": { tier: 2 }, "Rajnandgaon": { tier: 3 },
        "Sakti": { tier: 3 }, "Sarangarh Bilaigarh": { tier: 3 }, "Sukma": { tier: 3 }, "Surajpur": { tier: 3 }, "Surguja": { tier: 3 }
    },
    "Dadra Nagar Haveli and Daman and Diu": {
        "Dadra and Nagar Haveli": { tier: 3 }, "Daman": { tier: 3 }, "Diu": { tier: 3 }
    },
    "Delhi": {
        "Central Delhi": { tier: 1 }, "East Delhi": { tier: 1 }, "New Delhi": { tier: 1 }, "North Delhi": { tier: 1 },
        "North East Delhi": { tier: 1 }, "North West Delhi": { tier: 1 }, "Shahdara": { tier: 1 }, "South Delhi": { tier: 1 },
        "South East Delhi": { tier: 1 }, "South West Delhi": { tier: 1 }, "West Delhi": { tier: 1 }
    },
    "Goa": { "North Goa": { tier: 3 }, "South Goa": { tier: 3 } },
    "Gujarat": {
        "Ahmedabad": { tier: 1 }, "Amreli": { tier: 3 }, "Anand": { tier: 3 }, "Aravalli": { tier: 3 },
        "Banaskantha": { tier: 3 }, "Bharuch": { tier: 3 }, "Bhavnagar": { tier: 2 }, "Botad": { tier: 3 },
        "Chhota Udaipur": { tier: 3 }, "Dahod": { tier: 3 }, "Dang": { tier: 3 }, "Devbhoomi Dwarka": { tier: 3 },
        "Gandhinagar": { tier: 2 }, "Gir Somnath": { tier: 3 }, "Jamnagar": { tier: 2 }, "Junagadh": { tier: 3 },
        "Kheda": { tier: 3 }, "Kutch": { tier: 3 }, "Mahisagar": { tier: 3 }, "Mehsana": { tier: 3 },
        "Morbi": { tier: 3 }, "Narmada": { tier: 3 }, "Navsari": { tier: 3 }, "Panchmahal": { tier: 3 },
        "Patan": { tier: 3 }, "Porbandar": { tier: 3 }, "Rajkot": { tier: 2 }, "Sabarkantha": { tier: 3 },
        "Surat": { tier: 2 }, "Surendranagar": { tier: 3 }, "Tapi": { tier: 3 }, "Vadodara": { tier: 2 }, "Valsad": { tier: 3 }
    },
    "Haryana": {
        "Ambala": { tier: 3 }, "Bhiwani": { tier: 3 }, "Charkhi Dadri": { tier: 3 }, "Faridabad": { tier: 2 },
        "Fatehabad": { tier: 3 }, "Gurugram": { tier: 1 }, "Hisar": { tier: 3 }, "Jhajjar": { tier: 3 },
        "Jind": { tier: 3 }, "Kaithal": { tier: 3 }, "Karnal": { tier: 3 }, "Kurukshetra": { tier: 3 },
        "Mahendragarh": { tier: 3 }, "Nuh": { tier: 3 }, "Palwal": { tier: 3 }, "Panchkula": { tier: 2 },
        "Panipat": { tier: 3 }, "Rewari": { tier: 3 }, "Rohtak": { tier: 3 }, "Sirsa": { tier: 3 },
        "Sonipat": { tier: 3 }, "Yamunanagar": { tier: 3 }
    },
    "Himachal Pradesh": {
        "Bilaspur": { tier: 3 }, "Chamba": { tier: 3 }, "Hamirpur": { tier: 3 }, "Kangra": { tier: 3 },
        "Kinnaur": { tier: 3 }, "Kullu": { tier: 3 }, "Lahaul Spiti": { tier: 3 }, "Mandi": { tier: 3 },
        "Shimla": { tier: 3 }, "Sirmaur": { tier: 3 }, "Solan": { tier: 3 }, "Una": { tier: 3 }
    },
    "Jammu Kashmir": {
        "Anantnag": { tier: 3 }, "Bandipora": { tier: 3 }, "Baramulla": { tier: 3 }, "Budgam": { tier: 3 },
        "Doda": { tier: 3 }, "Ganderbal": { tier: 3 }, "Jammu": { tier: 2 }, "Kathua": { tier: 3 },
        "Kishtwar": { tier: 3 }, "Kulgam": { tier: 3 }, "Kupwara": { tier: 3 }, "Poonch": { tier: 3 },
        "Pulwama": { tier: 3 }, "Rajouri": { tier: 3 }, "Ramban": { tier: 3 }, "Reasi": { tier: 3 },
        "Samba": { tier: 3 }, "Shopian": { tier: 3 }, "Srinagar": { tier: 2 }, "Udhampur": { tier: 3 }
    },
    "Jharkhand": {
        "Bokaro": { tier: 3 }, "Chatra": { tier: 3 }, "Deoghar": { tier: 3 }, "Dhanbad": { tier: 2 },
        "Dumka": { tier: 3 }, "East Singhbhum": { tier: 3 }, "Garhwa": { tier: 3 }, "Giridih": { tier: 3 },
        "Godda": { tier: 3 }, "Gumla": { tier: 3 }, "Hazaribagh": { tier: 3 }, "Jamtara": { tier: 3 },
        "Khunti": { tier: 3 }, "Koderma": { tier: 3 }, "Latehar": { tier: 3 }, "Lohardaga": { tier: 3 },
        "Pakur": { tier: 3 }, "Palamu": { tier: 3 }, "Ramgarh": { tier: 3 }, "Ranchi": { tier: 2 },
        "Sahebganj": { tier: 3 }, "Seraikela Kharsawan": { tier: 3 }, "Simdega": { tier: 3 }, "West Singhbhum": { tier: 3 }
    },
    "Karnataka": {
        "Bagalkot": { tier: 3 }, "Bangalore Rural": { tier: 3 }, "Bangalore Urban": { tier: 1 },
        "Belgaum": { tier: 2 }, "Bellary": { tier: 3 }, "Bidar": { tier: 3 }, "Chamarajanagar": { tier: 3 },
        "Chikkaballapur": { tier: 3 }, "Chikkamagaluru": { tier: 3 }, "Chitradurga": { tier: 3 },
        "Dakshina Kannada": { tier: 2 }, "Davanagere": { tier: 3 }, "Dharwad": { tier: 2 }, "Gadag": { tier: 3 },
        "Hassan": { tier: 3 }, "Haveri": { tier: 3 }, "Kalaburagi": { tier: 3 }, "Kodagu": { tier: 3 },
        "Kolar": { tier: 3 }, "Koppal": { tier: 3 }, "Mandya": { tier: 3 }, "Mysore": { tier: 2 },
        "Raichur": { tier: 3 }, "Ramanagara": { tier: 3 }, "Shimoga": { tier: 3 }, "Tumkur": { tier: 3 },
        "Udupi": { tier: 3 }, "Uttara Kannada": { tier: 3 }, "Vijayanagara": { tier: 3 },
        "Vijayapura": { tier: 3 }, "Yadgir": { tier: 3 }
    },
    "Kerala": {
        "Alappuzha": { tier: 3 }, "Ernakulam": { tier: 2 }, "Idukki": { tier: 3 }, "Kannur": { tier: 3 },
        "Kasaragod": { tier: 3 }, "Kollam": { tier: 3 }, "Kottayam": { tier: 3 }, "Kozhikode": { tier: 2 },
        "Malappuram": { tier: 3 }, "Palakkad": { tier: 3 }, "Pathanamthitta": { tier: 3 },
        "Thiruvananthapuram": { tier: 2 }, "Thrissur": { tier: 3 }, "Wayanad": { tier: 3 }
    },
    "Ladakh": { "Kargil": { tier: 3 }, "Leh": { tier: 3 } },
    "Lakshadweep": { "Lakshadweep": { tier: 3 } },
    "Madhya Pradesh": {
        "Agar Malwa": { tier: 3 }, "Alirajpur": { tier: 3 }, "Anuppur": { tier: 3 }, "Ashoknagar": { tier: 3 },
        "Balaghat": { tier: 3 }, "Barwani": { tier: 3 }, "Betul": { tier: 3 }, "Bhind": { tier: 3 },
        "Bhopal": { tier: 2 }, "Burhanpur": { tier: 3 }, "Chachaura": { tier: 3 }, "Chhatarpur": { tier: 3 },
        "Chhindwara": { tier: 3 }, "Damoh": { tier: 3 }, "Datia": { tier: 3 }, "Dewas": { tier: 3 },
        "Dhar": { tier: 3 }, "Dindori": { tier: 3 }, "Guna": { tier: 3 }, "Gwalior": { tier: 2 },
        "Harda": { tier: 3 }, "Hoshangabad": { tier: 3 }, "Indore": { tier: 2 }, "Jabalpur": { tier: 2 },
        "Jhabua": { tier: 3 }, "Katni": { tier: 3 }, "Khandwa": { tier: 3 }, "Khargone": { tier: 3 },
        "Maihar": { tier: 3 }, "Mandla": { tier: 3 }, "Mandsaur": { tier: 3 }, "Morena": { tier: 3 },
        "Nagda": { tier: 3 }, "Narsinghpur": { tier: 3 }, "Neemuch": { tier: 3 }, "Niwari": { tier: 3 },
        "Pandhurna": { tier: 3 }, "Panna": { tier: 3 }, "Raisen": { tier: 3 }, "Rajgarh": { tier: 3 },
        "Ratlam": { tier: 3 }, "Rewa": { tier: 3 }, "Sagar": { tier: 3 }, "Satna": { tier: 3 },
        "Sehore": { tier: 3 }, "Seoni": { tier: 3 }, "Shahdol": { tier: 3 }, "Shajapur": { tier: 3 },
        "Sheopur": { tier: 3 }, "Shivpuri": { tier: 3 }, "Sidhi": { tier: 3 }, "Singrauli": { tier: 3 },
        "Tikamgarh": { tier: 3 }, "Ujjain": { tier: 3 }, "Umaria": { tier: 3 }, "Vidisha": { tier: 3 }
    },
    "Maharashtra": {
        "Ahmednagar": { tier: 3 }, "Akola": { tier: 3 }, "Amravati": { tier: 2 }, "Aurangabad": { tier: 2 },
        "Beed": { tier: 3 }, "Bhandara": { tier: 3 }, "Buldhana": { tier: 3 }, "Chandrapur": { tier: 3 },
        "Dhule": { tier: 3 }, "Gadchiroli": { tier: 3 }, "Gondia": { tier: 3 }, "Hingoli": { tier: 3 },
        "Jalgaon": { tier: 3 }, "Jalna": { tier: 3 }, "Kolhapur": { tier: 3 }, "Latur": { tier: 3 },
        "Mumbai City": { tier: 1 }, "Mumbai Suburban": { tier: 1 }, "Nagpur": { tier: 1 },
        "Nanded": { tier: 3 }, "Nandurbar": { tier: 3 }, "Nashik": { tier: 2 }, "Osmanabad": { tier: 3 },
        "Palghar": { tier: 3 }, "Parbhani": { tier: 3 }, "Pune": { tier: 1 }, "Raigad": { tier: 3 },
        "Ratnagiri": { tier: 3 }, "Sangli": { tier: 3 }, "Satara": { tier: 3 }, "Sindhudurg": { tier: 3 },
        "Solapur": { tier: 2 }, "Thane": { tier: 2 }, "Wardha": { tier: 3 }, "Washim": { tier: 3 }, "Yavatmal": { tier: 3 }
    },
    "Manipur": {
        "Bishnupur": { tier: 3 }, "Chandel": { tier: 3 }, "Churachandpur": { tier: 3 }, "Imphal East": { tier: 3 },
        "Imphal West": { tier: 3 }, "Jiribam": { tier: 3 }, "Kakching": { tier: 3 }, "Kamjong": { tier: 3 },
        "Kangpokpi": { tier: 3 }, "Noney": { tier: 3 }, "Pherzawl": { tier: 3 }, "Senapati": { tier: 3 },
        "Tamenglong": { tier: 3 }, "Tengnoupal": { tier: 3 }, "Thoubal": { tier: 3 }, "Ukhrul": { tier: 3 }
    },
    "Meghalaya": {
        "East Garo Hills": { tier: 3 }, "East Jaintia Hills": { tier: 3 }, "East Khasi Hills": { tier: 3 },
        "Mairang": { tier: 3 }, "North Garo Hills": { tier: 3 }, "Ri Bhoi": { tier: 3 }, "South Garo Hills": { tier: 3 },
        "South West Garo Hills": { tier: 3 }, "South West Khasi Hills": { tier: 3 }, "West Garo Hills": { tier: 3 },
        "West Jaintia Hills": { tier: 3 }, "West Khasi Hills": { tier: 3 }
    },
    "Mizoram": {
        "Aizawl": { tier: 3 }, "Champhai": { tier: 3 }, "Hnahthial": { tier: 3 }, "Khawzawl": { tier: 3 },
        "Kolasib": { tier: 3 }, "Lawngtlai": { tier: 3 }, "Lunglei": { tier: 3 }, "Mamit": { tier: 3 },
        "Saiha": { tier: 3 }, "Saitual": { tier: 3 }, "Serchhip": { tier: 3 }
    },
    "Nagaland": {
        "Chumukedima": { tier: 3 }, "Dimapur": { tier: 3 }, "Kiphire": { tier: 3 }, "Kohima": { tier: 3 },
        "Longleng": { tier: 3 }, "Mokokchung": { tier: 3 }, "Mon": { tier: 3 }, "Niuland": { tier: 3 },
        "Noklak": { tier: 3 }, "Peren": { tier: 3 }, "Phek": { tier: 3 }, "Shamator": { tier: 3 },
        "Tseminyu": { tier: 3 }, "Tuensang": { tier: 3 }, "Wokha": { tier: 3 }, "Zunheboto": { tier: 3 }
    },
    "Odisha": {
        "Angul": { tier: 3 }, "Balangir": { tier: 3 }, "Balasore": { tier: 3 }, "Bargarh": { tier: 3 },
        "Bhadrak": { tier: 3 }, "Boudh": { tier: 3 }, "Cuttack": { tier: 2 }, "Debagarh": { tier: 3 },
        "Dhenkanal": { tier: 3 }, "Gajapati": { tier: 3 }, "Ganjam": { tier: 3 }, "Jagatsinghpur": { tier: 3 },
        "Jajpur": { tier: 3 }, "Jharsuguda": { tier: 3 }, "Kalahandi": { tier: 3 }, "Kandhamal": { tier: 3 },
        "Kendrapara": { tier: 3 }, "Kendujhar": { tier: 3 }, "Khordha": { tier: 3 }, "Koraput": { tier: 3 },
        "Malkangiri": { tier: 3 }, "Mayurbhanj": { tier: 3 }, "Nabarangpur": { tier: 3 }, "Nayagarh": { tier: 3 },
        "Nuapada": { tier: 3 }, "Puri": { tier: 3 }, "Rayagada": { tier: 3 }, "Sambalpur": { tier: 3 },
        "Subarnapur": { tier: 3 }, "Sundergarh": { tier: 3 }
    },
    "Puducherry": {
        "Karaikal": { tier: 3 }, "Mahe": { tier: 3 }, "Puducherry": { tier: 3 }, "Yanam": { tier: 3 }
    },
    "Punjab": {
        "Amritsar": { tier: 2 }, "Barnala": { tier: 3 }, "Bathinda": { tier: 3 }, "Faridkot": { tier: 3 },
        "Fatehgarh Sahib": { tier: 3 }, "Fazilka": { tier: 3 }, "Firozpur": { tier: 3 }, "Gurdaspur": { tier: 3 },
        "Hoshiarpur": { tier: 3 }, "Jalandhar": { tier: 2 }, "Kapurthala": { tier: 3 }, "Ludhiana": { tier: 2 },
        "Malerkotla": { tier: 3 }, "Mansa": { tier: 3 }, "Moga": { tier: 3 }, "Mohali": { tier: 3 },
        "Muktsar": { tier: 3 }, "Pathankot": { tier: 3 }, "Patiala": { tier: 3 }, "Rupnagar": { tier: 3 },
        "Sangrur": { tier: 3 }, "Shaheed Bhagat Singh Nagar": { tier: 3 }, "Tarn Taran": { tier: 3 }
    },
    "Rajasthan": {
        "Ajmer": { tier: 2 }, "Alwar": { tier: 3 }, "Anupgarh": { tier: 3 }, "Balotra": { tier: 3 },
        "Banswara": { tier: 3 }, "Baran": { tier: 3 }, "Barmer": { tier: 3 }, "Beawar": { tier: 3 },
        "Bharatpur": { tier: 3 }, "Bhilwara": { tier: 3 }, "Bikaner": { tier: 2 }, "Bundi": { tier: 3 },
        "Chittorgarh": { tier: 3 }, "Churu": { tier: 3 }, "Dausa": { tier: 3 }, "Deeg": { tier: 3 },
        "Dholpur": { tier: 3 }, "Didwana Kuchaman": { tier: 3 }, "Dudu": { tier: 3 }, "Dungarpur": { tier: 3 },
        "Gangapur City": { tier: 3 }, "Hanumangarh": { tier: 3 }, "Jaipur": { tier: 2 }, "Jaipur Rural": { tier: 3 },
        "Jaisalmer": { tier: 3 }, "Jalore": { tier: 3 }, "Jhalawar": { tier: 3 }, "Jhunjhunu": { tier: 3 },
        "Jodhpur": { tier: 2 }, "Jodhpur Rural": { tier: 3 }, "Karauli": { tier: 3 }, "Kekri": { tier: 3 },
        "Khairthal Tijara": { tier: 3 }, "Kota": { tier: 2 }, "Kotputli Behror": { tier: 3 }, "Nagaur": { tier: 3 },
        "Neem ka Thana": { tier: 3 }, "Pali": { tier: 3 }, "Phalodi": { tier: 3 }, "Pratapgarh": { tier: 3 },
        "Rajsamand": { tier: 3 }, "Salumbar": { tier: 3 }, "Sanchore": { tier: 3 }, "Sawai Madhopur": { tier: 3 },
        "Shahpura": { tier: 3 }, "Sikar": { tier: 3 }, "Sirohi": { tier: 3 }, "Sri Ganganagar": { tier: 3 },
        "Tonk": { tier: 3 }, "Udaipur": { tier: 3 }
    },
    "Sikkim": {
        "East Sikkim": { tier: 3 }, "North Sikkim": { tier: 3 }, "Pakyong": { tier: 3 }, "Soreng": { tier: 3 },
        "South Sikkim": { tier: 3 }, "West Sikkim": { tier: 3 }
    },
    "Tamil Nadu": {
        "Ariyalur": { tier: 3 }, "Chengalpattu": { tier: 3 }, "Chennai": { tier: 1 }, "Coimbatore": { tier: 2 },
        "Cuddalore": { tier: 3 }, "Dharmapuri": { tier: 3 }, "Dindigul": { tier: 3 }, "Erode": { tier: 3 },
        "Kallakurichi": { tier: 3 }, "Kanchipuram": { tier: 3 }, "Kanyakumari": { tier: 3 }, "Karur": { tier: 3 },
        "Krishnagiri": { tier: 3 }, "Madurai": { tier: 2 }, "Mayiladuthurai": { tier: 3 }, "Nagapattinam": { tier: 3 },
        "Namakkal": { tier: 3 }, "Nilgiris": { tier: 3 }, "Perambalur": { tier: 3 }, "Pudukkottai": { tier: 3 },
        "Ramanapuram": { tier: 3 }, "Ranipet": { tier: 3 }, "Salem": { tier: 2 }, "Sivaganga": { tier: 3 },
        "Tenkasi": { tier: 3 }, "Thanjavur": { tier: 3 }, "Theni": { tier: 3 }, "Thoothukudi": { tier: 3 },
        "Tiruchirappalli": { tier: 2 }, "Tirunelveli": { tier: 2 }, "Tirupattur": { tier: 3 }, "Tiruppur": { tier: 2 },
        "Tiruvallur": { tier: 3 }, "Tiruvannamalai": { tier: 3 }, "Tiruvarur": { tier: 3 }, "Vellore": { tier: 3 },
        "Viluppuram": { tier: 3 }, "Virudhunagar": { tier: 3 }
    },
    "Telangana": {
        "Adilabad": { tier: 3 }, "Bhadradri Kothagudem": { tier: 3 }, "Hanamkonda": { tier: 3 },
        "Hyderabad": { tier: 1 }, "Jagtial": { tier: 3 }, "Jangaon": { tier: 3 }, "Jayashankar": { tier: 3 },
        "Jogulamba": { tier: 3 }, "Kamareddy": { tier: 3 }, "Karimnagar": { tier: 3 }, "Khammam": { tier: 3 },
        "Komaram Bheem": { tier: 3 }, "Mahabubabad": { tier: 3 }, "Mahbubnagar": { tier: 3 },
        "Mancherial": { tier: 3 }, "Medak": { tier: 3 }, "Medchal Malkajgiri": { tier: 3 }, "Mulugu": { tier: 3 },
        "Nagarkurnool": { tier: 3 }, "Nalgonda": { tier: 3 }, "Narayanpet": { tier: 3 }, "Nirmal": { tier: 3 },
        "Nizamabad": { tier: 3 }, "Peddapalli": { tier: 3 }, "Rajanna Sircilla": { tier: 3 }, "Ranga Reddy": { tier: 3 },
        "Sangareddy": { tier: 3 }, "Siddipet": { tier: 3 }, "Suryapet": { tier: 3 }, "Vikarabad": { tier: 3 },
        "Wanaparthy": { tier: 3 }, "Warangal": { tier: 3 }, "Yadadri Bhuvanagiri": { tier: 3 }
    },
    "Tripura": {
        "Dhalai": { tier: 3 }, "Gomati": { tier: 3 }, "Khowai": { tier: 3 }, "North Tripura": { tier: 3 },
        "Sepahijala": { tier: 3 }, "South Tripura": { tier: 3 }, "Unakoti": { tier: 3 }, "West Tripura": { tier: 3 }
    },
    "Uttar Pradesh": {
        "Agra": { tier: 2 }, "Aligarh": { tier: 2 }, "Ambedkar Nagar": { tier: 3 }, "Amethi": { tier: 3 },
        "Amroha": { tier: 3 }, "Auraiya": { tier: 3 }, "Ayodhya": { tier: 3 }, "Azamgarh": { tier: 3 },
        "Baghpat": { tier: 3 }, "Bahraich": { tier: 3 }, "Ballia": { tier: 3 }, "Balrampur": { tier: 3 },
        "Banda": { tier: 3 }, "Barabanki": { tier: 3 }, "Bareilly": { tier: 2 }, "Basti": { tier: 3 },
        "Bhadohi": { tier: 3 }, "Bijnor": { tier: 3 }, "Budaun": { tier: 3 }, "Bulandshahr": { tier: 3 },
        "Chandauli": { tier: 3 }, "Chitrakoot": { tier: 3 }, "Deoria": { tier: 3 }, "Etah": { tier: 3 },
        "Etawah": { tier: 3 }, "Farrukhabad": { tier: 3 }, "Fatehpur": { tier: 3 }, "Firozabad": { tier: 3 },
        "Gautam Buddha Nagar": { tier: 2 }, "Ghaziabad": { tier: 2 }, "Ghazipur": { tier: 3 },
        "Gonda": { tier: 3 }, "Gorakhpur": { tier: 2 }, "Hamirpur": { tier: 3 }, "Hapur": { tier: 3 },
        "Hardoi": { tier: 3 }, "Hathras": { tier: 3 }, "Jalaun": { tier: 3 }, "Jaunpur": { tier: 3 },
        "Jhansi": { tier: 3 }, "Kannauj": { tier: 3 }, "Kanpur Dehat": { tier: 3 }, "Kanpur Nagar": { tier: 2 },
        "Kasganj": { tier: 3 }, "Kaushambi": { tier: 3 }, "Kushinagar": { tier: 3 }, "Lakhimpur Kheri": { tier: 3 },
        "Lalitpur": { tier: 3 }, "Lucknow": { tier: 2 }, "Maharajganj": { tier: 3 }, "Mahoba": { tier: 3 },
        "Mainpuri": { tier: 3 }, "Mathura": { tier: 3 }, "Mau": { tier: 3 }, "Meerut": { tier: 2 },
        "Mirzapur": { tier: 3 }, "Moradabad": { tier: 2 }, "Muzaffarnagar": { tier: 3 }, "Pilibhit": { tier: 3 },
        "Pratapgarh": { tier: 3 }, "Prayagraj": { tier: 2 }, "Raebareli": { tier: 3 }, "Rampur": { tier: 3 },
        "Saharanpur": { tier: 3 }, "Sambhal": { tier: 3 }, "Sant Kabir Nagar": { tier: 3 }, "Shahjahanpur": { tier: 3 },
        "Shamli": { tier: 3 }, "Shravasti": { tier: 3 }, "Siddharthnagar": { tier: 3 }, "Sitapur": { tier: 3 },
        "Sonbhadra": { tier: 3 }, "Sultanpur": { tier: 3 }, "Unnao": { tier: 3 }, "Varanasi": { tier: 2 }
    },
    "Uttarakhand": {
        "Almora": { tier: 3 }, "Bageshwar": { tier: 3 }, "Chamoli": { tier: 3 }, "Champawat": { tier: 3 },
        "Dehradun": { tier: 3 }, "Haridwar": { tier: 3 }, "Nainital": { tier: 3 }, "Pauri": { tier: 3 },
        "Pithoragarh": { tier: 3 }, "Rudraprayag": { tier: 3 }, "Tehri": { tier: 3 }, "Udham Singh Nagar": { tier: 3 },
        "Uttarkashi": { tier: 3 }
    },
    "West Bengal": {
        "Alipurduar": { tier: 3 }, "Bankura": { tier: 3 }, "Birbhum": { tier: 3 }, "Cooch Behar": { tier: 3 },
        "Dakshin Dinajpur": { tier: 3 }, "Darjeeling": { tier: 3 }, "Hooghly": { tier: 3 }, "Howrah": { tier: 2 },
        "Jalpaiguri": { tier: 3 }, "Jhargram": { tier: 3 }, "Kalimpong": { tier: 3 }, "Kolkata": { tier: 1 },
        "Malda": { tier: 3 }, "Murshidabad": { tier: 3 }, "Nadia": { tier: 3 }, "North 24 Parganas": { tier: 3 },
        "Paschim Bardhaman": { tier: 3 }, "Paschim Medinipur": { tier: 3 }, "Purba Bardhaman": { tier: 3 },
        "Purba Medinipur": { tier: 3 }, "Purulia": { tier: 3 }, "South 24 Parganas": { tier: 3 }, "Uttar Dinajpur": { tier: 3 }
    }
};

const TIER_MULTIPLIERS = {
    1: 1.5, // Most expensive
    2: 1.2,
    3: 1.0  // Base line
};

const SPECIALTY_DATA = {
    "Doctor (Allopathy)": {
        "General Physician": { baseEquipmentCost: 50000, complexity: 1.0 },
        "Pediatrician": { baseEquipmentCost: 80000, complexity: 1.1 },
        "Gynecologist": { baseEquipmentCost: 600000, complexity: 1.5 }, // Includes high-end Ultrasound/Colposcope
        "Dermatologist": { baseEquipmentCost: 1200000, complexity: 1.6 }, // Advanced Lasers & Derma-chairs
        "Orthopedic": { baseEquipmentCost: 400000, complexity: 1.4 }, // Digital X-Ray & Physio aids
        "Cardiologist": { baseEquipmentCost: 2500000, complexity: 2.0 }, // Echo, TMT, Holter, ECG
        "Ophthalmologist": { baseEquipmentCost: 1500000, complexity: 1.7 }, // Slit lamp, Autoref, Phaco/Lasik basics
        "ENT Specialist": { baseEquipmentCost: 500000, complexity: 1.3 }, // Endoscopy units
        "Psychiatrist": { baseEquipmentCost: 30000, complexity: 1.1 }, // Primarily consulting
        "Pulmonologist": { baseEquipmentCost: 450000, complexity: 1.4 }, // PFT, Spirometry, Sleep study gear
        "Endocrinologist": { baseEquipmentCost: 100000, complexity: 1.2 },
        "Gastroenterologist": { baseEquipmentCost: 1800000, complexity: 1.8 } // Endoscopy & Colonoscopy towers
    },
    "Radiology & Diagnostics": {
        "Basic X-Ray Center": { baseEquipmentCost: 1500000, complexity: 1.5 },
        "Advanced Imaging (CT/MRI)": { baseEquipmentCost: 50000000, complexity: 2.5 }, // Multi-crore investment
        "Sonography Center": { baseEquipmentCost: 1500000, complexity: 1.4 },
        "Pathology Lab (Basic)": { baseEquipmentCost: 1200000, complexity: 1.6 }, // Hematology & Biochemistry analyzers
        "Pathology Lab (Advanced)": { baseEquipmentCost: 4500000, complexity: 2.0 } // Histopathology & Molecular kits
    },
    "Dentist": {
        "General Dentistry": { baseEquipmentCost: 1000000, complexity: 1.5 }, // Quality Chair, RVG, Compressor
        "Orthodontist": { baseEquipmentCost: 1200000, complexity: 1.6 },
        "Endodontist": { baseEquipmentCost: 1400000, complexity: 1.7 }, // Apex locators, Micro-motors
        "Oral Surgeon": { baseEquipmentCost: 1800000, complexity: 1.8 }
    },
    "Physiotherapist": {
        "General Rehab": { baseEquipmentCost: 300000, complexity: 1.2 },
        "Sports Medicine": { baseEquipmentCost: 600000, complexity: 1.5 }, // Shockwave/Cryotherapy gear
        "Neuro Rehab": { baseEquipmentCost: 500000, complexity: 1.4 }
    },
    "Ayurveda": {
        "General Consultant": { baseEquipmentCost: 40000, complexity: 1.0 },
        "Panchakarma Center": { baseEquipmentCost: 600000, complexity: 1.5 }
    },
    "Homeopath": {
        "General Consultant": { baseEquipmentCost: 30000, complexity: 1.0 }
    }
};

// Base Costs (in INR) for Tier 3 city
const BASE_COSTS = {
    rentPerSqFt: 40,
    purchasePerSqFt: 6000,
    interiorPerSqFt: 1500,
    minArea: 300, // sq ft
    bufferMonths: 6 // 6 months of opex as buffer
};
