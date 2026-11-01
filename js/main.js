/**
 * NextGen Scholars - Client Interactions
 * Uses DevHorizon DLS patterns
 */

(function () {
  "use strict";

  // --- Modal Logic ---
  const modal = document.getElementById("aiEnrollModal");
  let currentTier = "early-bird";

  window.openEnrollModal = function (tier) {
    if (!modal) return;
    if (tier) {
      setEnrollTier(tier);
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeEnrollModal = function () {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    // If it was in submitted state, reset after closing
    setTimeout(() => {
      resetEnrollForm();
    }, 300);
  };

  window.setEnrollTier = function (tier) {
    currentTier = tier;
    const tierInput = document.getElementById("enrollTierInput");
    if (tierInput) tierInput.value = tier;

    const btnEarly = document.getElementById("tierBtnEarly");
    const btnStandard = document.getElementById("tierBtnStandard");
    const submitBtnText = document.getElementById("enrollSubmitBtnText");

    if (tier === "early-bird") {
      btnEarly && btnEarly.classList.add("selected");
      btnStandard && btnStandard.classList.remove("selected");
      if (submitBtnText) submitBtnText.textContent = "Submit AI Engineering Enrollment (₹19,999)";
    } else {
      btnStandard && btnStandard.classList.add("selected");
      btnEarly && btnEarly.classList.remove("selected");
      if (submitBtnText) submitBtnText.textContent = "Submit AI Engineering Enrollment (₹29,999)";
    }
  };

  function resetEnrollForm() {
    const formContainer = document.getElementById("enrollFormContainer");
    const successContainer = document.getElementById("enrollSuccessContainer");
    const form = document.getElementById("aiEnrollForm");

    if (form) form.reset();
    clearFormErrors();
    if (formContainer) formContainer.style.display = "block";
    if (successContainer) successContainer.style.display = "none";
  }

  function clearFormErrors() {
    document.querySelectorAll(".form-error-msg").forEach((el) => (el.textContent = ""));
    document.querySelectorAll(".dls-input-error").forEach((el) => el.classList.remove("dls-input-error"));
  }

  // Handle outside click to close modal
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeEnrollModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeEnrollModal();
    }
  });

  // --- Form Validation & Submission ---
  const enrollForm = document.getElementById("aiEnrollForm");
  if (enrollForm) {
    enrollForm.addEventListener("submit", function (e) {
      e.preventDefault();
      clearFormErrors();

      let hasError = false;
      const name = document.getElementById("enrollName");
      const email = document.getElementById("enrollEmail");
      const phone = document.getElementById("enrollPhone");
      const role = document.getElementById("enrollRole");
      const consent = document.getElementById("enrollConsent");

      if (!name || name.value.trim().length < 2) {
        showError("enrollNameError", name, "Please enter your full name (minimum 2 characters).");
        hasError = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value.trim())) {
        showError("enrollEmailError", email, "Please provide a valid email address.");
        hasError = true;
      }

      const cleanPhone = phone ? phone.value.replace(/[\s\-\(\)]/g, "") : "";
      if (!phone || cleanPhone.length < 10) {
        showError("enrollPhoneError", phone, "Please enter a valid phone number with at least 10 digits.");
        hasError = true;
      }

      if (!role || role.value.trim().length < 2) {
        showError("enrollRoleError", role, "Please specify your college, degree, or professional role.");
        hasError = true;
      }

      if (!consent || !consent.checked) {
        showError("enrollConsentError", null, "You must agree to receive cohort notices to proceed.");
        hasError = true;
      }

      if (hasError) return;

      // Submission Success State
      const subId = "NGS-AI-" + Math.floor(100000 + Math.random() * 900000);
      const subIdElem = document.getElementById("enrollSubmissionId");
      const subNameElem = document.getElementById("enrollSuccessName");
      const subEmailElem = document.getElementById("enrollSuccessEmail");
      const subTierElem = document.getElementById("enrollSuccessTier");

      if (subIdElem) subIdElem.textContent = subId;
      if (subNameElem) subNameElem.textContent = name.value.trim();
      if (subEmailElem) subEmailElem.textContent = email.value.trim();
      if (subTierElem) subTierElem.textContent = currentTier === "early-bird" ? "Early-Bird (₹19,999)" : "Standard (₹29,999)";

      // Persist in localStorage
      try {
        const stored = JSON.parse(localStorage.getItem("ngs_hugo_enrollments") || "[]");
        stored.push({
          submissionId: subId,
          course: "AI Engineering & Generative AI",
          tier: currentTier,
          fullName: name.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim(),
          role: role.value.trim(),
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem("ngs_hugo_enrollments", JSON.stringify(stored));
      } catch (err) {
        console.error("Local storage error:", err);
      }

      const formContainer = document.getElementById("enrollFormContainer");
      const successContainer = document.getElementById("enrollSuccessContainer");
      if (formContainer) formContainer.style.display = "none";
      if (successContainer) successContainer.style.display = "block";
    });
  }

  function showError(errElemId, inputElem, message) {
    const errEl = document.getElementById(errElemId);
    if (errEl) errEl.textContent = message;
    if (inputElem) inputElem.classList.add("dls-input-error");
  }

  // --- Accordion Logic (Curriculum & FAQs) ---
  window.toggleAccordion = function (btn) {
    const item = btn.closest(".accordion-item");
    if (!item) return;
    item.classList.toggle("open");
  };

  window.expandAllCurriculum = function () {
    document.querySelectorAll("#curriculumList .accordion-item").forEach((el) => {
      el.classList.add("open");
    });
  };

  window.collapseAllCurriculum = function () {
    document.querySelectorAll("#curriculumList .accordion-item").forEach((el) => {
      el.classList.remove("open");
    });
  };

  // --- Live Curriculum Search Filter ---
  const searchInput = document.getElementById("curriculumSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const q = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll("#curriculumList .accordion-item");
      let visibleCount = 0;

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          item.style.display = "block";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      const noResults = document.getElementById("curriculumNoResults");
      if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }

  window.closeMobileMenu = function () {
    if (mobileMenu) mobileMenu.classList.remove("active");
  };
})();
