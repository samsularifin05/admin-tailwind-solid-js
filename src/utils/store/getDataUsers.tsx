// Define interfaces for user and data
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface UserData {
  data: User[];
}

// Fetch function for getting user data
export const fetchUserData = async (page: number): Promise<UserData> => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data: UserData = await response.json();
    return data;
  } catch (error) {
    throw "Test";
  }
};
