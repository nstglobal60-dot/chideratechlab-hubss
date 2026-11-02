"use strict";

/*
  CHIDERATECHLAB-HUB WEBSITE

  Browser-only version:
  - Course details and fees are editable by the administrator.
  - Student records are stored in this browser.
  - This is not a secure server-side admin system.
  - For a live business website, connect a backend database.
*/

const DEFAULT_PASSWORD = "ChangeThisAdminPIN";
const COURSE_KEY = "ctlh_courses_v2";
const STUDENT_KEY = "ctlh_students_v2";
const PASSWORD_KEY = "ctlh_admin_password_v2";

const $ = id => document.getElementById(id);

const defaultCourses = [
  {
    id: "word",
    name: "Microsoft Word",
    price: 50000,
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    image: "course-image/Microsoft Word.png",
    description: "Learn to create, format and manage professional documents for offices, schools, organisations and businesses.",
    audience: "Beginners, students, job seekers, office workers and business owners.",
    requirements: "No advanced experience required. Basic computer knowledge is helpful.",
    modules: [
      "Introduction to Microsoft Word and its interface",
      "Typing, editing, selecting and moving text",
      "Font formatting, paragraph formatting and alignment",
      "Page margins, orientation, size and page layout",
      "Bullets, numbering, borders and shading",
      "Creating and formatting professional tables",
      "Inserting pictures, shapes, icons and text boxes",
      "Headers, footers and page numbering",
      "Styles, page breaks and document sections",
      "Mail Merge for letters, labels and certificates",
      "CV writing, business letters and official reports",
      "Printing, PDF export and document management"
    ],
    outcomes: [
      "Create professional letters and reports.",
      "Design CVs and job application documents.",
      "Format tables and official documents.",
      "Prepare certificates and bulk letters using Mail Merge.",
      "Save, export and print documents professionally."
    ],
    projects: [
      "Design a professional CV.",
      "Prepare an official business letter.",
      "Create a structured company report.",
      "Design a certificate and perform a Mail Merge exercise."
    ],
    careers: "Administrative assistant, office assistant, secretary, document preparation assistant and data-entry support."
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    price: 50000,
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    image: "./course-image/Microsoft Excel.png",
    description: "Build spreadsheet skills for calculations, business records, data organisation, reporting and basic analysis.",
    audience: "Students, graduates, job seekers, business owners, accountants and office professionals.",
    requirements: "Basic computer knowledge and willingness to practise.",
    modules: [
      "Introduction to Excel, workbooks, worksheets, rows and columns",
      "Data entry, editing and formatting",
      "Excel tables and structured data",
      "Sorting and filtering records",
      "Basic formulas and cell references",
      "SUM, AVERAGE, MIN, MAX and COUNT",
      "IF, COUNTIF, SUMIF and related functions",
      "Data validation and drop-down lists",
      "Conditional formatting and duplicate identification",
      "Data cleaning and handling missing values",
      "Charts and professional reporting",
      "PivotTables and PivotCharts",
      "Lookup functions and practical reporting",
      "Introduction to dashboards and business analysis"
    ],
    outcomes: [
      "Create structured spreadsheets.",
      "Calculate totals, averages and business figures.",
      "Clean and organise datasets.",
      "Identify duplicate and missing records.",
      "Summarise information using PivotTables.",
      "Prepare charts, reports and basic dashboards."
    ],
    projects: [
      "Build a student registration and payment tracker.",
      "Prepare a sales and profit analysis report.",
      "Create an employee attendance register.",
      "Build a PivotTable summary and management dashboard."
    ],
    careers: "Data-entry officer, administrative assistant, reporting assistant, accounts assistant and junior data analyst."
  },
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint",
    price: 50000,
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    image: "./course-image/Microsoft PowerPoint.jpeg",
    description: "Learn to plan and design attractive presentations for education, business, training and professional communication.",
    audience: "Students, teachers, trainers, office workers, presenters and business owners.",
    requirements: "Basic computer knowledge is helpful.",
    modules: [
      "Introduction to PowerPoint and presentation planning",
      "Creating, saving and organising presentations",
      "Slide layouts, themes and design principles",
      "Text formatting and visual hierarchy",
      "Working with pictures, shapes and icons",
      "Tables, charts and SmartArt",
      "Transitions and animations",
      "Speaker notes and presentation delivery",
      "Presentation design and consistency",
      "Exporting presentations to PDF and sharing"
    ],
    outcomes: [
      "Create professional slide presentations.",
      "Apply suitable layouts and themes.",
      "Use pictures, tables and charts effectively.",
      "Add appropriate animations and transitions.",
      "Present information clearly and confidently."
    ],
    projects: [
      "Create a professional business introduction.",
      "Design a school or training presentation.",
      "Prepare a company project proposal presentation."
    ],
    careers: "Presentation designer, administrative assistant, trainer, sales support and business communication assistant."
  },
  {
    id: "web",
    name: "Web Development",
    price: 250000,
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    image: "./course-image/Web Development.jpeg",
    description: "Learn how to plan, design and build responsive websites using HTML, CSS and JavaScript.",
    audience: "Beginners, students, entrepreneurs and people interested in web development.",
    requirements: "Basic computer skills, access to a computer and commitment to regular practice.",
    modules: [
      "Introduction to the internet and how websites work",
      "Setting up a code editor and project folders",
      "HTML structure, headings, paragraphs and links",
      "Images, lists, tables and forms in HTML",
      "Semantic HTML and website organisation",
      "CSS selectors, colours, fonts and spacing",
      "Flexbox, Grid and responsive design",
      "Website navigation and reusable layouts",
      "JavaScript variables, data and operators",
      "Functions, conditions and events",
      "DOM interaction and form validation",
      "Website testing, accessibility and basic SEO",
      "Publishing and maintaining a website"
    ],
    outcomes: [
      "Understand the structure of websites.",
      "Build web pages with HTML.",
      "Style responsive websites with CSS.",
      "Add interactive features using JavaScript.",
      "Create and publish a basic business website."
    ],
    projects: [
      "Build a personal portfolio website.",
      "Create a business landing page.",
      "Build a responsive ICT centre website."
    ],
    careers: "Junior web developer, website assistant, freelance website builder and web content support."
  },
  {
    id: "data",
    name: "Data Analysis",
    price: 220000,
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    image: "./course-image/Data Analysis.jpeg",
    description: "Learn how to prepare, clean, analyse and present data to help organisations understand performance and make better decisions.",
    audience: "Graduates, job seekers, business professionals and aspiring data analysts.",
    requirements: "Basic computer knowledge and interest in working with information and numbers.",
    modules: [
      "Introduction to data analysis and the analyst role",
      "Understanding rows, columns and data types",
      "Data collection and data quality",
      "Cleaning missing, duplicate and inconsistent data",
      "Excel formulas for data analysis",
      "Sorting, filtering and conditional formatting",
      "PivotTables and PivotCharts",
      "Business questions and key performance indicators",
      "Dashboard design and visual reporting",
      "Introduction to Power BI",
      "Business insights and recommendations",
      "Portfolio project and presentation"
    ],
    outcomes: [
      "Understand and organise datasets.",
      "Clean inconsistent data.",
      "Analyse business information using Excel.",
      "Create summaries, charts and dashboards.",
      "Explain findings and make practical recommendations."
    ],
    projects: [
      "Analyse a retail sales dataset.",
      "Prepare an employee performance report.",
      "Build a business performance dashboard.",
      "Present findings and recommendations to management."
    ],
    careers: "Junior data analyst, reporting assistant, business intelligence trainee and data-entry/reporting officer."
  },
  {
    id: "va",
    name: "Virtual Assistant",
    price: 150000,
    duration: "8 weeks",
    level: "Beginner",
    Image: "course-image/visual asistant.jpeg",
    description: "Develop the digital, communication and organisation skills needed to support business owners and clients remotely.",
    audience: "Beginners, graduates, job seekers and people interested in remote administrative work.",
    requirements: "Basic computer skills, willingness to learn and internet access for online practice.",
    modules: [
      "Introduction to virtual assistance",
      "Professional communication and email management",
      "Calendar and appointment management",
      "Internet research and information organisation",
      "Microsoft Word and Excel for virtual assistants",
      "File management and cloud collaboration",
      "Customer support and client communication",
      "Social media management fundamentals",
      "Project and task management",
      "AI productivity tools for virtual assistants",
      "Portfolio development and client readiness"
    ],
    outcomes: [
      "Manage email and calendar tasks.",
      "Conduct online research.",
      "Prepare professional documents and spreadsheets.",
      "Support customer service and social media tasks.",
      "Organise client projects and work schedules.",
      "Use digital productivity tools responsibly."
    ],
    projects: [
      "Organise a sample client's calendar.",
      "Prepare an internet research report.",
      "Create a client task tracker.",
      "Develop a virtual assistant service portfolio."
    ],
    careers: "Virtual assistant, executive assistant, customer support assistant and remote administrative assistant."
  },
  {
    id: "complete",
    name: "Complete Digital Skills Training",
    price: 350000,
    duration: "16 weeks",
    level: "Beginner to Intermediate",
    Image: "logo-image/Complete Digital Skills Training.jpeg",
    description: "A broad practical programme covering computer fundamentals, office applications, digital productivity, design and introductory web development.",
    audience: "Beginners who want a structured foundation in several important digital skills.",
    requirements: "No advanced experience required. Regular attendance and practical exercises are important.",
    modules: [
      "Computer fundamentals and file management",
      "Keyboard skills and typing practice",
      "Microsoft Word document production",
      "Microsoft Excel formulas and reporting",
      "Microsoft PowerPoint presentations",
      "Internet research and digital communication",
      "Graphics design fundamentals",
      "Introduction to HTML and CSS",
      "Introduction to JavaScript",
      "AI tools for learning and productivity",
      "Practical projects and portfolio development"
    ],
    outcomes: [
      "Use essential office applications.",
      "Type and format professional documents.",
      "Create spreadsheets and basic reports.",
      "Design presentations and graphics.",
      "Understand basic website development.",
      "Use AI tools to improve productivity."
    ],
    projects: [
      "Create a professional document pack.",
      "Build an Excel record-keeping workbook.",
      "Design a presentation and promotional graphic.",
      "Create a basic multi-page website."
    ],
    careers: "Office assistant, data-entry assistant, digital support assistant, junior website assistant and self-employed digital service provider."
  }
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadData(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : clone(fallback);
  } catch (error) {
    console.error("Could not load saved data:", error);
    return clone(fallback);
  }
}

