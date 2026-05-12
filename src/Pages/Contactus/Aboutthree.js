const regionalLocations = [
    {
        title: 'Kuwait City',
        lines: [
            'Burj Alshaya, Al Soor Street, Al Mirqab',
            'Head Office',
            'Alshaya Trading Co.',
        ],
        phone: '+965 51514000',
    },
    {
        title: 'Hawally',
        lines: [
            'Block 3, Tunis Street, Alshaya Complex',
            'Showrooms Included',
            'Tiles, Marble, KitchenHaus and Sanitaryware',
        ],
        phone: '+965 51514000',
    },
    {
        title: 'Industrial Shuwaikh',
        lines: [
            'Block D, Street 17, Alshaya Plaza Complex',
            'Showrooms Included',
            'Tiles, Marble, KitchenHaus and Sanitaryware',
        ],
        phone: '+965 97221303',
    },
    {
        title: 'Alrai',
        lines: ['Avenues Mall Phase One', 'KitchenHaus Showroom'],
        phone: '+965 99791866',
    },
    {
        title: 'Riyadh',
        lines: [
            'Al Rabwah District, Khurais Road',
            'Head Office',
            'Beside the Ministry of National Guard',
        ],
        phone: '+966 11 2570920',
    },
    {
        title: 'Jeddah',
        lines: ['Tahlia Street, Al Rajhi Center', 'Supermarket and Warehouses'],
        phone: '+966 12 2272470',
    },
    {
        title: 'Khobar',
        lines: ['Al Borj Medical Laboratories Building', 'King Abdulaziz Street'],
        phone: '+966 13 8640512',
    },
    {
        title: 'Manama',
        lines: [
            'Al Seef Area',
            'Head Office',
            'Alshaya International Trading Co.',
        ],
        phone: '+973 38384155',
    },
    {
        title: 'Doha',
        lines: [
            'Office No. 7, First Floor',
            'C Ring Road, Financial Square Building',
            'Entrance No. 2',
        ],
        phone: '+974 31110517',
    },
    {
        title: 'Dubai',
        lines: ['Salah Al Deen Street', 'Alshaya Office'],
        phone: '+971 4 6074153',
    },
    {
        title: 'Abu Dhabi',
        lines: [
            'Najda Street, Abu Dhabi, UAE',
            'Alshaya Enterprises, Najda Street, Abu Dhabi, UAE',
        ],
        phone: '(+971) 4-6074153',
    },
    {
        title: 'Muscat (Ghala)',
        lines: [
            'Ghala HT’s, Plot No 61, Center 250, Muscat',
            'Alshaya United LLC, Showroom 1, Building 1 /355, Block P.O.Box: 135, Postal Code: 103, Ghala HT’S, PLOT NO 61, Center 250, Muscat, Sultanate of Oman.',
            'Showroom and Offices',
        ],
        phone: '+968-93800614',
    },
    {
        title: 'Muscat (Al Ghubrah)',
        lines: [
            'Al Ghubrah St., near Al Raffa, Muscat',
            'Landmark: Near Al Raffa Hospital (Aster Hospital)',
            'Ground floor, Al Ghubrah, Muscat, Sultanate of Oman, P.O Box No.135',
            'Showroom',
        ],
        phone: '(+968) 98901364',
    },
];

function phoneHref(display) {
    const digits = display.replace(/\D/g, '');
    if (!digits) return undefined;
    return `tel:+${digits.replace(/^0+/, '')}`;
}

export default function Aboutthree() {
    return (
        <>
            <div className="contact-section">
                <div className="container">
                    <div className="heading-box text-center">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            CONTACT US
                        </span>
                        <h2 className="heading-title wow fadeInUp animated animated">
                            Our Regional Locations
                        </h2>
                        <p className="heading-lead wow fadeInUp animated animated">
                            Connect with Alshaya Enterprises across Kuwait and the GCC. Our teams are
                            available to support project enquiries, product requirements, showroom visits
                            and service related assistance.
                        </p>
                    </div>
                    <div className="row gutter-y-30 contact-region-grid">
                        {regionalLocations.map((loc, index) => (
                            <div
                                key={`${loc.title}-${index}`}
                                className="col-12 col-sm-6 col-lg-3 wow fadeInUp animated animated"
                            >
                                <div className="contact-region-card">
                                    <h5>{loc.title}</h5>
                                    {loc.lines.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                    <p className="contact-region-phone">
                                        Phone:{' '}
                                        <a href={phoneHref(loc.phone)}>{loc.phone}</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
