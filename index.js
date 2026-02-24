let interviewList = [];
let rejectedList = [];

let currentFilter = 'all';

// DOM conncected

const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const jobCardsSection = document.getElementById('jobCards');
const filterSection = document.getElementById('filterSection');
const mainContainer = document.querySelector('main');

console.log('Job tracker script loaded; card count =', jobCardsSection.children.length);