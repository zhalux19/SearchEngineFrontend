export async function handleResponse(response) {
    if (response.ok) return response.json();
    const error = await response.text();
    throw new Error(error);
  }
  
  export function handleError(error) {
    throw error;
  }
  