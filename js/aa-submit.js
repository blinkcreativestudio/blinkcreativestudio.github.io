emailjs.init("TMFJf-S2GoczliztR");

const supabaseUrl = "https://gkiiaelkmdctjlyxtsnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdraWlhZWxrbWRjdGpseXh0c25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNDcyNzQsImV4cCI6MjAyNDcyMzI3NH0.Bf78TWba-hP2vN_9CIxBUWfq8nAcVX5g3DNgQc3jD9U";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

function sendFormData(event) {
  event.preventDefault();

  const formData = {
    position: "Admin Assistant",
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    address: document.getElementById("address").value,
    portfolioLink: document.getElementById("portfolioLink").value,
  };

  const resumeFile = document.getElementById("resume").files[0];
  const coverLetterFile = document.getElementById("coverLetter").files[0];

  const uploadResume = supabaseClient.storage
    .from("resumes")
    .upload(
      `${formData.firstName}-${formData.lastName}-resume.pdf`,
      resumeFile
    );
  const uploadCoverLetter = supabaseClient.storage
    .from("resumes")
    .upload(
      `${formData.firstName}-${formData.lastName}-cover_letter.pdf`,
      coverLetterFile
    );

  Promise.all([uploadResume, uploadCoverLetter])
    .then(() => {
      formData.resumeUrl = `https://gkiiaelkmdctjlyxtsnq.supabase.co/storage/v1/object/public/resumes/${formData.firstName}-${formData.lastName}-resume.pdf`;
      formData.coverLetterUrl = `https://gkiiaelkmdctjlyxtsnq.supabase.co/storage/v1/object/public/resumes/${formData.firstName}-${formData.lastName}-cover_letter.pdf`;

      emailjs
        .send("service_p2z9f58", "template_tp6s7dq", formData)
        .then(function (response) {
          console.log("Email sent successfully:", response);
          alert("Application submitted successfully!");
        })
        .catch(function (error) {
          console.error("Email sending failed:", error);
          alert("Failed to submit application. Please try again later.");
        });
    })
    .catch((error) => {
      console.error("File upload failed:", error);
      alert("Failed to upload files. Please try again later.");
    });
}

const form = document.getElementById("jobApplicationForm");
form.addEventListener("submit", sendFormData);
