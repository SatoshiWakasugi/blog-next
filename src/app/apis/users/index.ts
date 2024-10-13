export const getUsers = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/v1/users/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserPosts = async (id: number, params?: string) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/users/${id}/posts?${params}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
