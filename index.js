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


//  calculate function 

function calculateCounts() {
    
    const cardCount = jobCardsSection.querySelectorAll('.card').length;
    totalCountEl.innerText = cardCount;
    interviewCountEl.innerText = interviewList.length;
    rejectedCountEl.innerText = rejectedList.length;
    checkEmptyState();
}

function applyFilterStyles(selectedId) {
    const buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];

    buttons.forEach(btn => {
        btn.classList.add('bg-gray-300', 'text-black');
        btn.classList.remove('bg-blue-500', 'text-white');
    });

    const selected = document.getElementById(selectedId);
    if (selected) {
        selected.classList.remove('bg-gray-300', 'text-black');
        selected.classList.add('bg-blue-500', 'text-white');
    }
}

function createJobCard(data) {
    const div = document.createElement('div');
    div.className = 'card flex justify-between border border-gray-300 rounded-lg p-4 mt-4';

    
    let statusClass = 'bg-blue-100 text-blue-700';
    if (data.status === 'Interview') {
        statusClass = 'bg-green-100 text-green-700';
    } else if (data.status === 'Rejected') {
        statusClass = 'bg-red-100 text-red-700';
    }

    div.innerHTML = `
        <div class="space-y-3 flex-1">
            <div>
                <p class="cardName font-bold text-lg">${data.jobName}</p>
                <p class="jobs-tittle text-sm text-gray-600">${data.jobTitle}</p>
            </div>
            <div>
                <p class="text1 text-sm text-gray-600">${data.text1}</p>
            </div>
            <div>
                <span class="status ${statusClass} text-xs font-bold px-3 py-1 rounded">${data.status}</span>
            </div>
            <p class="notes text-sm text-gray-700">${data.notes}</p>
            <div class="flex gap-3">
                <button class="interview-btn border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded">INTERVIEW</button>
                <button class="rejected-btn border-2 border-red-500 text-red-500 font-bold py-2 px-4 rounded">REJECTED</button>
            </div>
        </div>
        <div>
            <button class="delete-btn bg-red-500 text-white font-bold py-2 px-3 rounded text-sm">Delete</button>
        </div>
    `;

    return div;
}