let courses = loadData(COURSE_KEY, defaultCourses);
let students = loadData(STUDENT_KEY, []);
let currentTab = "registered";

function saveCourses() {
  localStorage.setItem(COURSE_KEY, JSON.stringify(courses));
}

function saveStudents() {
  localStorage.setItem(STUDENT_KEY, JSON.stringify(students));
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function formatMoney(value) {
  return "₦" + Number(value).toLocaleString("en-NG");
}

function getCourse(id) {
  return courses.find(course => course.id === id);
}

function renderCourses() {
  $("courseGrid").innerHTML = courses.map(course => `
    <article class="course-card">
      <img
        src="${escapeHTML(course.image)}"
        alt="${escapeHTML(course.name)} course image"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/800x450/eaf3fb/10243e?text=Course+Image';"
      >
      <div class="course-card-body">
        <h3>${escapeHTML(course.name)}</h3>
        <p>${escapeHTML(course.description)}</p>
        <div class="course-price">${formatMoney(course.price)}</div>
        <button class="btn primary" type="button" data-course="${escapeHTML(course.id)}">
          View Full Course Details
        </button>
      </div>
    </article>
  `).join("");

  $("studentCourse").innerHTML =
    '<option value="">Choose a course</option>' +
    courses.map(course => `
      <option value="${escapeHTML(course.id)}">
        ${escapeHTML(course.name)} — ${formatMoney(course.price)}
      </option>
    `).join("");

  $("editCourse").innerHTML = courses.map(course => `
    <option value="${escapeHTML(course.id)}">${escapeHTML(course.name)}</option>
  `).join("");
}

function renderList(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
}

function showCourseDetails(id) {
  const course = getCourse(id);
  if (!course) return;

  $("courseDetails").innerHTML = `
    <article class="course-detail">
      <img
        class="course-detail-image"
        src="${escapeHTML(course.image)}"
        alt="${escapeHTML(course.name)}"
        onerror="this.onerror=null;this.src='https://placehold.co/800x450/eaf3fb/10243e?text=Course+Image';"
      >

      <span class="eyebrow">CHIDERATECHLAB-HUB TRAINING PROGRAMME</span>
      <h2>${escapeHTML(course.name)}</h2>
      <div class="detail-price">${formatMoney(course.price)}</div>

      <div class="detail-meta">
        <span>Duration: ${escapeHTML(course.duration)}</span>
        <span>Level: ${escapeHTML(course.level)}</span>
      </div>

      <h3>About This Course</h3>
      <p>${escapeHTML(course.description)}</p>

      <h3>Course Curriculum: What You Will Learn</h3>
      ${renderList(course.modules)}

      <h3>Skills You Will Gain</h3>
      ${renderList(course.outcomes)}

      <h3>Practical Projects and Assignments</h3>
      ${renderList(course.projects)}

      <h3>Who Should Enrol?</h3>
      <p>${escapeHTML(course.audience)}</p>

      <h3>Entry Requirements</h3>
      <p>${escapeHTML(course.requirements)}</p>

      <h3>Career Opportunities</h3>
      <p>${escapeHTML(course.careers)}</p>

      <h3>Course Fee and Payment Details</h3>
      <p><strong>Course fee: ${formatMoney(course.price)}</strong></p>
      <p>Bank: First Bank</p>
      <p>Account name: CHIDERATECHLAB-HUB</p>
      <p>Account number: 2048824327</p>
      <p>Please contact the centre to confirm payment and your training start date.</p>

      <br>
      <button class="btn primary" id="modalRegister" data-course="${escapeHTML(course.id)}">
        Register for This Course
      </button>
    </article>
  `;

  $("courseModal").classList.add("show");
}

function closeModal(id) {
  $(id).classList.remove("show");
}

function isAdmin() {
  return sessionStorage.getItem("ctlh_admin_session") === "active";
}

function openAdminLogin() {
  if (isAdmin()) {
    showAdminDashboard();
    return;
  }

  $("loginMessage").textContent = "";
  $("adminPassword").value = "";
  $("loginModal").classList.add("show");
}

function showAdminDashboard() {
  if (!isAdmin()) return;

  $("adminDashboard").classList.add("visible");
  $("adminButton").textContent = "Admin Dashboard";

  updateStats();
  renderStudentTable();
  loadCourseEditor();

  $("adminDashboard").scrollIntoView({ behavior: "smooth" });
}

function loadCourseEditor() {
  const course = getCourse($("editCourse").value) || courses[0];
  if (!course) return;

  $("editCourse").value = course.id;
  $("editPrice").value = course.price;
  $("editImage").value = course.image;
  $("imagePreview").src = course.image;
}

function updateStats() {
  $("registeredCount").textContent =
    students.filter(student => student.status === "registered").length;

  $("graduatedCount").textContent =
    students.filter(student => student.status === "graduated").length;

  $("totalCount").textContent = students.length;
}

function renderStudentTable() {
  const search = $("studentSearch").value.toLowerCase().trim();

  const filtered = students.filter(student => {
    const recordText = [
      student.id, student.name, student.phone,
      student.email, student.courseName, student.address
    ].join(" ").toLowerCase();

    return student.status === currentTab && recordText.includes(search);
  });

  if (!filtered.length) {
    $("studentTable").innerHTML =
      '<tr><td colspan="7">No student records found.</td></tr>';
    updateStats();
    return;
  }

  $("studentTable").innerHTML = filtered.map(student => `
    <tr>
      <td>${escapeHTML(student.id)}</td>
      <td>${escapeHTML(student.name)}</td>
      <td>${escapeHTML(student.phone)}</td>
      <td>${escapeHTML(student.courseName)}</td>
      <td>${escapeHTML(student.payment)}</td>
      <td>${escapeHTML(student.dateRegistered)}</td>
      <td>
        ${student.status === "registered"
          ? `<button class="action-btn graduate-btn" data-action="graduate" data-id="${escapeHTML(student.id)}">Graduate</button>`
          : `<button class="action-btn restore-btn" data-action="restore" data-id="${escapeHTML(student.id)}">Restore</button>`
        }
        <button class="action-btn delete-btn" data-action="delete" data-id="${escapeHTML(student.id)}">Delete</button>
      </td>
    </tr>
  `).join("");

  updateStats();
}

function makeStudentId() {
  return "CTLH-" + Date.now().toString().slice(-9);
}

// COURSE DETAILS
$("courseGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-course]");
  if (button) showCourseDetails(button.dataset.course);
});

