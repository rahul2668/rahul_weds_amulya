// ✏️ Edit everything about the invitation here.

const wedding = {
  title: "Ramagiri's Wedding Invitation",
  invocation: '॥ Shri Ganeshaya Namah ॥',

  // Shown at the top of the page; the middle one is displayed largest
  gods: [
    { name: 'Sri Ganesha', photo: '/photos/gods/ganesha.jpg' },
    { name: 'Sri Lakshmi Narasimha Swamy', photo: '/photos/gods/narasimha.jpg' },
    { name: 'Sri Shiva Parvati', photo: '/photos/gods/shiva-parvati.jpg' },
  ],

  blessings: 'Late. Ramagiri Kamsalya – Narayana',

  // Shown in a row above the couple's names (left, middle, right)
  blessingWords: ['Srirasthu', 'Shubhamasthu', 'Avignamasthu'],

  message:
    'We solicit your gracious presence with family and friends on the auspicious occasion of the marriage of our elder son',

  groom: {
    name: 'Rahul',
    fullName: 'Chi. Rahul',
    parents: 'Elder son of Smt. Ramagiri Manjula & Sri Ramagiri Naresh',
    photo: '/photos/photo1.svg', // replace with '/photos/photo1.jpg'
  },
  bride: {
    name: 'Amulya',
    fullName: 'Chi.la.sow Amulya',
    parents: 'Younger D/o Smt. & Sri Pabballa Manjula – Beerappa, R/o Nizamabad',
    photo: '/photos/photo2.svg', // replace with '/photos/photo2.jpg'
  },

  // Used for the countdown timer (local time, 24h format)
  dateTime: '2026-12-03T11:50:00',
  displayDate: 'Thursday, 3rd December 2026',
  muhurtham: '11:50 AM',
  nakshatram: 'Uttara Phalguna Nakshatram',
  lagnam: 'Abhijith Lagnam',

  venue: {
    name: 'Paide Convention (Banquet Hall)',
    address: 'Behind Lahari Hotel, Hyderabad Bypass Road, Nizamabad',
    // Google Maps "Share → Copy link"
    mapsLink: 'https://maps.google.com/?q=Paide+Convention+Nizamabad',
    // Google Maps "Share → Embed a map" → copy only the src="..." URL
    mapEmbed: 'https://maps.google.com/maps?q=Paide%20Convention%20Nizamabad&z=15&output=embed',
  },

  inviters: [
    { name: 'Smt. Ramagiri Manjula' },
    { name: 'Sri Ramagiri Naresh' },
    { name: 'Ramagiri Rohith' },
  ],
  inviterPlace: 'Sri Datta Sai Residency, Behind Yamaha Showroom, Vinayak Nagar, Nizamabad',
  contactNumbers: ['8897725665', '8555819530', '9951947756'],

  closing: 'With best compliments from',

  // Listed under "With best compliments from", one per line
  compliments: [
    'Smt. & Sri Kottur Laxmi – Narendher',
    'Smt. & Sri Kottur Lalitha – Anjaiah',
    'Smt. & Sri Racharla Lalitha – Ashok',
    'Smt. & Sri Kottur Suwarna – Gangadher',
    'Smt. & Sri Dharabasthu Radha – Shyam',
  ],
  complimentsLabel: 'Best Wishes & Invites From',
  complimentsClosing: 'Entire Ramagiri & Kottur Families and Relatives',
}

export default wedding
