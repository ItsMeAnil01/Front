export async function predictHeartRisk(data: Record<string, number>) {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || `HTTP error ${response.status}: Failed to get prediction`);
      }
      return result;
    } catch (error: any) {
      console.error('Fetch error:', error);
      throw new Error(error.message || 'Failed to connect to the server');
    }
  }