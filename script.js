document.addEventListener('DOMContentLoaded', () => {

    // Property Data - Categorized and detailed as per your input
    const properties = [
        {
            id: 'PR-1',
            category: 'flat',
            siteName: 'Fortune 40 (seconds)',
            poc: 'praveen',
            contactNumber: '91 9573261656',
            availability: '1 Flat',
            size: '1055 sft',
            facing: 'West',
            details: 'Flat no 304, Fortune apartments, near sub register office',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder for specific map
            address: '0 sub register office, Dharmapuri Colony, Midhilapuri Vuda Colony, Pothinamallayya Palem, Visakhapatnam, Andhra Pradesh 530041',
            price: '4,800 sft price',
            totalPrice: '50 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Fortune+Flat', // Sample image
            videoLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdemeaH4-NqthRIz3QEAGD1Osa9o-C9y-fAHcBPyCN8WsRmqQ/viewform?usp=headerVideo', // Assuming this is a video link or form
            notes: 'Video uploaded, but remove phone number. Owner not responding for calls we can resume it.'
        },
        {
            id: 'PR-2',
            category: 'flat',
            siteName: 'HP Sowdha',
            poc: 'Sowdha',
            contactNumber: 'N/A',
            availability: '4 Flats',
            size: '1800 sft',
            facing: 'East & West',
            details: 'VUDA approved, 15 percent, 55 square yard, 4 flats in a floor, highway km from highway 3rd Floor',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: '1 ujhwal hospital, R973+7C8, Sampath Nagar, Srinivasa Nagar, Madhurawada, Visakhapatnam, Andhra Pradesh 530041',
            price: '6,000 st price',
            totalPrice: '1 crore 8 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=HP+Sowdha+Flats',
            notes: 'Closed. As of now prasad garu said stop working on it.'
        },
        {
            id: 'PR-3',
            category: 'plot',
            siteName: 'Pendhurthi Plot (Sattibabu)',
            poc: 'sandeep',
            contactNumber: '91 9494228394',
            availability: '1 Plot',
            size: '264 square yards',
            facing: 'North',
            details: 'Pannchayat Layout',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Near pendhurthi junction just half kilometer',
            price: '38,000 square yard price',
            totalPrice: '1 crore 32 thousand',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Pendhurthi+Plot',
            videoLink: 'https://drive.google.com/drive/folders/1G6OppRRh4nAzH05s2m_wdjkvYWh_E_6t?usp=drive_link',
            notes: 'Videos Updated. At present not yet ready for sale.'
        },
        {
            id: 'PR-4',
            category: 'plot',
            siteName: 'Madhurawada Plot',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: '1 Plot',
            size: '141 square yards',
            facing: 'North East',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: '2 Madhurama restaurant opp road of SSR convention center',
            price: '72,000 square yard price',
            totalPrice: '1 crore one lakh fifty thousand',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Madhurawada+Plot'
        },
        {
            id: 'PR-5',
            category: 'plot',
            siteName: 'Pothinamallayya Plot',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: '1 Plot',
            size: '141 sq yards',
            facing: 'South East',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Madhurawada sub register office, Dharmapuri Colony, Midhilapuri Vuda Colony, Pothinamallayya Palem, Visakhapatnam, Andhra Pradesh 530041',
            price: '75,000 square yard price',
            totalPrice: '1 crore Five lakhs Seventy thousand',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Pothinamallayya+Plot',
            notes: 'Available'
        },
        {
            id: 'PR-6',
            category: 'plot',
            siteName: 'KVR Project',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: 'Multiple Plots',
            size: '167-250 sq yards',
            facing: 'North, South, West, East',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Vuda, Near Delhi public school, Anandapuram',
            price: '24,000 square yard price',
            totalPrice: '40 lakhs - 60 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=KVR+Plots',
            notes: 'Available'
        },
        {
            id: 'PR-7',
            category: 'plot',
            siteName: 'IS PR 30 Virat',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: 'Multiple Plots',
            size: '200 sq yards',
            facing: 'North, South, West, East',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'tallavalasa, Opp of ANITS MEDICAL COLLEGE',
            price: '21,000 square yard price',
            totalPrice: '42 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Virat+Plots'
        },
        {
            id: 'PR-8',
            category: 'flat',
            siteName: 'MVV City (1500 sft)',
            poc: 'N/A',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1500 sft',
            facing: 'East 13 floor',
            details: '13th floor, All interior done with 4 ac and car parking',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Visakhapatnam Cricket Stadium',
            price: '8,000 sft price',
            totalPrice: '1 crore 20 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=MVV+City+Flat+1'
        },
        {
            id: 'PR-9',
            category: 'flat',
            siteName: 'MVV City (1800 sft)',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1800 sft',
            facing: 'East 8th floor',
            details: '8th floor, All interior done with 4 ac and car parking',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'NH16, Vasundhara Nagar, Pothinamallayya Palem, Visakhapatnam, Andhra Pradesh 530041',
            price: '8,000 sft price',
            totalPrice: '1 crore 60 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=MVV+City+Flat+2'
        },
        {
            id: 'PR-10',
            category: 'flat',
            siteName: 'Akkayapalem',
            poc: 'Ram',
            contactNumber: '8341518730',
            availability: '2 Flats',
            size: '1060 sft',
            facing: 'East facing',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Akkayapalem, Visakhapatnam',
            price: '6,000 sft price',
            totalPrice: 'available',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Akkayapalem+Flats'
        },
        {
            id: 'PR-11',
            category: 'flat',
            siteName: 'Chakri Meadows',
            poc: 'praveen',
            contactNumber: '9553332008',
            availability: 'Total 60 Flats',
            size: '1375sqft, 1490, 865, 970',
            facing: 'All facing',
            details: 'VUDA approved, Sheelanagar (38 lakhs to 55 lakhs)',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Sheelanagar, Visakhapatnam',
            price: '3,900 sft price',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Chakri+Meadows+Flats'
        },
        {
            id: 'PR-12',
            category: 'flat',
            siteName: 'Mounisha Grand',
            poc: 'praveen',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '2121 sft',
            facing: 'North Facing',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'road of ibaco, madhavadhara, Visakhapatnam -53007',
            price: '7,200 sft price',
            totalPrice: '1 crore 52 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Mounisha+Grand'
        },
        {
            id: 'PR-13',
            category: 'flat',
            siteName: 'Residency (Gopalapatnam)',
            poc: 'Tarun',
            contactNumber: '1 314 568 7624',
            availability: '1 Flat',
            size: '1050 sft',
            facing: 'West facing',
            details: 'Gopalapatnam, Kothapalem',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Gopalapatnam, Kothapalem, Visakhapatnam',
            price: '3,500 sft price',
            totalPrice: '35 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Residency+Gopalapatnam',
            notes: '2 flats are there but image I guess for only 1'
        },
        {
            id: 'PR-14',
            category: 'flat',
            siteName: 'Residency (Sujath Nagar)',
            poc: 'Vijay',
            contactNumber: '91 8074647713',
            availability: '1 Flat',
            size: '900 sft',
            facing: 'East Facing',
            details: 'Sujath nagar',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Sujath nagar, Visakhapatnam',
            price: 'N/A',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Residency+Sujath+Nagar'
        },
        {
            id: 'PR-15',
            category: 'flat',
            siteName: 'Residency Sunukha Elite (seconds)',
            poc: 'Prasad Garu',
            contactNumber: 'N/A',
            availability: '1 Flat (1.09cr)',
            size: '1818 SFT',
            facing: 'N/A',
            details: 'VUDA approved, Madhurwada, M.V.V CITY back side',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Madhurwada, M.V.V CITY back side, Visakhapatnam',
            price: 'N/A',
            totalPrice: '1.09 crore',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Sunukha+Elite+Flat'
        },
        {
            id: 'PR-16',
            category: 'commercial', // Classified as commercial, but user asked for flat/plot/farmland segregation
            siteName: 'Sri Venkat Sai Nilayam Commercial Site',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Floor or else full building, Rent 90,000 monthly',
            size: '4300 sft',
            facing: 'N/A',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'near STBL cineworld down side',
            price: '6,500 sft price',
            totalPrice: '2 crore 79 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Commercial+Site'
        },
        {
            id: 'PR-17',
            category: 'flat',
            siteName: 'KP Builders Flat',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '2 BHK, with car parking 800 sft and 1 BHK 500 sft',
            size: '800, 500 sft',
            facing: 'East, West',
            details: 'VUDA approved',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Arilova, Visakhapatnam',
            price: 'N/A',
            totalPrice: '23 lakhs, 35 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=KP+Builders+Flats'
        },
        {
            id: 'PR-18',
            category: 'commercial', // Classified as commercial
            siteName: 'Avinash Dasari Commercial Site',
            poc: 'Avinash Dasari',
            contactNumber: 'N/A',
            availability: 'Building 2 floors',
            size: '75 square yards',
            facing: 'On Road',
            details: 'N/A',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Naga, near Mayuri multicuisine restaurant',
            price: 'N/A',
            totalPrice: '2 crore 30 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Avinash+Commercial'
        },
        {
            id: 'PR-19',
            category: 'flat',
            siteName: 'Sri Sai Residency',
            poc: 'Siva Ram Reddy',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '44 square yards undivided share',
            facing: 'West facing',
            details: 'VUDA approved, 1065 sft, Fully furnished, 1 km from DMart, 1 km from Kommadi jn. Semi gated but no swimming pool, no gym. 2 blocks, 5 floors, each block 30 flats, each floor 6 flats and total 60 flats',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Sri Sai Surya Residency, Revallapalem, Near Srinivas school, Visakhapatnam',
            price: 'N/A',
            totalPrice: '55 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Sri+Sai+Residency'
        },
        {
            id: 'PR-20',
            category: 'plot',
            siteName: 'Mithalpuri Vuda Colony Plot',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '1359 square yard, 250 square yard beside one also available',
            size: '1359 square yard',
            facing: 'South facing',
            details: 'VUDA approved, South face, 30 feet road',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'syd s, Midhilapuri Vuda Colony, Visakhapatnam',
            price: '45000/-syd',
            totalPrice: '1 crore 60 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Mithalpuri+Plot'
        },
        {
            id: 'PR-21',
            category: 'plot',
            siteName: 'RTC Colony Layout',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '2 sites for development',
            size: '600 square yard',
            facing: 'Both side facing available, both side road available',
            details: 'VUDA approved, Near MVV GV Prand site for development',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'RTC Colony, Visakhapatnam',
            price: 'N/A',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=RTC+Colony+Plots'
        },
        {
            id: 'PR-22',
            category: 'flat',
            siteName: 'Panorama Hills, Celebrity Towers',
            poc: 'praveen, Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '2100 sqft',
            facing: 'East facing',
            details: 'VUDA approved, 1st floor, New flat',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'panorama hills, Near IT SEZ road, Celebrity towers, Visakhapatnam',
            price: '5000/-sft',
            totalPrice: '1 crore 5 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Panorama+Hills+Flat'
        },
        {
            id: 'PR-23',
            category: 'flat',
            siteName: 'MVV City (1500 sft, 3rd Floor)',
            poc: 'praveen, Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1500 sft',
            facing: 'East facing 3rd Floor',
            details: 'FOR SALE - East Facing Flat, MVV CITY APARTMENTS, 1500 sft, 3rd Floor, Front side Double Road Facing Block, All 3 rooms wardrobes & dressing table/mirrors, kitchen, dining cabinets, TV wall board unit, Hall/Kitchen glass partition, Kitchen Chimney, Balcony Cloth hangers, Utility mesh frames & storage, Lights and Fans, two bathroom exhaust fans, entrance main door additional mesh door, all curtain rods provided. Master Bed room & Children Bed room having spacious Balconies having Front side gate/road view.',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'NH16, Vasundhara Nagar, Pothinamallayya Palem, Visakhapatnam, Andhra Pradesh 530041',
            price: '8,000 sft price',
            totalPrice: '1 crore 12 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=MVV+City+Flat+3'
        },
        {
            id: 'PR-24',
            category: 'flat',
            siteName: 'MVV City (1315 sft, 2nd Floor)',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1315 sft',
            facing: 'East facing',
            details: '2nd floor Flat for sales MVV City 12th Block, Total sft 1315 East facing.',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'NH16, Vasundhara Nagar, Pothinamallayya, Visakhapatnam',
            price: '8,000 sft',
            totalPrice: '1 crore',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=MVV+City+Flat+4'
        },
        {
            id: 'PR-25',
            category: 'flat',
            siteName: 'MVV City (1800 sft, 4th block 8th floor)',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1,800 sft',
            facing: 'East facing',
            details: '4th block 8th floor Flat no - 4081',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'NH16, Vasundhara Nagar, Pothinamallayya, Visakhapatnam',
            price: '8,000 sft',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=MVV+City+Flat+5'
        },
        {
            id: 'PR-26',
            category: 'flat',
            siteName: 'MVV City (2nd block 2nd floor)',
            poc: 'Prasad garu',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: 'N/A',
            facing: 'East facing',
            details: 'block no 2024',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'NH16, Vasundhara Nagar, Pothinamallayya, Visakhapatnam',
            price: '8,000 sft',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=MVV+City+Flat+6'
        },
        {
            id: 'PR-27',
            category: 'plot',
            siteName: 'Plot / Near Nathvalasa Toll Plaza',
            poc: 'Prasad',
            contactNumber: 'Prasad garu',
            availability: '1 Acer 4,800 sq yards',
            size: '4800 sq yards',
            facing: 'East Facing',
            details: 'Non VUDA Approved, LRS Need to be paid, 280 depth, 160 *260 Length and breadth, Road facing 160 inside 260',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Nathvalasa toll Plaza Bhogapuram airport',
            price: '20,000 sqyard',
            totalPrice: '9 crores 60 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Nathvalasa+Plot',
            videoLink: 'https://drive.google.com/drive/folders/1VZPKpqaTW96sJ8w3M42ODfUXz4f0Gpwy?usp=sharing',
            notes: 'Open'
        },
        {
            id: 'PR-28',
            category: 'flat',
            siteName: 'Aditya Square Apartment (seconds)',
            poc: 'Praveen',
            contactNumber: 'N/A',
            availability: '1 Flat',
            size: '1375 sqft, 48 sq yards',
            facing: 'East Facing',
            details: '4th floor 2 bhk',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Aditya Square Apartment, Rajiv Nagar, Kollaform road, Opposite to visaka printers, Duvvada',
            price: '3,300 sqft near to 45 Lakhs',
            totalPrice: '45 Lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Aditya+Flat',
            notes: 'available'
        },
        {
            id: 'PR-29',
            category: 'plot',
            siteName: 'Group House',
            poc: 'Sandeep',
            contactNumber: 'N/A',
            availability: 'Group house',
            size: '270 sqyards LB 45/56',
            facing: 'N/A',
            details: 'N/A',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'to Padmavati nursing home, ESI Hospital, teachers colony, GOLLAVEDHI, Adarsh Nagar, Thagarapuvalasa Vishakhapatnam district pin number 531162',
            price: '52,000 square yard',
            totalPrice: '1.4 cr',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Group+House+Plot',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1c_GVOfSJysvbG1v-nxU9hKD4-vGnjuWu',
            notes: 'Available'
        },
        {
            id: 'PR-30',
            category: 'plot',
            siteName: 'Tagarapuvalasa Plots',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '20+ bits',
            size: '200 gajams',
            facing: 'East, West',
            details: 'Layout, Non VUDA, construction sasi school, airport can go in 20 minutes, 2 gated community construction happening over there sasi school, highway in 1km',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Tagarapuvalasa, Visakhapatnam',
            price: 'gajam 14,500',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Tagarapuvalasa+Plots',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1S322DF3jQB2DQNoQjGhYmJVbrHz66gBb',
            notes: 'Available'
        },
        {
            id: 'PR-31',
            category: 'farm_land',
            siteName: 'Farm Land (30 acres)',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '30 acres',
            size: '1 acre 25 lakhs',
            facing: 'West',
            details: 'Farm land, Dip irrigation, near andra reservoir 4 inch water continue water from borrows, From 8km Raipur Highway Mentada Mandalam. Agriculture land, all plants available',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Mentada, Vizianagaram zilla, Bodhama road vizianagaram to aruku road, agency area',
            price: '25 lakhs (per acre)',
            totalPrice: '5 crore 50 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Farm+Land+30+Acres',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1D4hRLUk1q1BUWuP7sslFJAglJrC15v2z',
            notes: 'Available. No location available, Photo will be shared.'
        },
        {
            id: 'PR-32',
            category: 'farm_land',
            siteName: 'Farm Land (2 acres 24 cents)',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '2 acres 24 cents',
            size: 'N/A',
            facing: 'N/A',
            details: 'N/A',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Vizianagaram, near lendi college dakamari',
            price: '1 acre - 2 crores 80 lakhs',
            totalPrice: '7 crores',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Farm+Land+2+Acres',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1sHsur93YfQ6xOpxnCmp8smN5RpZxRtLg',
            notes: 'Available'
        },
        {
            id: 'PR-33',
            category: 'flat',
            siteName: 'MVV CITY (2 flats)',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '2 Flats',
            size: '1500 sqft',
            facing: '1 East 2 West',
            details: '8th block',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'MVV City, Visakhapatnam',
            price: 'N/A',
            totalPrice: '1 crore 20 lakhs',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=MVV+City+Flats+7'
        },
        {
            id: 'PR-34',
            category: 'plot',
            siteName: 'Pendhurthi Highway Commercial Bit',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '1 Commercial bit',
            size: '1470 square yard',
            facing: 'East facing',
            details: 'Highway side commercial bit, Panchayat layout',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Pendhurthi Highway, Visakhapatnam',
            price: '1 square yard - 65,000',
            totalPrice: '9 crore 55 lakhs',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Pendhurthi+Highway+Plot',
            videoLink: 'https://drive.google.com/drive/u/0/folders/15nIB9s5nk5mUtttuyAJsppR2eOnWk9Qh',
            notes: 'Available'
        },
        {
            id: 'PR-35',
            category: 'plot',
            siteName: 'Paradesipalem Commercial Bit',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '1 Commercial bit',
            size: '2400 square yards',
            facing: 'East facing',
            details: 'Panchayat layout',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Paradesipalem, Visakhapatnam',
            price: '1 square yard - 35,000',
            totalPrice: '8 crore 40 lakhs',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Paradesipalem+Plot',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1iHDuBjZM2Q2yhb3mKgxnYZDl5mrKrKzo',
            notes: 'Available'
        },
        {
            id: 'PR-37',
            category: 'farm_land',
            siteName: 'Madugulu Chodavaram Farm Lands',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: 'Multiple plots',
            size: 'N/A',
            facing: 'All facing available',
            details: 'Farm lands no content. CADERS AND COMMISION. 111 (20×50) 1BIT 2,80,000/- closing... AGM. 25000/- DGM 7500/- (OR) GM. 7500/-(OR) SR GM. 7500/-(OR) DIRECTOR. 7500/-(OR) SR DIRECTOR. 7500/-(OR) SITE VISIT. 7000/-(OR) SALARY(SELF). 8000/-. Registration ki 12000/- avuthundhi sir. Document value 1,12,000/- sir',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Madugulu Chodavaram, Visakhapatnam',
            price: 'per square yard 2,500 rs',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/80cbc4/ffffff?text=Madugulu+Farm+Lands',
            videoLink: 'https://drive.google.com/drive/u/0/folders/1umtlBIP-A6TGECFXqKgXcSx8yhKN8QvBN',
            notes: 'available'
        },
        {
            id: 'PR-38', // Assuming a new ID for the new property
            category: 'plot',
            siteName: 'Near Maharajupeta, Srungaravarsa',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '3 acres, Split available 1 acre half',
            size: '1 acre - 6 crores',
            facing: 'East facing, highway side',
            details: 'New property. Kollapili panchyati',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Near Maharajupeta, Srungaravarsa, Visakhapatnam',
            price: '1 acre - 6 crores',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/004d40/ffffff?text=Maharajupeta+Plot',
            notes: 'available'
        },
        {
            id: 'PR-39', // Assuming a new ID for the new property
            category: 'plot',
            siteName: 'Near Bheemli - Mangamvaripetta',
            poc: 'Prasad',
            contactNumber: 'N/A',
            availability: '95 cents, 4,275 square yards',
            size: 'N/A',
            facing: 'East facing Commercial bit',
            details: 'Beach facing',
            mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.228570535182!2d83.30397507421162!3d17.71261318357774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b0722253805%3A0x6b801a61e05d2c70!2sSouth%20Jail%20Rd%2C%20Jagadamba%20Junction%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin', // Placeholder
            address: 'Mangamvaripetta, Bheemli Road, Visakhapatnam',
            price: 'Square yard - 36,000',
            totalPrice: 'N/A',
            image: 'https://via.placeholder.com/400x250/00796b/ffffff?text=Bheemli+Plot',
            notes: 'Available'
        }
        // ... add more properties following this structure
    ];

    const propertyGrid = document.querySelector('.property-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyModal = document.getElementById('propertyModal');
    const closeButton = document.querySelector('.close-button');

    function displayProperties(filterCategory) {
        propertyGrid.innerHTML = ''; // Clear current properties

        const filteredProperties = filterCategory === 'all'
            ? properties
            : properties.filter(p => p.category === filterCategory);

        filteredProperties.forEach(property => {
            const card = document.createElement('div');
            card.classList.add('property-card');
            card.dataset.id = property.id; // Store ID for modal

            card.innerHTML = `
                <img src="${property.image}" alt="${property.siteName}">
                <div class="property-info">
                    <h3>${property.siteName}</h3>
                    <p><strong>Type:</strong> ${property.availability}</p>
                    <p><strong>Size:</strong> ${property.size}</p>
                    <p class="price"><strong>Price:</strong> ${property.totalPrice}</p>
                    <button class="btn view-details-btn">View Details</button>
                </div>
            `;
            propertyGrid.appendChild(card);
        });

        // Add event listeners to newly created "View Details" buttons
        document.querySelectorAll('.view-details-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const propertyId = event.target.closest('.property-card').dataset.id;
                showPropertyDetails(propertyId);
            });
        });
    }

    function showPropertyDetails(id) {
        const property = properties.find(p => p.id === id);

        if (property) {
            document.getElementById('modalPropertyName').textContent = property.siteName;
            document.getElementById('modalPropertyImage').src = property.image;
            document.getElementById('modalPropertyAvailability').textContent = property.availability;
            document.getElementById('modalPropertySize').textContent = property.size;
            document.getElementById('modalPropertyFacing').textContent = property.facing;
            document.getElementById('modalPropertyPrice').textContent = property.price;
            document.getElementById('modalPropertyTotalPrice').textContent = property.totalPrice;
            document.getElementById('modalPropertyAddress').textContent = property.address;
            document.getElementById('modalPropertyContactPOC').textContent = property.poc;
            document.getElementById('modalPropertyContactNumber').textContent = property.contactNumber;
            document.getElementById('modalPropertyDetails').textContent = property.details;

            const notesDiv = document.getElementById('modalPropertyNotes');
            notesDiv.innerHTML = property.notes ? `<p><strong>Notes:</strong> ${property.notes}</p>` : '';

            const linksDiv = document.getElementById('modalPropertyLinks');
            linksDiv.innerHTML = '';
            if (property.videoLink) {
                linksDiv.innerHTML += `<p><strong>More Info/Video:</strong> <a href="${property.videoLink}" target="_blank">View Link</a></p>`;
            }
            if (property.instagramPostLink) { // Assuming you might add this later
                linksDiv.innerHTML += `<p><strong>Instagram Post:</strong> <a href="${property.instagramPostLink}" target="_blank">View Post</a></p>`;
            }

            // Update map iframe src
            document.getElementById('modalPropertyMap').src = property.mapLocation;


            propertyModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }
    }

    // Close modal
    closeButton.addEventListener('click', () => {
        propertyModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    });

    window.addEventListener('click', (event) => {
        if (event.target === propertyModal) {
            propertyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            const category = event.target.dataset.category;
            displayProperties(category);
        });
    });

    // Initial load: display all properties
    displayProperties('all');

    // Smooth scrolling for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