// REGISTER FROM COURSE DETAILS
$("courseDetails").addEventListener("click", event => {
  const button = event.target.closest("#modalRegister");
  if (!button) return;

  $("studentCourse").value = button.dataset.course;
  closeModal("courseModal");
  $("register").scrollIntoView({ behavior: "smooth" });
});

// STUDENT REGISTRATION
$("registrationForm").addEventListener("submit", event => {
  event.preventDefault();

  const course = getCourse($("studentCourse").value);
  if (!course) {
    $("registrationMessage").textContent = "Please select a valid course.";
    return;
  }

  const student = {
    id: makeStudentId(),
    name: $("studentName").value.trim(),
    phone: $("studentPhone").value.trim(),
    email: $("studentEmail").value.trim(),
    courseId: course.id,
    courseName: course.name,
    coursePrice: course.price,
    startDate: $("studentStart").value,
    payment: $("studentPayment").value,
    address: $("studentAddress").value.trim(),
    guardian: $("studentGuardian").value.trim(),
    notes: $("studentNotes").value.trim(),
    dateRegistered: new Date().toLocaleDateString("en-NG"),
    status: "registered"
  };

  if (!student.name || !student.phone) {
    $("registrationMessage").textContent = "Please provide your name and phone number.";
    return;
  }

  students.push(student);
  saveStudents();
  $("registrationForm").reset();

  $("registrationMessage").textContent =
    `Thank you. Your registration reference is ${student.id}. Please contact the centre to confirm your enrolment.`;

  if (isAdmin()) renderStudentTable();
});

