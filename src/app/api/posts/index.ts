export const getPosts = async (published: boolean) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/posts?published=${published}`
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

export const getPost = async (postId: number) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/v1/posts/${postId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
