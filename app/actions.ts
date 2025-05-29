export async function joinWaitlist(email: string, name: string) {
  try {
    const res = await fetch("/api/waitlist/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });
    return await res.json();
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}