// ADMIN LOGIN
$("adminButton").addEventListener("click", openAdminLogin);

$("loginForm").addEventListener("submit", event => {
  event.preventDefault();

  const savedPassword =
    localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;

  if ($("adminPassword").value === savedPassword) {
    sessionStorage.setItem("ctlh_admin_session", "active");
    closeModal("loginModal");
    showAdminDashboard();
  } else {
    $("loginMessage").textContent = "Incorrect password. Please try again.";
  }
});

// ADMIN LOGOUT
$("logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("ctlh_admin_session");
  $("adminDashboard").classList.remove("visible");
  $("adminButton").textContent = "Admin Login";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// COURSE EDITING
$("editCourse").addEventListener("change", loadCourseEditor);

$("editImage").addEventListener("input", () => {
  $("imagePreview").src = $("editImage").value;
});

$("courseEditForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!isAdmin()) return;

  const course = getCourse($("editCourse").value);
  const price = Number($("editPrice").value);
  const image = $("editImage").value.trim();

  if (!course || !Number.isFinite(price) || price < 0 || !image) {
    $("editMessage").textContent = "Please enter a valid course fee and image path.";
    return;
  }

  course.price = price;
  course.image = image;

  saveCourses();
  renderCourses();

  $("editMessage").textContent = "Course fee and image have been updated.";
});

