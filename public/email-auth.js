// Simple email/password login/register using Supabase JS
// This script should be loaded in the landing page

(async function() {
  // Only run on landing page
  if (!window.location.pathname.endsWith("/")) return;
  const form = document.getElementById("email-auth-form");
  const loginBtn = document.getElementById("email-login-btn");
  const registerBtn = document.getElementById("email-register-btn");
  const messageDiv = document.getElementById("email-auth-message");

  // Dynamically import Supabase client
  let supabase;
  try {
    const mod = await import("../lib/supabase/client");
    supabase = mod.createClient();
  } catch (err) {
    messageDiv.textContent = "Supabase client not found.";
    return;
  }

  // Login handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    messageDiv.textContent = "";
    loginBtn.disabled = true;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        messageDiv.textContent = error.message;
      } else {
        messageDiv.textContent = "Login successful! Redirecting...";
        setTimeout(() => window.location.href = "/dashboard", 1200);
      }
    } catch (err) {
      messageDiv.textContent = "Login failed.";
    } finally {
      loginBtn.disabled = false;
    }
  });

  // Register handler
  registerBtn.addEventListener("click", async () => {
    messageDiv.textContent = "";
    registerBtn.disabled = true;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        messageDiv.textContent = error.message;
      } else {
        messageDiv.textContent = "Registration successful! Check your email to confirm.";
      }
    } catch (err) {
      messageDiv.textContent = "Registration failed.";
    } finally {
      registerBtn.disabled = false;
    }
  });
})();
