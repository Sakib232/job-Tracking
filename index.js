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

// render functions

function renderInterviewList() {
    filterSection.innerHTML = '';
    if (interviewList.length === 0) {
        filterSection.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12">
                <img src="jobs.png" alt="No jobs" class="w-16 h-16">
                <h3 class="mt-4 font-semibold text-lg">No jobs available</h3>
                <p class="text-sm text-gray-500">Check back soon for new opportunities</p>
            </div>`;
        return;
    }
    interviewList.forEach(item => {
        filterSection.appendChild(createJobCard(item));
    });
}

function renderRejectedList() {
    filterSection.innerHTML = '';
    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12">
                <img src="jobs.png" alt="No jobs" class="w-16 h-16">
                <h3 class="mt-4 font-semibold text-lg">No jobs available</h3>
                <p class="text-sm text-gray-500">Check back soon for new opportunities</p>
            </div>`;
        return;
    }
    rejectedList.forEach(item => {
        filterSection.appendChild(createJobCard(item));
    });
}

function toggleView(id) {
    applyFilterStyles(id);

    if (id === 'all-filter-btn') {
        currentFilter = 'all';
        jobCardsSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

    if (id === 'interview-filter-btn') {
        currentFilter = 'interview';
        jobCardsSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterviewList();
    }

    if (id === 'rejected-filter-btn') {
        currentFilter = 'rejected';
        jobCardsSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejectedList();
    }

    calculateCounts();
}