// STUDENT RECORD ACTIONS
$("studentTable").addEventListener("click", event => {
  if (!isAdmin()) return;

  const button = event.target.closest("[data-action]");
  if (!button) return;

  const student = students.find(item => item.id === button.dataset.id);
  if (!student) return;

  if (button.dataset.action === "graduate") {
    student.status = "graduated";
  }

  if (button.dataset.action === "restore") {
    student.status = "registered";
  }

  if (button.dataset.action === "delete") {
    const confirmed = confirm(
      `Are you sure you want to permanently delete ${student.name}'s record?`
    );

    if (!confirmed) return;

    students = students.filter(item => item.id !== student.id);
  }

  saveStudents();
  renderStudentTable();
});

$("studentSearch").addEventListener("input", renderStudentTable);

// STUDENT RECORD TABS
document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    currentTab = button.dataset.tab;

    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });

    button.classList.add("active");
    renderStudentTable();
  });
});

// EXPORT STUDENTS TO CSV
$("exportStudents").addEventListener("click", () => {
  if (!isAdmin()) return;

  const headers = [
    "Student ID", "Full Name", "Phone", "Email", "Course",
    "Course Fee", "Payment Status", "Start Date", "Address",
    "Guardian Phone", "Notes", "Registration Date", "Status"
  ];

  const rows = students.map(student => [
    student.id,
    student.name,
    student.phone,
    student.email,
    student.courseName,
    student.coursePrice,
    student.payment,
    student.startDate,
    student.address,
    student.guardian,
    student.notes,
    student.dateRegistered,
    student.status
  ]);

  const csv = [headers, ...rows]
    .map(row => row.map(value =>
      `"${String(value ?? "").replace(/"/g, '""')}"`
    ).join(","))
    .join("\r\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "ChideraTechLab-Student-Records.csv";
  link.click();

  URL.revokeObjectURL(url);
});

// CHANGE ADMIN PASSWORD
$("passwordForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!isAdmin()) return;

  const password = $("newAdminPassword").value;

  if (password.length < 10) {
    $("passwordMessage").textContent =
      "Your new password must contain at least 10 characters.";
    return;
  }

  localStorage.setItem(PASSWORD_KEY, password);
  $("newAdminPassword").value = "";

  $("passwordMessage").textContent =
    "Password updated in this browser.";
});

// COPY BANK DETAILS
$("copyBank").addEventListener("click", async () => {
  const details =
    "Bank: First Bank\nAccount Name: CHIDERATECHLAB-HUB\nAccount Number: 2048824327";

  try {
    await navigator.clipboard.writeText(details);
    $("copyBank").textContent = "Account Details Copied";
  } catch {
    alert(details);
  }
});

// MODAL CLOSE BUTTONS
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal(button.dataset.close);
  });
});

// CLOSE MODAL WHEN CLICKING OUTSIDE IT
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

// MOBILE NAVIGATION
$("menuToggle").addEventListener("click", () => {
  $("navigation").classList.toggle("open");
});

document.querySelectorAll("#navigation a").forEach(link => {
  link.addEventListener("click", () => {
    $("navigation").classList.remove("open");
  });
});

// FOOTER YEAR
$("year").textContent = new Date().getFullYear();

// INITIAL PAGE LOAD
renderCourses();
updateStats();
renderStudentTable();