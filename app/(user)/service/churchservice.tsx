const getChurches = async () => {
  try {
    const response = await fetch('https://church.codex.pro.vn/Journey_of_faith/Church/search');
    if (!response.ok) {
      throw new Error('Failed to fetch churches');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching churches:', error);
    throw error;
  }
};
const getMasses = async (churchId: number, date: string) => {
  try {
    const response = await fetch(`https://church.codex.pro.vn/Journey_of_faith/Mass/search?churchId=${churchId}`); 
    if (!response.ok) {
        throw new Error('Failed to fetch masses');  
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching masses:', error);
    throw error;
  } 
};
export { getChurches, getMasses };
